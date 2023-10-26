
import React from 'react';

import '../../styles/menu/buttonMenu.css';

interface ColetaFace {
  _id: string,
  massa: string,
  volume: string,
  cliente: string,
  material: string,
}
interface ButtonMenuProps {
  page: string,
  currentPage: string,
  editOrCreate: string,
  setCurrentPage: (_: string) => void,
  setEditOrCreate: (_: string) => void, 
  setColetaEmEdicao: (_: ColetaFace) => void,
}

function ButtonMenu(props: ButtonMenuProps) {

  const className = props.currentPage === props.page ? 'buttonMenu select' : 'buttonMenu'; 

  return(
    <div 
      className={className}  
      onClick={()=>{
        if(props.page !== 'Nova coleta'){
          props.setEditOrCreate('create')
          props.setColetaEmEdicao({
            _id: '',
            massa: '',
            volume: '',
            cliente: '',
            material: '',
          })
        }
        props.setCurrentPage(props.page)
      }}
    >
      {props.page === 'Nova coleta' && props.editOrCreate === "create" ? props.page : 
        props.page === 'Nova coleta' && props.editOrCreate === "edit" ? "Editar coleta" : 
        props.page
      }
    </div>
  )
}

export default ButtonMenu;
