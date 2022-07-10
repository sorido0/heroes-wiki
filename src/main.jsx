import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

// mis estilos
import './Estilos.css'
// mis componentes 
import { HeroesWikiApp } from './HeroesWikiApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <HeroesWikiApp />
    </BrowserRouter>
  </React.StrictMode>
);
