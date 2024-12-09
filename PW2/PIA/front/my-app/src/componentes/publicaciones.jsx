import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';
import './publicaciones.css';

export default function Publicacion({ Titulo, Contenido, Imagen, ProductoID, Precio }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Función para agregar al carrito
  const agregarAlCarrito = async () => {
    const producto = { idProducto: ProductoID, nombreProducto: Titulo, precio: Precio, cantidad: 1 };
    const response = await fetch('http://localhost:3001/api/carrito', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(producto),
    });

    if (response.ok) {
      alert('Producto agregado al carrito');
    } else {
      alert('Error al agregar el producto');
    }
  };

  return (
    <div className="card-container">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Imagen} className="small-image" />
        <Card.Body className="card-body-content">
          <Card.Title>{Titulo}</Card.Title>
          <Card.Text>{Contenido}</Card.Text>
          <Button variant="primary" onClick={handleShow}>Ver Detalles</Button>
          <Button variant="primary" onClick={agregarAlCarrito}>Agregar al Carrito</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>{Titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={Imagen} alt={Titulo} style={{ width: '100%' }} />
          <p>{Contenido}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
          <Button variant="primary">Comprar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}