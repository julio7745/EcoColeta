
import axios from 'axios';
import React from 'react';

import '../../styles/coletas/confirmarDelecao.css';

interface ConfirmarDelecaoProps {
    mostraConfirmacao: string,
    setMostraConfirmacao: (className: string) => void,
    n: number,
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
                        await axios.delete(`http://192.168.18.154:3024/delete/${props.n}`)
                        window.location.reload();
                    }}
                >
                    <strong>Confimar</strong>
                </div>
            </div>
        </div>
    )

}

export default ConfirmarDelecao;
