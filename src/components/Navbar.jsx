import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true,
        });
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="d-flex align-items-center">
                <NavLink to="/" className="btn btn-outline-primary me-2">
                    Home
                </NavLink>
                <NavLink to="/about" className="btn btn-outline-primary me-2">
                    About
                </NavLink>
                {isAuthenticated && (
                    <NavLink to="/blog" className="btn btn-outline-primary me-2">
                        Blog
                    </NavLink>
                )}
            </div>

            <div className="d-flex align-items-center">
                {isAuthenticated ? (
                    <div className="d-flex align-items-center">
                        <span className="text-light me-3">Hola, {user?.name}</span>
                        <button className="btn btn-outline-light" onClick={onLogout}>
                            Cerrar sesión
                        </button>
                    </div>
                ) : (
                    <div className="d-flex">
                        <NavLink to="/login" className="btn btn-outline-light me-2">
                            Iniciar sesión
                        </NavLink>
                        <NavLink to="/register" className="btn btn-outline-success">
                            Registrarse
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;