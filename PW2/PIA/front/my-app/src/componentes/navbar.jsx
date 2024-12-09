import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import styles from './navbar.module.css';
import logo from '../Assets/LogoPostreria.png';

/*import NavDropdown from 'react-bootstrap/NavDropdown';*/


export default function MyNavbar() {
  return (
    <>
    <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </div>



    <Navbar expand="lg" className={styles.navbarCustom}>
    <Container className={styles.navContainer}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* Botones de navegación */}
          <Button className={styles.customButton} style={{ marginRight: '100px' }} >
          <Link to="/" className={styles.link}>Inicio</Link>
          </Button>
          <Button className={styles.customButton} style={{ marginRight: '100px' }} >
          <Link to="/pasteles" className={styles.link}>Pasteles</Link>
          </Button>
          <Button className={styles.customButton} style={{ marginRight: '300px' }}>
          <Link to="/productos" className={styles.link}>Mis Productos</Link>
          </Button>

    



          {/* Texto estático */}
          <span className="navbar-text" style={{ color: 'black', marginRight: '100px' }}>¿Quiénes somos?</span>
          <span className="navbar-text" style={{ color: 'black', marginRight: '100px' }}>¡Hola usuario!</span>
          <Button className={styles.customButton} style={{ marginRight: '0px' }} >
          <Link to="/carrito" className={styles.link}>Carrito</Link>
            </Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  );
  
  
}
