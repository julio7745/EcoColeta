
import React from 'react';

import '../../styles/header/header.css';

import Menu from '../menu/Menu';

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

function Header(props: HeaderProps) {

  return(
    <div className='header'>
      <div className='titleContainer'>
        <div className="title">Eco Coleta</div>
        <div className="logo"></div>
      </div>
      <Menu {...{
        currentPage: props.currentPage,
        editOrCreate: props.editOrCreate,
        setCurrentPage: props.setCurrentPage, 
        setEditOrCreate: props.setEditOrCreate,
        setColetaEmEdicao: props.setColetaEmEdicao,
      }}/>
    </div>
  );
}

export default Header;
