import React, { useState } from 'react';
import './styles/App.css';

import Header from './components/header/header';
import Coletas from "./components/coletas/coletas";
import Footer from "./components/footer/footer";

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
        currentPage === 'Nova coleta' ? 'Nova coleta' :
        currentPage === 'Relatórios' ? 'Relatórios' :
        <Coletas/>
      }
      <Footer/>
    </div>
  );
}

export default App;
