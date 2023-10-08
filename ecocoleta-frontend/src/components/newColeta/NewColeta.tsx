
import React, { useState } from 'react';

import '../../styles/newColeta/newColeta.css';

import FormCamp from './form/FormCamp'

import armazenaColeta from '../../services/armazenaColeta'

interface NewColetaProps {
  setCurrentPage: (page: string) => void,
  setClassNameOfLoading: (className: string) => void,
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
        dados,
        setDados,
        name: 'cliente',
        type: 'text'
      }}/>
      <FormCamp {...{
        dados,
        setDados,
        name: 'material',
        type: 'text'
      }}/>
      <FormCamp {...{
        dados,
        setDados,
        name: 'massa',
        type: 'number'
      }}/>
      <FormCamp {...{
        dados,
        setDados,
        name: 'volume',
        type: 'number'
      }}/>
      <button onClick={()=>armazenaColeta({...{
        setMensagem,
        setClassName,
        setDados,
        setExibirMensagem,
        dados,
        setClassNameOfLoading: props.setClassNameOfLoading
      }})}>Criar Coleta</button>
    </div>
  )
}

export default NewColeta;
