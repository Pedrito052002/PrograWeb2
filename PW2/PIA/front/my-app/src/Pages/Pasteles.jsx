//import Navbar from './navbar'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Publicacion from '../componentes/publicaciones';
import MyNavbar from '../componentes/navbar';


export default function PantallaPrincipal() {
    const navigate = useNavigate();
    const navegarPublicaciones = () => {
        navigate("/Inicio");
    }

    return (
        <>
            <MyNavbar />
            <Button onClick={navegarPublicaciones}>Volver</Button>
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
            

       
        </>
    );
}

