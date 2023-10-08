
import React from 'react';

import '../../styles/coletas/coleta.css';

import ColetaButton from './ColetaButton';

interface ColetaFace {
    _id: string;
    material: string;
    massa: string;
    volume: string;
    cliente: string;
    setClassNameOfLoading: (className: string) => void
}

function Coleta(props: ColetaFace) {
  
    return (
        <div className='coleta'>
            <p>Material: {props.material}</p>
            <p>Massa: {props.massa}</p>
            <p>Volume: {props.volume}</p>
            <p>Cliente: {props.cliente}</p>
            <ColetaButton {...{
                _id: props._id,
                setClassNameOfLoading: props.setClassNameOfLoading 
            }}/>
        </div>
    );
}

export default Coleta;
