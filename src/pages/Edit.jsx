import React, { useState, useEffect } from 'react';
import { Link, useParams, useOutletContext } from 'react-router-dom';

const Edit = () => {
    const { users } = useOutletContext();
    const { id } = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const userToEdit = users.find(user => user.id == id);

        if (userToEdit) {
            setName(userToEdit.name);
            setEmail(userToEdit.email);
        }
    }, [id, users]);

    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Editar Usuario (ID: {id})</h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electronico</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary me-2" onClick={(e) => {
                    e.preventDefault();
                    alert('Funcionalidad "Update" no implementada');
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

export default Edit;