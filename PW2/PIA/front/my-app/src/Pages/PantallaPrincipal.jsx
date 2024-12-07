import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Publicacion from '../componentes/publicaciones';
import MyNavbar from '../componentes/navbar';
import stylePP from './PantallaPrincipal.module.css';

//Importar las imágenes
import CupcakeImage from '../Assets/Cupcacke.jpg';
import cheese from '../Assets/Cheesecake.jpg';
import pastel from '../Assets/Pastel.jpg';

export default function PantallaPrincipal() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState([]); // Estado para las categorías

    const navegarDashboard = () => {
        navigate("/");
    };

    const navegarCategoria = (categoria) => {
        console.log(`Navegando a categoría: ${categoria.nombreCategoria}`);
        // Aquí puedes agregar navegación específica por categoría si es necesario
    };

    // Función para obtener las categorías desde el backend
    const obtenerCategorias = async () => {
        const response = await fetch('http://localhost:3001/api/categoria'); // Endpoint de categorías
        const data = await response.json();
        setCategorias(data); // Guardar categorías en el estado
    };

    useEffect(() => {
        obtenerCategorias(); // Obtener categorías al montar el componente
    }, []);

    return (
        <>
            <MyNavbar />
            <Button onClick={navegarDashboard}>Cerrar sesión</Button>

            <div className="d-flex">
                <div className={stylePP.PantallaPrincipalDatos}>
                    <p>Categorías</p>

                    {/* Renderizar botones dinámicamente */}
                    {categorias.map((categoria) => (
                        <Button
                            key={categoria._id}
                            className={stylePP.botonRosa}
                            onClick={() => navegarCategoria(categoria)}
                        >
                            {categoria.nombreCategoria}
                        </Button>
                    ))}
                </div>
                <div className="card-container ml-4">
                    <div className="row">
                        <div className="col-md-4">
                            <Publicacion
                                Titulo="Cupcake"
                                Contenido="Sabor chocolate"
                                Imagen={CupcakeImage}
                            />
                        </div>
                        <div className="col-md-4">
                            <Publicacion
                                Titulo="Publicación 2"
                                Contenido="Contenido publicación 2"
                                Imagen={cheese}
                            />
                        </div>
                        <div className="col-md-4">
                            <Publicacion
                                Titulo="Publicación 3"
                                Contenido="Contenido publicación 3"
                                Imagen={pastel}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}