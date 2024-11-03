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
          <Button className={styles.customButton} style={{ marginRight: '100px' }} href="#home">Inicio</Button>
          <Button className={styles.customButton} style={{ marginRight: '100px' }} href="#productos">Pasteles</Button>
          <Button className={styles.customButton} style={{ marginRight: '300px' }} href="#productos">Mis Productos</Button>

    



          {/* Texto estático */}
          <span className="navbar-text" style={{ color: 'black', marginRight: '100px' }}>¿Quiénes somos?</span>
          <span className="navbar-text" style={{ color: 'black', marginRight: '100px' }}>¡Hola usuario!</span>
          <Button className={styles.customButton} style={{ marginRight: '0px' }} href="#carrito">Carrito</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  );
  
  
}
