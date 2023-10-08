
import React, { useState } from 'react';

import '../../styles/coletas/coletaButton.css';

import ConfirmarDelecao from './confirmarDelecao/ConfirmarDelecao'

interface ColetaFace {
    _id: string,
    massa: string,
    volume: string,
    cliente: string,
    material: string,
}
interface coletaButtonProps {
    coleta: ColetaFace,
    setCurrentPage: (_: string) => void,
    setEditOrCreate: (_: string) => void,
    setColetaEmEdicao: (_: ColetaFace) => void,
    setClassNameOfLoading: (_: string) => void,
}

function ColetaButton(props: coletaButtonProps) {

    const [mostraConfirmacao, setMostraConfirmacao] = useState('confirmacao')

    return (
        <div>
            <div className='coletaButton editar' onClick={
                () => {
                    props.setEditOrCreate('edit');
                    props.setCurrentPage('Nova coleta');
                    props.setColetaEmEdicao({
                        _id: props.coleta._id,
                        massa: props.coleta.massa,
                        volume: props.coleta.volume,
                        cliente: props.coleta.cliente,
                        material: props.coleta.material,
                    });
                }
            }>Editar</div>
            <div className='coletaButton apagar' onClick={
                () => setTimeout(()=>setMostraConfirmacao('confirmacao visible'), 100)
            }> Apagar </div>
            {
                mostraConfirmacao && (
                    <ConfirmarDelecao {...{
                        mostraConfirmacao,
                        setMostraConfirmacao,
                        _id: props.coleta._id,
                        setClassNameOfLoading: props.setClassNameOfLoading,
                    }}/>
                )
            }
        </div>
    );
}

export default ColetaButton;
