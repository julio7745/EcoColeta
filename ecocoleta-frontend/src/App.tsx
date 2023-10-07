import React, { useState } from 'react';
import './styles/App.css';

import Header from './components/header/Header';
import Coletas from "./components/coletas/Coletas";
import NewColeta from "./components/newColeta/NewColeta";
import Footer from "./components/footer/Footer";

function App() {
  
  const [currentPage, setCurrentPage] = useState('Coletas');

  return (
    <div className="App">
      <Header {...{
        currentPage: currentPage,
        setCurrentPage: setCurrentPage, 
      }}/>
      {
        currentPage === 'Coletas' ?  <Coletas/> :           
        currentPage === 'Nova coleta' ? <NewColeta/> :
        currentPage === 'Relatórios' ? 'Relatórios' :
        <Coletas/>
      }
      <Footer/>
    </div>
  );
}

export default App;
