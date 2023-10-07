
import React, { useState } from 'react';

import '../../styles/newColeta/newColeta.css';

import FormCamp from './form/formCamp'

import armazenaColeta from '../../services/armazenaColeta'

interface NewColetaProps {
  setCurrentPage: (page: string) => void,
}

function NewColeta(props: NewColetaProps) {

  const [dados, setDados] = useState({
    cliente: '',
    massa: '',
    volume: '',
    material: '',
  });

  const [mensagem, setMensagem] = useState('');
  const [exibirMensagem, setExibirMensagem] = useState(false);
  const [className, setClassName] = useState('');
  
  return (
    <div className='formNewColeta'>
      { exibirMensagem && <p className={className}>{mensagem}</p> }     
      <FormCamp {...{
        dados: dados,
        setDados: setDados,
        name: 'cliente',
        type: 'text'
      }}/>
      <FormCamp {...{
        dados: dados,
        setDados: setDados,
        name: 'material',
        type: 'text'
      }}/>
      <FormCamp {...{
        dados: dados,
        setDados: setDados,
        name: 'massa',
        type: 'number'
      }}/>
      <FormCamp {...{
        dados: dados,
        setDados: setDados,
        name: 'volume',
        type: 'number'
      }}/>
      <button onClick={()=>armazenaColeta({...{
        setMensagem: setMensagem,
        setClassName: setClassName,
        setDados: setDados,
        setExibirMensagem: setExibirMensagem,
        dados: dados
      }})}>Criar Coleta</button>
    </div>
  )
}

export default NewColeta;
