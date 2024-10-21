//import Navbar from './navbar'
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom';


export default function Dashboard(){
    const navigate = useNavigate();
    const navegarPublicaciones = () => {
        navigate("/Home")
    }
    return(
        <>

        
        <h2>Dashboard</h2>
        <Button onClick={navegarPublicaciones}>Ir a PantallaPrincipal </Button>
        
        </>
    )
}