import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Publicacion from '../componentes/publicaciones';
import MyNavbarVendedor from '../componentes/navbarVendedor';
import stylePP from './PantallaPrincipal.module.css';

export default function PantallaVendedor() {
    const navigate = useNavigate();
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState({
        nombreProducto: '',
        descripcion: '',
        precio: '',
        inventario: '',
        categoria: ''
    });

    const [productoEditable, setProductoEditable] = useState(null); // Estado para el producto en edición
    const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal

    const navegarDashboard = () => {
        navigate("/");
    };

    // Función para manejar cambios en el formulario
    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setNuevoProducto(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Función para manejar cambios en el formulario de edición
    const manejarCambioEdicion = (e) => {
        const { name, value } = e.target;
        setProductoEditable(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Función para agregar un producto
    const agregarProducto = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:3001/api/producto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoProducto),
        });

        obtenerProductos();
    };

    // Función para obtener los productos
    const obtenerProductos = async () => {
        const response = await fetch('http://localhost:3001/api/producto');
        const data = await response.json();
        setProductos(data);
    };

    // Función para obtener las categorías
    const obtenerCategorias = async () => {
        const response = await fetch('http://localhost:3001/api/categoria');
        const data = await response.json();
        setCategorias(data);
    };

    // Función para eliminar un producto
    const eliminarProducto = async (id) => {
        if (!window.confirm("¿Estás seguro de que quieres eliminar este producto?")) return;

        try {
            await fetch(`http://localhost:3001/api/producto/${id}`, { method: 'DELETE' });
            obtenerProductos();
        } catch (error) {
            console.error('Error al eliminar producto:', error);
        }
    };

    // Función para abrir el modal y cargar los datos del producto
    const abrirModalEdicion = (producto) => {
        setProductoEditable(producto);
        setShowModal(true);
    };

    // Función para cerrar el modal
    const cerrarModal = () => {
        setShowModal(false);
        setProductoEditable(null);
    };

    // Función para guardar los cambios de un producto
    const guardarCambios = async () => {
        try {
            await fetch(`http://localhost:3001/api/producto/${productoEditable._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productoEditable),
            });

            cerrarModal();
            obtenerProductos();
        } catch (error) {
            console.error('Error al modificar producto:', error);
        }
    };

    useEffect(() => {
        obtenerProductos();
        obtenerCategorias();
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
            <div className="row">
                {productos.map((producto) => (
                    <div className="col-md-4" key={producto._id}>
                        <Publicacion
                            Titulo={producto.nombreProducto}
                            Contenido={`Precio: $${producto.precio} - Inventario: ${producto.inventario}`}
                            Imagen={producto.imagen || 'https://via.placeholder.com/150'}
                        />
                        <Button 
                            variant="danger" 
                            onClick={() => eliminarProducto(producto._id)}
                        >
                            Eliminar
                        </Button>
                        <Button 
                            variant="warning" 
                            onClick={() => abrirModalEdicion(producto)}
                        >
                            Modificar
                        </Button>
                    </div>
                ))}
            </div>

            {/* Modal para edición */}
            <Modal show={showModal} onHide={cerrarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="nombreProducto"
                                value={productoEditable?.nombreProducto || ''}
                                onChange={manejarCambioEdicion}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                name="descripcion"
                                value={productoEditable?.descripcion || ''}
                                onChange={manejarCambioEdicion}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                name="precio"
                                value={productoEditable?.precio || ''}
                                onChange={manejarCambioEdicion}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Inventario</Form.Label>
                            <Form.Control
                                type="number"
                                name="inventario"
                                value={productoEditable?.inventario || ''}
                                onChange={manejarCambioEdicion}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cerrarModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={guardarCambios}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
