import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Delete = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        // Aquí iría la lógica real de eliminación
        alert(`Funcionalidad "Delete" no implementada`);
        navigate('/');
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-danger text-white">
                            <h4 className="mb-0">Confirmar Eliminación</h4>
                        </div>
                        <div className="card-body">
                            <p className="text-center">
                                ¿Estás seguro de que deseas eliminar al usuario con ID: <strong>{id}</strong>?
                            </p>
                            <p className="text-muted text-center">
                                Esta acción no se puede deshacer.
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <button
                                    className="btn btn-danger"
                                    onClick={handleDelete}
                                >
                                    Eliminar
                                </button>
                                <button
                                    className="btn btn-secondary"
                                    onClick={handleCancel}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delete;