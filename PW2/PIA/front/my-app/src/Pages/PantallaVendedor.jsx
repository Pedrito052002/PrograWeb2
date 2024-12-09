import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Publicacion from '../componentes/publicaciones';
import MyNavbarVendedor from '../componentes/navbarVendedor';
import stylePP from './PantallaPrincipal.module.css';

export default function PantallaVendedor() {
    const navigate = useNavigate();
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]); // Estado para las categorías
    const [nuevoProducto, setNuevoProducto] = useState({
        nombreProducto: '',
        descripcion: '',
        precio: '',
        inventario: '',
        categoria: '' // Esto será el ID de la categoría seleccionada
    });

    const navegarDashboard = () => {
        navigate("/");
    };

    // Función para manejar el cambio en los inputs del formulario
    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setNuevoProducto(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Función para manejar el envío del formulario
    const agregarProducto = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:3001/api/producto', {  // Reemplaza con tu URL de backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoProducto),
        });

        obtenerProductos(); // Actualizamos la lista después de agregar
    };

    // Función para obtener todos los productos
    const obtenerProductos = async () => {
        const response = await fetch('http://localhost:3001/api/producto');  // Reemplaza con tu URL de backend
        const data = await response.json();
        setProductos(data);
    };

    // Función para obtener las categorías
    const obtenerCategorias = async () => {
        const response = await fetch('http://localhost:3001/api/categoria'); // Reemplaza con tu endpoint de categorías
        const data = await response.json();
        setCategorias(data); // Guardamos las categorías en el estado
    };

    useEffect(() => {
        obtenerProductos();
        obtenerCategorias(); // Llamamos a la función para obtener categorías al montar el componente
    }, []);

    return (
        <>
            <MyNavbarVendedor />
            <Button onClick={navegarDashboard}>Cerrar sesión</Button>

            <h2>Agregar Producto</h2>
            <form onSubmit={agregarProducto}>
                <div>
                    <label>Nombre:</label>
                    <input 
                        type="text" 
                        name="nombreProducto" 
                        value={nuevoProducto.nombreProducto} 
                        onChange={manejarCambio} 
                    />
                </div>
                <div>
                    <label>Descripción:</label>
                    <input 
                        type="text" 
                        name="descripcion" 
                        value={nuevoProducto.descripcion} 
                        onChange={manejarCambio} 
                    />
                </div>
                <div>
                    <label>Precio:</label>
                    <input 
                        type="number" 
                        name="precio" 
                        value={nuevoProducto.precio} 
                        onChange={manejarCambio} 
                    />
                </div>
                <div>
                    <label>Inventario:</label>
                    <input 
                        type="number" 
                        name="inventario" 
                        value={nuevoProducto.inventario} 
                        onChange={manejarCambio} 
                    />
                </div>
                <div>
                    <label>Categoría:</label>
                    <select 
                        name="categoria" 
                        value={nuevoProducto.categoria} 
                        onChange={manejarCambio}
                    >
                        <option value="">Selecciona una categoría</option>
                        {categorias.map((categoria) => (
                            <option key={categoria._id} value={categoria._id}>
                                {categoria.nombreCategoria}
                            </option>
                        ))}
                    </select>
                </div>
                <Button type="submit">Agregar Producto</Button>
            </form>

            <h3>Productos Registrados</h3>
            <div className="card-container">
                <div className="row">
                    {productos.map((producto) => (
                        <div className="col-md-4" key={producto._id}>
                            <Publicacion
                                Titulo={producto.nombreProducto}
                                Contenido={`Precio: $${producto.precio} - Inventario: ${producto.inventario}`}
                                Imagen={producto.imagen || 'https://via.placeholder.com/150'} // Imagen por defecto si no hay
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}