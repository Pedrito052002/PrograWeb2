import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Cupcacke from '../Assets/Cupcacke.jpg';
import { Modal } from 'react-bootstrap'; // Importa Modal
import './publicaciones.css';

export default function Publicacion({Titulo,Contenido,Imagen}) {
  const [show, setShow] = useState(false); // Estado para controlar el modal

  const handleClose = () => setShow(false); // Función para cerrar el modal
  const handleShow = () => setShow(true); // Función para abrir el modal

  return (
    <div className="card-container"> 
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Imagen} className="small-image" />
        <Card.Body>
          <Card.Title>{Titulo}</Card.Title>
          <Card.Text>
            {Contenido}
          </Card.Text>
          <Button variant="primary" onClick={handleShow}>Ver Detalles</Button>
          <Button variant="primary">Agregar al Carrito</Button>
        </Card.Body>
      </Card>

      {/* Modal para mostrar detalles */}
      <Modal show={show} onHide={handleClose} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>{Titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={Imagen} alt={Titulo} style={{ width: '100%' }} />
          <p>{Contenido}</p>
          {/* Puedes agregar más información aquí si es necesario */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
          <Button variant="primary">Comprar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}