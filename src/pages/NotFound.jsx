import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const NotFound = () => {

    const error = useRouteError();

    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <p>{error.statusText || error.mesage}</p>
            <Link to={"/"}> Volver al Menu </Link>
        </div >
    )
}

export default NotFound
