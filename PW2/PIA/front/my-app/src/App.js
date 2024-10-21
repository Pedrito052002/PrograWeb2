import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router/AppRouter'; // Asegúrate de que la ruta sea correcta

import './App.css';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>

    </div>
  );
}

export default App;
