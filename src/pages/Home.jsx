import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const Home = () => {
    const { users } = useOutletContext();

    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Listado</h1>

            <div className="d-flex justify-content-end mb-3">
                <Link to="/create" className="btn btn-success">
                    Create New User
                </Link>
            </div>

            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map((user) => (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>


                                <Link to={`/edit/${user.id}`} className="btn btn-warning btn-sm me-2">
                                    Edit
                                </Link>


                                <Link to={`/delete/${user.id}`} className="btn btn-danger btn-sm">
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;