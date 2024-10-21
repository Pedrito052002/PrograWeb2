import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
/*import NavDropdown from 'react-bootstrap/NavDropdown';*/


export default function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* Botones de navegación */}
          <Button variant="outline-primary" className="me-2" href="#home">Inicio</Button>
          <Button variant="outline-primary" className="me-2" href="#productos">Pasteles</Button>
          {/* Texto estático */}
          <span className="navbar-text me-3">¿Quiénes somos?</span>
          <span className="navbar-text me-3">¡Hola usuario!</span>
          {/* Botón de carrito */}
          <Button variant="outline-primary" href="#carrito">Carrito</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
