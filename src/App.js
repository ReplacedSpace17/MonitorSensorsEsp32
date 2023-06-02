import logo from './logo.svg';
import './App.css';
import Widgets from './Componentes/WidgetIndicator'; 
import React from 'react';
import DashIndicators from './Componentes/DashIndicators';
import HeaderApp from './Componentes/Header';
import Targets from './Componentes/Targets';
import TablaFirebase from './Componentes/Tabla';


const App = () => {
  const progressValue = 100;

  return (
    <div className="cont-body">
      <HeaderApp/>
      <Widgets/>
      <DashIndicators/>
      
    </div>
  );
};

export default App;