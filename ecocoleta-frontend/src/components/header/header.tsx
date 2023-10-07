
import React from 'react';
import '../../styles/header/header.css';

import Menu from '../menu/menu';

interface HeaderProps {
  currentPage: string,
  setCurrentPage: (page: string) => void,
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
        setCurrentPage: props.setCurrentPage, 
      }}/>
    </div>
  )
}

export default Header;
