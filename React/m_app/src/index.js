//React como tL
import React from 'react';

//Api del dom
import ReactDOM from 'react-dom/client';

//Estilos css
import './index.css';

//Router / Biblioteca de rutas
import {BrowserRouter, Routes, Route} from"react-router-dom";

//Componente menu
import Menu from './componentes/Menu';

//Vistas
import App from './App';
import MiPrimeravista from './vistas/MiPrimeravista';
import Componente1 from './vistas/Componente1';
import Componente2 from './vistas/Componente2';
import Saludos from './vistas/saludos';

//Hooks
import HookUseState from './hooks/HookUseState';

//APIS consumidas por axios
import AxiosApiThen from './componentes/AxiosApiThen';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/Componente1" element={<Componente1/>} />
      <Route path="/Componente2" element={<Componente2/>} />
      <Route path="/MiPrimeravista" element={<MiPrimeravista/>} />
      <Route path="/Saludos" element={<Saludos/>} />
      <Route path="/useState" element={<HookUseState/>}/>
      <Route path="/Axiosthen" element={<AxiosApiThen/>}/>
    </Routes>
  </BrowserRouter>
);

