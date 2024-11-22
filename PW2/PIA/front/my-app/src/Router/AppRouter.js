import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import InicioSesion from "../Pages/InicioSesion";
import Registro from "../Pages/Registro";
import Dashboard from "../Pages/Dashboard";
import PantallaPrincipal from "../Pages/PantallaPrincipal";
import Pasteles from '../Pages/Pasteles';
import Cupcakes from '../Pages/Cupcakes';
import Cheesecake from  '../Pages/Cheesecakes';
import Vendedor from '../Pages/PantallaVendedor';
//import reporteVentas from '../Pages/reporteVentas';
//import reporteProductos from '../Pages/reporteProductos';

//Pantalla de Reportes

//BrowserRouter
import FondoInicioSesion from '../Assets/FondoInicioSesion.png';

//import Publicaciones from "../componentes/publicaciones"; // Asegúrate de importar el componente Publicaciones

function AppRouter() {
  const location = useLocation();

  useEffect(() => {
    const body = document.body;

    // Cambia el fondo según la ruta
    if (location.pathname === '/') {
      body.style.backgroundImage = `url(${FondoInicioSesion})`; // Fondo para InicioSesion
    } else if (location.pathname === '/Registrarte') {
      body.style.backgroundImage = `url(${FondoInicioSesion})`; // Fondo para Registro
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
        <Route exact path="/Registrarte" element={<Registro />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Inicio" element={<PantallaPrincipal />} />
        <Route exact path="/Pasteles" element={<Pasteles />} />
        <Route exact path="/Cupcakes" element={<Cupcakes />} />
        <Route exact path="/Cheesecake" element={<Cheesecake />} />
        <Route exact path="/PantallaVendedor" element={<Vendedor />} />
        <Route exact path="/reporteVentas" element={<reporteVentas />} />
        <Route exact path="/reporteProductos" element={<reporteProductos />} />
        <Route exact path="/reporteClientes" element={<reporteClientes />} />
        <Route exact path="/reporteBajasCalificaciones" element={<reporteBC />} />

      </Routes>
  );
}

export default AppRouter;

