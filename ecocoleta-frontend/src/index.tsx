
import App from './App';
import React from 'react';
import './styles/index.css';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root') as HTMLElement | null;

if (rootElement) {
  
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
}