import React from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { Feather } from '@expo/vector-icons';

import logo from '../../assets/logo.png'

import styles from './styles';

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('details')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 Casos </Text>
        </Text>
      </View>
      
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos a baixo e salve o dia</Text>

      <FlatList 
        data={[1, 2, 3]}
        style={styles.incidentList}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>
            
            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Aconteceu alguma coisa aqui</Text>
            
            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>R$ 120,00</Text>

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