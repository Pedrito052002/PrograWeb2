//import Navbar from './navbar'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Publicacion from '../componentes/publicaciones';
import MyNavbar from '../componentes/navbar';
import './PantallaPrincipal.css';

export default function PantallaPrincipal() {
    const navigate = useNavigate();
    const navegarDashboard = () => {
        navigate("/");
    }

    return (
        <>
            <MyNavbar />
            <Button onClick={navegarDashboard}>Ir a Dashboard</Button>

            
            <div className="d-flex">
                <div className="sidebar">
                    {/* Aquí puedes agregar el contenido de tu barra lateral */}
                    <p>Categorías</p>
                </div>
                <div className="card-container ml-4">
                    <div className="row">
                        <div className="col-md-4">
                            <Publicacion Titulo="Publicación 1" Contenido="Contenido publicación 1" />
                        </div>
                        <div className="col-md-4">
                            <Publicacion Titulo="Publicación 2" Contenido="Contenido publicación 2" />
                        </div>
                        <div className="col-md-4">
                            <Publicacion Titulo="Publicación 3" Contenido="Contenido publicación 3" />
                        </div>
                        
                        
                      
                    </div>
                </div>
            </div>
        </>
    );
}