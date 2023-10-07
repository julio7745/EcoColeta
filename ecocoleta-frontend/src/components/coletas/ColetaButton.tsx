
import React from 'react';

import '../../styles/coletas/coletaButton.css';

interface coletaButton {
    coleta: Number,
}

function ColetaButton(props: coletaButton) {

    return (
        <div className='coletaButton' >Editar</div>
    )

}

export default ColetaButton;
