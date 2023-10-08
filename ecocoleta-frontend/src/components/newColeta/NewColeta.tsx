
import React, { useState } from 'react';

import '../../styles/newColeta/newColeta.css';

import FormCamp from './form/FormCamp'

import armazenaColeta from '../../services/armazenaColeta'

interface ColetaFace {
  _id: string,
  massa: string,
  volume: string,
  cliente: string,
  material: string,
}
interface NewColetaProps {
  editOrCreate: string,
  coletaEmEdicao: ColetaFace,
  setCurrentPage: (_: string) => void,
  setClassNameOfLoading: (_: string) => void,
}

function NewColeta(props: NewColetaProps) {

  const [coleta, setColeta] = useState({
    massa: '',
    volume: '',
    cliente: '',
    material: '',
  });

  const [mensagem, setMensagem] = useState('');
  const [exibirMensagem, setExibirMensagem] = useState(false);
  const [ClassNameOfFeedback, setClassNameOfFeedback] = useState('');
  
  return (
    <div className='formNewColeta'>
      { exibirMensagem && <p className={ClassNameOfFeedback}>{mensagem}</p> }     
      <FormCamp {...{
        coleta,
        setColeta,
        type: 'text',
        name: 'cliente',
        editOrCreate: props.editOrCreate,
        coletaEmEdicao: props.coletaEmEdicao,
      }}/>
      <FormCamp {...{
        coleta,
        setColeta,
        type: 'text',
        name: 'material',
        editOrCreate: props.editOrCreate,
        coletaEmEdicao: props.coletaEmEdicao,
      }}/>
      <FormCamp {...{
        coleta,
        setColeta,
        name: 'massa',
        type: 'number',
        editOrCreate: props.editOrCreate,
        coletaEmEdicao: props.coletaEmEdicao,
      }}/>
      <FormCamp {...{
        coleta,
        setColeta,
        name: 'volume',
        type: 'number',
        editOrCreate: props.editOrCreate,
        coletaEmEdicao: props.coletaEmEdicao,
      }}/>
      <button onClick={
        ()=>{
          armazenaColeta({...{
            coleta,
            editOrCreate: props.editOrCreate,
            setColeta,
            setMensagem,
            setExibirMensagem,
            setClassNameOfFeedback,
            setClassNameOfLoading: props.setClassNameOfLoading,
          }})
        }
      }>{ props.editOrCreate === 'edit' ? 'Salvar coleta' : 'Criar Coleta' }</button>
    </div>
  );
}

export default NewColeta;
