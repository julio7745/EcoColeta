
import React from 'react';
import '../../styles/header/header.css';

import Menu from '../menu/menu'

import logo from '../../assets/imgs/icos/plantinha.png';

interface HeaderProps {
  currentPage: string,
  setCurrentPage: (page: string) => void,
}

function Header(props: HeaderProps) {

  return(
    <div className='header'>
      <div className='container'>
        <div className="title">Eco Coleta</div>
        <img src={logo} alt="LOGO"/>
      </div>
      <Menu {...{
        currentPage: props.currentPage,
        setCurrentPage: props.setCurrentPage, 
      }}/>
    </div>
  )
}

export default Header;
