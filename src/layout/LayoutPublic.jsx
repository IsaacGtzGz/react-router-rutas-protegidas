import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutPublic = () => {
    const navigation = useNavigation();

    const users = [
        { id: 1, name: 'Juan Perez', email: 'juan@gmail.com' },
        { id: 2, name: 'Ana Lopez', email: 'ana@gmail.com' },
        { id: 3, name: 'Carlos Ruiz', email: 'carlos@gmail.com' },
    ];

    return (
        <>
            <Navbar />
            <main className='container' >
                {navigation.state === "loading" && (
                    <div className='alert alert-info my-5'>Loading...</div>
                )}

                <Outlet context={{ users: users }} />

            </main>
            <footer className='container text-center'>Footer</footer>
        </>
    )
}

export default LayoutPublic