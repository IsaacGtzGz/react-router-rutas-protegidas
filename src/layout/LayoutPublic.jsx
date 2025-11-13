import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutPublic = () => {
    const users = [
        { id: 1, name: 'Juan Perez', email: 'juan@gmail.com' },
        { id: 2, name: 'Ana Lopez', email: 'ana@gmail.com' },
        { id: 3, name: 'Carlos Ruiz', email: 'carlos@gmail.com' },
    ];

    return (
        <>
            <Navbar />
            <main className='container' >
                <Outlet context={{ users: users }} />
            </main>
            <footer className='container text-center'>Footer</footer>
        </>
    )
}

export default LayoutPublic