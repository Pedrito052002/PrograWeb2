import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Publicacion from '../componentes/publicaciones';
import MyNavbar from '../componentes/navbar';
import stylePP from './PantallaPrincipal.module.css';
import { agregarProductoAlCarrito } from '../Services/carritoServices'; // Importa la función de carrito

export default function PantallaPrincipal() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]); // Estado para las categorías
  const [productos, setProductos] = useState([]); // Estado para los productos

  const userId = localStorage.getItem('userId'); // Asumiendo que tienes el userId en el localStorage

  const navegarDashboard = () => {
    navigate("/"); // Redirigir a la pantalla de inicio (si aplica)
  };

  // Obtener las categorías desde el backend
  const obtenerCategorias = async () => {
    const response = await fetch('http://localhost:3001/api/categoria'); // Endpoint de categorías
    const data = await response.json();
    console.log('Categorías obtenidas:', data); // Mostrar categorías en consola
    setCategorias(data); // Guardar categorías en el estado
  };

  // Obtener los productos desde el backend
  const obtenerProductos = async () => {
    const response = await fetch('http://localhost:3001/api/producto'); // Endpoint de productos
    const data = await response.json();
    console.log('Productos obtenidos:', data); // Mostrar productos en consola
    setProductos(data); // Guardar productos en el estado
  };

  useEffect(() => {
    obtenerCategorias(); // Llamada para obtener categorías
    obtenerProductos(); // Llamada para obtener productos
  }, []);

  const manejarAgregarAlCarrito = async (productoId) => {
    if (!userId) {
      console.log('Usuario no autenticado');
      alert('No estás autenticado');
      return;
    }

    const cantidad = 1; // Supongamos que la cantidad es 1 por defecto

    // Imprimir lo que estás enviando al backend
    console.log('Datos para agregar al carrito:');
    console.log('userId:', userId); 
    console.log('productoId:', productoId); 
    console.log('cantidad:', cantidad);

    try {
      await agregarProductoAlCarrito(userId, productoId, cantidad); // Llamada al servicio para agregar el producto al carrito
      alert('Producto agregado al carrito');
    } catch (error) {
      alert('Error al agregar al carrito: ' + error.message);
    }
  };

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
                  agregarAlCarrito={manejarAgregarAlCarrito} // Pasar la función al componente Publicacion
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}