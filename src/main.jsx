import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

// mis estilos
import './Estilos.css'
// mis componentes 
import { HeroesWikiApp } from './HeroesWikiApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  // Modo estricto es algo de react 
  <React.StrictMode>
    {/* Browser routes es para tener las rutas privadas y publivas  */}
    <BrowserRouter>
        {/* Es el componente donde se encuentra el router de las rutas  */}
      <HeroesWikiApp />
    </BrowserRouter>
  </React.StrictMode>
);
