
import React from 'react';

import '../../styles/coletas/coleta.css';

import ColetaButton from './ColetaButton';

interface ColetaFace {
    _id: string,
    massa: string,
    volume: string,
    cliente: string,
    material: string,
}
interface ColetaProps {
    coleta: ColetaFace
    setCurrentPage: (_: string) => void,
    setEditOrCreate: (_: string) => void,
    setColetaEmEdicao: (_: ColetaFace) => void,
    setClassNameOfLoading: (_: string) => void,
}

function Coleta(props: ColetaProps) {
  
    return (
        <div className='coleta'>
            <p>Cliente: {props.coleta.cliente}</p>
            <p>Material: {props.coleta.material}</p>
            <p>Massa: {props.coleta.massa}</p>
            <p>Volume: {props.coleta.volume}</p>
            <ColetaButton {...{
                coleta: props.coleta,
                setCurrentPage: props.setCurrentPage,
                setEditOrCreate: props.setEditOrCreate,
                setColetaEmEdicao: props.setColetaEmEdicao,
                setClassNameOfLoading: props.setClassNameOfLoading ,
            }}/>
        </div>
    );
}

export default Coleta;
