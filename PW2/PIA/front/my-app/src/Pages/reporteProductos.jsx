import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

export default function ReporteProductos() {
    const [productos, setProductos] = useState([]);

    // Función para obtener los productos del backend
    const obtenerProductos = async () => {
        const response = await fetch('http://localhost:3001/api/producto/reporteProductos');
        const data = await response.json();
        setProductos(data);
    };

    useEffect(() => {
        obtenerProductos();
    }, []);

    return (
        <div>
            <h2>Reporte de Productos</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre del Producto</th>
                        <th>Categoría</th>
                        <th>Inventario</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto._id}>
                            <td>{producto.nombreProducto}</td>
                            <td>{producto.categoria?.nombreCategoria || 'Sin Categoría'}</td>
                            <td>{producto.inventario}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}