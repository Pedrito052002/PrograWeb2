import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Publicacion from '../componentes/publicaciones';
import MyNavbar from '../componentes/navbar';
import stylePP from './PantallaPrincipal.module.css';

export default function PantallaPrincipal() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]); // Estado para las categorías
  const [productos, setProductos] = useState([]); // Estado para los productos

  const navegarDashboard = () => {
    navigate("/"); // Redirigir a la pantalla de inicio (si aplica)
  };

  // Obtener las categorías desde el backend
  const obtenerCategorias = async () => {
    const response = await fetch('http://localhost:3001/api/categoria'); // Endpoint de categorías
    const data = await response.json();
    setCategorias(data); // Guardar categorías en el estado
  };

  // Obtener los productos desde el backend
  const obtenerProductos = async () => {
    const response = await fetch('http://localhost:3001/api/producto'); // Endpoint de productos
    const data = await response.json();
    setProductos(data); // Guardar productos en el estado
  };

  useEffect(() => {
    obtenerCategorias(); // Llamada para obtener categorías
    obtenerProductos(); // Llamada para obtener productos
  }, []);

  return (
    <>
      <MyNavbar />
      <Button onClick={navegarDashboard}>Cerrar sesión</Button>

      <div className="d-flex">
        <div className={stylePP.PantallaPrincipalDatos}>
          <p>Categorías</p>

          {/* Renderizar botones dinámicamente */}
          {categorias.map((categoria) => (
            <Button
              key={categoria._id}
              className={stylePP.botonRosa}
              onClick={() => console.log(`Navegando a categoría: ${categoria.nombreCategoria}`)}
            >
              {categoria.nombreCategoria}
            </Button>
          ))}
        </div>
        <div className="card-container ml-4">
          <div className="row">
            {/* Renderizar productos dinámicamente */}
            {productos.map((producto) => (
              <div className="col-md-4" key={producto._id}>
                <Publicacion
                  Titulo={producto.nombreProducto}
                  Contenido={producto.descripcion}
                  Imagen={
                    producto.imagen
                      ? `data:image/jpeg;base64,${producto.imagen}`
                      : 'https://via.placeholder.com/150' // Imagen genérica si no hay imagen
                  }
                  ProductoID={producto._id} // ID del producto
                  Precio={producto.precio} // Precio del producto
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}