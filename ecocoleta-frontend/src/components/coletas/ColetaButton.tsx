import React, { useState } from 'react';

import '../../styles/coletas/coletaButton.css';

import ConfirmarDelecao from './ConfirmarDelecao'

interface coletaButton {
    _id: string,
    setClassNameOfLoading: (className: string) => void
}

function ColetaButton(props: coletaButton) {

    const [mostraConfirmacao, setMostraConfirmacao] = useState('confirmacao')

    return (
        <div>
            <div className='coletaButton editar' >Editar</div>
            <div className='coletaButton apagar' 
                onClick={
                    () => setTimeout(()=>setMostraConfirmacao('confirmacao visible'), 100)
                }
            >
                Apagar
            </div>

            {
                mostraConfirmacao && (
                    <ConfirmarDelecao {...{
                        mostraConfirmacao,
                        setMostraConfirmacao,
                        _id: props._id,
                        setClassNameOfLoading: props.setClassNameOfLoading 
                    }}/>
                )
            }
        </div>
    )

}

export default ColetaButton;
