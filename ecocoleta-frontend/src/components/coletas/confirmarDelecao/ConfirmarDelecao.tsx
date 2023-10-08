
import axios from 'axios';
import React from 'react';

import '../../../styles/coletas/confirmarDelecao.css';


interface ConfirmarDelecaoProps {
    mostraConfirmacao: string,
    _id: string,
    setMostraConfirmacao: (className: string) => void,
    setClassNameOfLoading: (className: string) => void
}

function ConfirmarDelecao(props: ConfirmarDelecaoProps) {

    return(
        <div className={props.mostraConfirmacao}>
            <p>
                <strong>
                    Tem certeza de que quer excluir esta coleta? Ela será perdida para sempre.
                </strong>
            </p>
            <p>
                (É um tempão!)
            </p>
            <div>
                <div className='coletaButton editar'
                    onClick={()=>props.setMostraConfirmacao('confirmacao')}
                >
                    <strong>Cancelar</strong>
                </div>
                <div className='coletaButton apagar' 
                    onClick={async () => {
                        props.setClassNameOfLoading('loading true')
                        await axios.delete(`http://192.168.18.154:3024/delete/${props._id}`)
                        window.location.reload();
                        props.setClassNameOfLoading('loading')
                    }}
                >
                    <strong>Confimar</strong>
                </div>
            </div>
        </div>
    )
}

export default ConfirmarDelecao;
