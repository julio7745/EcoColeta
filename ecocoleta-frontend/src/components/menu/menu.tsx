
import React from 'react';

import '../../styles/menu/menu.css';

import ButtonMenu from './ButtonMenu';

interface ColetaFace {
  _id: string,
  massa: string,
  volume: string,
  cliente: string,
  material: string,
}
interface HeaderProps {
  currentPage: string,
  editOrCreate: string,
  setCurrentPage: (_: string) => void,
  setEditOrCreate: (_: string) => void, 
  setColetaEmEdicao: (_: ColetaFace) => void,
}

function Menu(props: HeaderProps) {

  return(
    <div className='menu'>
      <ButtonMenu {...{
        page: 'Coletas',
        currentPage: props.currentPage,
        editOrCreate: props.editOrCreate,
        setCurrentPage: props.setCurrentPage,
        setEditOrCreate: props.setEditOrCreate,
        setColetaEmEdicao: props.setColetaEmEdicao,
      }}/>
      <ButtonMenu {...{
        page: 'Nova coleta',
        currentPage: props.currentPage,
        editOrCreate: props.editOrCreate,
        setCurrentPage: props.setCurrentPage, 
        setEditOrCreate: props.setEditOrCreate,
        setColetaEmEdicao: props.setColetaEmEdicao,
      }}/>
      <ButtonMenu {...{
        page: 'Relatórios',
        currentPage: props.currentPage,
        editOrCreate: props.editOrCreate,
        setCurrentPage: props.setCurrentPage,
        setEditOrCreate: props.setEditOrCreate,
        setColetaEmEdicao: props.setColetaEmEdicao,
      }}/>
    </div>
  )
}

export default Menu;
