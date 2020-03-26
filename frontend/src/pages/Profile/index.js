import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiPower, FiTrash2 } from "react-icons/fi";
import logoImg from '../../assets/logo.svg';
import './styles.css';

import api from '../../services/api';

export default function Register () {
  const history = useHistory();

  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  async function handleDelateIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      })

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (error) {
      alert("erro ao deletar caso, tente novamente");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  useEffect(() => {
    async function callRequest(){
      const response = await api.get('profile', {
        headers: {
          Authorization: ongId,
        }
      });
      setIncidents(response.data);
    }
    callRequest();
  }, [ongId])

  return (
    <div className="profile-conteiner" >
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem Vinda, {ongName}</span>
        
        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>

        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.desciption}</p>

            <strong>VALOR</strong>
            <p>{Intl.NumberFormat('pt-BR', { 
              style: 'currency',
              currency:
              'BRL'}).format(incident.value)}
            </p>

            <button onClick={() => handleDelateIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
