import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cupcacke from '../Assets/Cupcacke.jpg';
import './publicaciones.css';

export default function Publicacion(props) {
  return (
    <div className="card-container">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Cupcacke} className="small-image" />
        <Card.Body>
          <Card.Title>{props.Contenido}</Card.Title>
          <Card.Text>
            {props.Contenido}
          </Card.Text>
          <Button variant="primary">Comprar</Button>
          <Button variant="primary">Agregar al Carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

 