import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
//import MyNavbar from '../componentes/navbar';
import MyNavbarVendedor from '../componentes/navbarVendedor';


export default function PantallaPrincipal() {
    const navigate = useNavigate();
    const navegarDashboard = () => {
        navigate("/");
    }

    


    return (
        <>
            <MyNavbarVendedor />
            <Button onClick={navegarDashboard}>Cerrar sesion</Button>


            
        </>
    );
}