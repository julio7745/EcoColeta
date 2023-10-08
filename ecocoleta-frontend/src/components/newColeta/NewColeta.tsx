
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

  const [dados, setDados] = useState({
    cliente: '',
    massa: '',
    volume: '',
    material: '',
  });

  const [mensagem, setMensagem] = useState('');
  const [exibirMensagem, setExibirMensagem] = useState(false);
  const [ClassNameOfFeedback, setClassNameOfFeedback] = useState('');
  
  return (
    <div className='formNewColeta'>
      { exibirMensagem && <p className={ClassNameOfFeedback}>{mensagem}</p> }     
      <FormCamp {...{
        dados,
        setDados,
        name: 'cliente',
        type: 'text',
        editOrCreate: props.editOrCreate,
        coletaEmEdicao: props.coletaEmEdicao,
      }}/>
      <FormCamp {...{
        dados,
        setDados,
        name: 'material',
        type: 'text',
        editOrCreate: props.editOrCreate,
        coletaEmEdicao: props.coletaEmEdicao,
      }}/>
      <FormCamp {...{
        dados,
        setDados,
        name: 'massa',
        type: 'number',
        editOrCreate: props.editOrCreate,
        coletaEmEdicao: props.coletaEmEdicao,
      }}/>
      <FormCamp {...{
        dados,
        setDados,
        name: 'volume',
        type: 'number',
        editOrCreate: props.editOrCreate,
        coletaEmEdicao: props.coletaEmEdicao,
      }}/>
      <button onClick={
        ()=>{
          armazenaColeta({...{
            dados,
            setMensagem,
            setClassNameOfFeedback,
            setDados,
            setExibirMensagem,
            setClassNameOfLoading: props.setClassNameOfLoading,
            editOrCreate: props.editOrCreate
          }})
        }
      }>{ props.editOrCreate === 'edit' ? 'Salvar coleta' : 'Criar Coleta' }</button>
    </div>
  )
}

export default NewColeta;
