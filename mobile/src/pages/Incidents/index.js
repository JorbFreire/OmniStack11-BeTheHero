import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import logo from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
  const navigation = useNavigation();

  const [incidents, setIncidents] = useState([]);
  const [totalIncidents, setTotalIncidents] = useState(0);

  function navigateToDetail() {
    navigation.navigate('details')
  }

  async function loadIncidents() {
    const response = await api.get('incidents');

    setIncidents(response.data);
    setTotalIncidents(response.headers[X-Total-Count]);
  }

  useEffect(() => {
    loadIncidents()
  }, [incidents]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{totalIncidents} Casos </Text>
        </Text>
      </View>
      
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos a baixo e salve o dia</Text>

      <FlatList 
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident}) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>
            
            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>
            
            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailsButtonText}>
                Ver mais detalhes
              </Text>
              <Feather name="arrow-right" size={17} color={'#E02041'} />
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>

    </View>
  );
}