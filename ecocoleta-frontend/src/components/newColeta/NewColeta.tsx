
import React  from 'react';
import axios from 'axios';

import '../../styles/newColeta/newColeta.css';

function NewColeta() {

  const cria = async () => {
    
    try {

      const response = await axios.post('http://192.168.18.154:3024/newColeta', 
      {
        n: 4,
        cliente: 'eu',
        massa: 30,
        volume: 30,
        material: 'couro',
      });
      console.log(response);

    } catch (error) {
      console.error('Erro ao criar coleta:', error);
    }
  }
  
  return (
    <div className='formNewColeta' onClick={ () => cria() }>oii</div>
  )

}

export default NewColeta;
