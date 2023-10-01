import React, { useState } from 'react';
import './styles/App.css';

import Header from './components/header/header';

function App() {
  
  const [currentPage, setCurrentPage] = useState('Coletas');

  return (
    <div className="App">
      <Header {...{
        currentPage: currentPage,
        setCurrentPage: setCurrentPage, 
      }}/>
      {currentPage}
    </div>
  );
}

export default App;
