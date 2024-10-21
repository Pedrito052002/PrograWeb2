import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
//import Publicaciones from "../componentes/publicaciones"; // Asegúrate de importar el componente Publicaciones
import PantallaPrincipal from "../Pages/PantallaPrincipal";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/Home" element={<PantallaPrincipal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;