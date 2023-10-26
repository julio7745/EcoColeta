
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useState, useEffect } from 'react';

import '../../styles/coletas/coletas.css';

import Coleta from './ColetaText';

interface ColetaFace {
  _id: string,
  massa: string,
  volume: string,
  cliente: string,
  material: string,
}
interface coletasFace {
  coletas: ColetaFace[],
}
interface coletasProps {
  setCurrentPage: (_: string) => void,
  setEditOrCreate: (_: string) => void,
  setColetaEmEdicao: (_: ColetaFace) => void,
  setClassNameOfLoading: (_: string) => void,
}

function Coletas(props: coletasProps) {
  
  const [coletas, setColetas] = useState<ColetaFace[]>([]);
  
  const fetchData = async () => {
      
    props.setClassNameOfLoading('loading true');

    const apiBackEnd = process.env.REACT_APP_API_BACKEND;
    
    try {
      
      const response = await axios.get(`${apiBackEnd}/getColetas`);
      const coletasData = jwtDecode(response.data.token) as coletasFace; 
      
      setColetas( coletasData.coletas || []);
      
    } catch (error) {
      console.error('Erro ao buscar coletas:', error);
    }
    
    props.setClassNameOfLoading('loading');
    
  }

  // eslint-disable-next-line
  useEffect(() => { fetchData() }, []);
  
  if (coletas.length <= 0) {
    return (
      <div className='container'>
        <div className='alert'>
          Ainda não foi cadastrada nenhuma coleta.
        </div>
      </div>
    );
  } else {
    return (
      <div className='container'>
        {
          coletas.map(coleta => (
            <Coleta {...{
              coleta,
              key: coleta._id,
              setCurrentPage: props.setCurrentPage,
              setEditOrCreate: props.setEditOrCreate,
              setColetaEmEdicao: props.setColetaEmEdicao, 
              setClassNameOfLoading: props.setClassNameOfLoading,
            }}/>
          ))
        }
      </div>
    );
  }
}

export default Coletas;
