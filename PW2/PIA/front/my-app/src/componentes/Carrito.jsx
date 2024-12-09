import React, { useState, useEffect } from 'react';
import MyNavbar from '../componentes/navbar';

export default function Carrito() {
  const [carrito, setCarrito] = useState({ productos: [] });
  const userId = localStorage.getItem('userId'); // Asumiendo que tienes el userId en el localStorage

  // Obtener los productos del carrito desde el backend
  useEffect(() => {
    const obtenerCarrito = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/carrito/user/${userId}`);
        if (!response.ok) throw new Error('Error al obtener el carrito');
        const data = await response.json();
        setCarrito(data); // Guardamos el carrito en el estado
      } catch (error) {
        console.error('Error al cargar el carrito:', error);
      }
    };
    obtenerCarrito();
  }, [userId]);

  // Función para eliminar un producto del carrito
  const eliminarProducto = async (productoId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/carrito/${carrito._id}/producto/${productoId}`, { 
        method: 'DELETE' 
      });
      if (!response.ok) throw new Error('Error al eliminar el producto');
      
      // Actualizar el estado local eliminando el producto del arreglo productos
      const productosActualizados = carrito.productos.filter(
        (producto) => producto.productoId._id !== productoId
      );
      setCarrito((prevState) => ({ ...prevState, productos: productosActualizados }));
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  // Función para actualizar la cantidad de un producto
  const actualizarCantidad = async (productoId, nuevaCantidad) => {
    if (nuevaCantidad < 1) return; // Evitar cantidades menores a 1

    try {
      const response = await fetch(`http://localhost:3001/api/carrito/${carrito._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productoId, cantidad: nuevaCantidad }),
      });
      if (!response.ok) throw new Error('Error al actualizar la cantidad');
      console.log(nuevaCantidad)
      // Actualizar el estado local modificando la cantidad del producto en el arreglo
      const productosActualizados = carrito.productos.map((producto) =>
        producto.productoId._id === productoId
          ? { ...producto, cantidad: nuevaCantidad }
          : producto
      );
      setCarrito((prevState) => ({ ...prevState, productos: productosActualizados }));
    } catch (error) {
      console.error('Error al actualizar la cantidad:', error);
    }
  };

  return (
    <>
      <MyNavbar />
      <div>
        <h1>Carrito de Compras</h1>
        {carrito.productos.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          carrito.productos.map((producto) => (
            <div key={producto.productoId._id} style={{ marginBottom: '20px' }}>
              <h4>{producto.productoId.nombreProducto}</h4>
              <p>Precio: ${producto.productoId.precio}</p>
              <p>
                Cantidad:
                <button
                  onClick={() =>
                    actualizarCantidad(producto.productoId._id, producto.cantidad - 1)
                  }
                >
                  -
                </button>
                {producto.cantidad}
                <button
                  onClick={() =>
                    actualizarCantidad(producto.productoId._id, producto.cantidad + 1)
                  }
                >
                  +
                </button>
              </p>
              <button onClick={() => eliminarProducto(producto.productoId._id)}>
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}
