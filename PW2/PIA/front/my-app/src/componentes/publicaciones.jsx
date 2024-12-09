import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';
import './publicaciones.css';

export default function Publicacion({ Titulo, Contenido, Imagen, ProductoID, agregarAlCarrito }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAgregarAlCarrito = () => {
    // Imprimir lo que se pasa al hacer clic en el botón "Agregar al Carrito"
    console.log('Producto agregado al carrito:', ProductoID);
    // Llamar a la función que pasa el padre para agregar al carrito
    agregarAlCarrito(ProductoID);
  };

  return (
    <div className="card-container">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Imagen} className="small-image" />
        <Card.Body className="card-body-content">
          <Card.Title>{Titulo}</Card.Title>
          <Card.Text>{Contenido}</Card.Text>
          <Button variant="primary" onClick={handleShow}>Ver Detalles</Button>
          <Button variant="primary" onClick={handleAgregarAlCarrito}>Agregar al Carrito</Button> {/* Usar la función pasada */}
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