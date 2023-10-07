
import React from 'react';

import '../../styles/coletas/coleta.css';

import ColetaButton from './ColetaButton';

interface ColetaFace {
    n: number;
    material: string;
    massa: string;
    volume: string;
    cliente: string;
}

function Coleta(props: ColetaFace) {
  
    return (
        <div className='coleta'>
            <p>Material: {props.material}</p>
            <p>Massa: {props.massa}</p>
            <p>Volume: {props.volume}</p>
            <p>Cliente: {props.cliente}</p>
            <ColetaButton {...{
                coleta: props.n,
            }}/>
        </div>
    );
}

export default Coleta;