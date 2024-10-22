//import Navbar from './navbar'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

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
            
            

       
        </>
    );
}