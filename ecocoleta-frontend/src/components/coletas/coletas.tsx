
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import '../../styles/coletas/coletas.css';

import Coleta from './ColetaText';

interface ColetaFace {
  _id: string;
  material: string;
  massa: string;
  volume: string;
  cliente: string;
}
interface coletasFace {
  coletas: ColetaFace[]
}
interface coletasProps {
  setClassNameOfLoading: (className: string) => void
}

function Coletas(props: coletasProps) {
  
  const [coletas, setColetas] = useState<ColetaFace[]>([]);
  
  const fetchData = async () => {

    props.setClassNameOfLoading('loading true')
    
    try {
      
      const response = await axios.get('http://192.168.18.154:3024/getColetas');
      const coletasData = jwtDecode(response.data.token) as coletasFace; 
      
      setColetas( coletasData.coletas || []);
      
    } catch (error) {
      console.error('Erro ao buscar coletas:', error);
    }

    props.setClassNameOfLoading('loading')

  }

  useEffect(() => {
       
    fetchData();

  }, []);
  
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
            <Coleta {
              ...{
              key: coleta._id,
              _id: coleta._id,
              material: coleta.material,
              massa: coleta.massa,
              volume: coleta.volume,
              cliente: coleta.cliente,
              setClassNameOfLoading: props.setClassNameOfLoading 
            }}/>
          ))
        }
      </div>
    );
  }
}

export default Coletas;
