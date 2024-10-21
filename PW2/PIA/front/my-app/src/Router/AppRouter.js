import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import InicioSesion from "../Pages/InicioSesion";
import Dashboard from "../Pages/Dashboard";
import PantallaPrincipal from "../Pages/PantallaPrincipal";

import fondoInicioSesion from '../Assets/FondoInicioSesion.png';

//import Publicaciones from "../componentes/publicaciones"; // Asegúrate de importar el componente Publicaciones

function AppRouter() {
  const location = useLocation();

  useEffect(() => {
    const body = document.body;

    // Cambia el fondo según la ruta
    if (location.pathname === '/') {
      body.style.backgroundImage = `url(${fondoInicioSesion})`; // Fondo para InicioSesion
    } else if (location.pathname === '/Dashboard') {
      body.style.backgroundColor = 'lightgreen'; // Fondo para Dashboard
    } else if (location.pathname === '/Inicio') {
      body.style.backgroundColor = 'lightcoral'; // Fondo para PantallaPrincipal
    }
    
    body.style.objectFit = "cover"; // Asegúrate de que la imagen cubra todo el fondo

    // Limpieza al salir del componente
    return () => {
      body.style.backgroundImage = ''; // Resetea el fondo
    };
  }, [location]);

  return (
      <Routes>
        <Route exact path="/" element={<InicioSesion />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Inicio" element={<PantallaPrincipal />} />
      </Routes>
  );
}

export default AppRouter;

