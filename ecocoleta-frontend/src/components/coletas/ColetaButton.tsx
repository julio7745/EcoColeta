import React, { useState } from 'react';

import '../../styles/coletas/coletaButton.css';

import ConfirmarDelecao from './ConfirmarDelecao'

interface coletaButton {
    n: number,
}

function ColetaButton(props: coletaButton) {

    const [mostraConfirmacao, setMostraConfirmacao] = useState('confirmacao')

    return (
        <div>
            <div className='coletaButton editar' >Editar</div>
            <div className='coletaButton apagar' 
                onClick={()=>setMostraConfirmacao('confirmacao visible')}
            >
                Apagar
            </div>

            {
                mostraConfirmacao && (
                    <ConfirmarDelecao {...{
                        mostraConfirmacao,
                        setMostraConfirmacao,
                        n: props.n
                    }}/>
                )
            }
        </div>
    )

}

export default ColetaButton;
