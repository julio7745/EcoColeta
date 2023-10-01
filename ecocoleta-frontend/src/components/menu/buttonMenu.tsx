
import React from 'react';
import '../../styles/menu/buttonMenu.css';

interface HeaderProps {
  page: string,
  currentPage: string,
  setCurrentPage: (page: string) => void,
}

function ButtonMenu(props: HeaderProps) {

  const className = props.currentPage === props.page ? 'buttonMenu select' : 'buttonMenu'; 

  return(
    <div 
      className={className}  
      onClick={()=>props.setCurrentPage(props.page)}
    >
      {props.page}
    </div>
  )
}

export default ButtonMenu;
