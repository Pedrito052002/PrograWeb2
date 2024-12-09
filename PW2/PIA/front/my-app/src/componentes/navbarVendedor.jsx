import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'; // Importamos NavDropdown
import styles from './navbar.module.css';
import logo from '../Assets/LogoPostreria.png';

/*import NavDropdown from 'react-bootstrap/NavDropdown';*/


export default function MyNavbarVendedor() {


    const navigate = useNavigate(); // Inicializa el hook useNavigate
    const navegarReporteVentas = () => navigate('/reporteVentas');
    const navegarReporteProductos = () => navigate('/reporteProductos');
    const navegarReporteClientes = () => navigate('/reporteClientes');
    const navegarReporteBC = () => navigate('/reporteBajasCalificaciones');
    
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


          <Button
                className={styles.customButton}
                style={{ marginRight: '100px' }}
                onClick={() => navigate('/PantallaVendedor')}
              >
                Mis Productos
            </Button>

          <NavDropdown
                title="Reportes"
                id="nav-dropdown-reports"
                className={styles.customDropdown}
                style={{ marginRight: '500px' }}
              >

                <NavDropdown.Item as="button" onClick={navegarReporteVentas}>
                  Reporte de Ventas
                </NavDropdown.Item>
                <NavDropdown.Item as="button" onClick={navegarReporteProductos}>
                  Reporte de Productos
                </NavDropdown.Item>
                <NavDropdown.Item as="button" onClick={navegarReporteClientes}>
                  Reporte de Clientes
                </NavDropdown.Item>
                <NavDropdown.Item as="button" onClick={navegarReporteBC}>
                  Reporte de Bajas Calificaciones
                </NavDropdown.Item>
               
               








              </NavDropdown>

          


          {/* Texto estático */}
          {/*<span className="navbar-text" style={{ color: 'black', marginRight: '100px' }}>¿Quiénes somos?</span>*/}
          <span className="navbar-text" style={{ color: 'black', marginRight: '190px' }}>¡Hola Vendedor!</span>
          {/*<Button className={styles.customButton} style={{ marginRight: '100px' }} href="#carrito">Carrito</Button>*/}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  );
  
  
}