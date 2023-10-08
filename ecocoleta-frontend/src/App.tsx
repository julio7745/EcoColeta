
import React, { useState } from 'react';

import './styles/App.css';

import Header from './components/header/Header';
import Coletas from "./components/coletas/Coletas";
import NewColeta from "./components/newColeta/NewColeta";
import Footer from "./components/footer/Footer";
import Loading from './components/loading/Loading';

function App() {
  
  const [currentPage, setCurrentPage] = useState('Coletas');
  const [classNameOfLoading, setClassNameOfLoading] = useState('loading');

  return (
    <div className="App">
      <Header {...{
        currentPage,
        setCurrentPage, 
      }}/>
      {
        currentPage === 'Coletas' ?  <Coletas {...{
          setClassNameOfLoading,
        }}/> :           
        currentPage === 'Nova coleta' ? <NewColeta {...{
          setCurrentPage, 
          setClassNameOfLoading,
        }}/> :
        currentPage === 'Relatórios' ? 'Relatórios' :
        <Coletas {...{
          setClassNameOfLoading,
        }}/> 
      }
      <Loading {...{
        classNameOfLoading,
      }}/>
      <Footer/>
    </div>
  );
}

export default App;
