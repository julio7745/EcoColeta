
import React from 'react';
import '../../styles/menu/menu.css';

import ButtonMenu from './ButtonMenu';

interface HeaderProps {
  currentPage: string,
  setCurrentPage: (page: string) => void,
}

function Menu(props: HeaderProps) {

  return(
    <div className='menu'>
      <ButtonMenu {...{
        page: 'Coletas',
        currentPage: props.currentPage,
        setCurrentPage: props.setCurrentPage, 
      }}/>
      <ButtonMenu {...{
        page: 'Nova coleta',
        currentPage: props.currentPage,
        setCurrentPage: props.setCurrentPage, 
      }}/>
      <ButtonMenu {...{
        page: 'Relatórios',
        currentPage: props.currentPage,
        setCurrentPage: props.setCurrentPage, 
      }}/>
    </div>
  )
}

export default Menu;
