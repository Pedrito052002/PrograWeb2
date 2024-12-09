import React, { useState, useEffect } from 'react';
import MyNavbar from '../componentes/navbar';

export default function Carrito() {
  const [carrito, setCarrito] = useState([]);

  // Obtener los productos del carrito desde el backend
  useEffect(() => {
    const obtenerCarrito = async () => {
      const response = await fetch('http://localhost:3001/api/carrito');
      const data = await response.json();
      setCarrito(data);
    };
    obtenerCarrito();
  }, []);

  // Función para eliminar un producto del carrito
  const eliminarProducto = async (id) => {
    await fetch(`http://localhost:3001/api/carrito/${id}`, { method: 'DELETE' });
    setCarrito(carrito.filter((producto) => producto._id !== id));
  };

  // Función para actualizar la cantidad de un producto
  const actualizarCantidad = async (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    await fetch(`http://localhost:3001/api/carrito/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cantidad: nuevaCantidad }),
    });
    setCarrito(
      carrito.map((producto) =>
        producto._id === id ? { ...producto, cantidad: nuevaCantidad } : producto
      )
    );
  };

  return (
    <>
      <MyNavbar />
      <div>
        <h1>Carrito de Compras</h1>
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          carrito.map((producto) => (
            <div key={producto._id} style={{ marginBottom: '20px' }}>
              <h4>{producto.nombreProducto}</h4>
              <p>Precio: ${producto.precio}</p>
              <p>
                Cantidad:
                <button onClick={() => actualizarCantidad(producto._id, producto.cantidad - 1)}>-</button>
                {producto.cantidad}
                <button onClick={() => actualizarCantidad(producto._id, producto.cantidad + 1)}>+</button>
              </p>
              <button onClick={() => eliminarProducto(producto._id)}>Eliminar</button>
            </div>
          ))
        )}
      </div>
    </>
  );
}