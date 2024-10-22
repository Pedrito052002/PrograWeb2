//import Navbar from './navbar'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Publicacion from '../componentes/publicaciones';
import MyNavbar from '../componentes/navbar';
import stylePP from './PantallaPrincipal.module.css';

export default function PantallaPrincipal() {
    const navigate = useNavigate();
    const navegarDashboard = () => {
        navigate("/");
    }

    
    const navegarPasteles = () => {
        navigate("/Pasteles");
    }

    const navegarCupcakes = () => {
        navigate("/Cupcakes");
    }

    const navegarCheesecake = () => {
        navigate("/Cheesecake");
    }

    return (
        <>
            <MyNavbar />
            <Button onClick={navegarDashboard}>Cerrar sesion</Button>


            
            <div className="d-flex">
                <div className={stylePP.PantallaPrincipalDatos}>
                    {/* Aquí puedes agregar el contenido de la barra lateral */}
                    <p>Categorías</p>

                    <Button className={stylePP.botonRosa} onClick={navegarPasteles}>Pasteles</Button>
                    <Button className={stylePP.botonRosa} onClick={navegarCupcakes}>Cupcakes</Button>
                    <Button className={stylePP.botonRosa} onClick={navegarCheesecake}>Cheesecake</Button>

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