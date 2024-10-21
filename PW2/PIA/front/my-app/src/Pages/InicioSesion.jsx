import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

export default function InicioSesion(){
    const navigate = useNavigate();
    const navegarPublicaciones = () => {
        navigate("/Inicio")
    }
    return(
        <>
            <h2>Dashboard</h2>
            <Button onClick={navegarPublicaciones}>Ir a caca </Button>
        </>
    )
}
