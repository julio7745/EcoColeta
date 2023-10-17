
import React, { useState } from 'react';

import './styles/App.css';

import Footer from "./components/footer/Footer.tsx";
import Header from './components/header/Header';
import Coletas from "./components/coletas/Coletas";
import Loading from './components/loading/Loading';
import NewColeta from "./components/newColeta/NewColeta";
import Relatorio from "./components/relatorio/relatorio";

function App() {
  
  const [currentPage, setCurrentPage] = useState('Coletas');
  const [classNameOfLoading, setClassNameOfLoading] = useState('loading');

  const [editOrCreate, setEditOrCreate] = useState('create')
  const [coletaEmEdicao, setColetaEmEdicao] = useState({
    _id: '',
    massa: '',
    volume: '',
    cliente: '',
    material: '',
  })

  return (
    <div className="App">
      <Header {...{
        currentPage,
        editOrCreate,
        setCurrentPage,
        setEditOrCreate,
        setColetaEmEdicao,
      }}/>
      {
        currentPage === 'Coletas' ?  <Coletas {...{
          setCurrentPage,
          setEditOrCreate,
          setColetaEmEdicao,
          setClassNameOfLoading,
        }}/> :           
        currentPage === 'Nova coleta' ? <NewColeta {...{
          editOrCreate,
          setCurrentPage, 
          coletaEmEdicao,
          setClassNameOfLoading,
        }}/> :
        currentPage === 'Relatório' ? <Relatorio {...{
          setClassNameOfLoading,
        }}/> :
        <Coletas {...{
          setCurrentPage, 
          setEditOrCreate,
          setColetaEmEdicao,
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
