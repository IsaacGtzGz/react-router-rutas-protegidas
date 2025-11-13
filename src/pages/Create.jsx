import React from 'react';
import { Link } from 'react-router-dom';

const Create = () => {
    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Crear Nuevo Usuario</h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electronico</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>

                <button type="submit" className="btn btn-primary me-2" onClick={(e) => {
                    e.preventDefault();
                    alert('Funcionalidad "Save" no implementada');
                }}>
                    Guardar
                </button>

                <Link to="/" className="btn btn-secondary">
                    Cancelar
                </Link>
            </form>
        </div>
    );
};

export default Create;