import React from 'react'
import { Navbar } from '../../IntGra'
import { Route, Routes, Navigate } from 'react-router-dom';
import { Buscar, Dc, Heroe, Marvel } from '../pages';

export const HeroesRoutes = () => {
    return (
        <>
            {/* EL Navbar se mostrara siempren en todas las rutas */}
            <Navbar />
            <Routes>
                {/* Route lo usamos para desclarar las rutas que se van a renderizar en el componente */}
                {/* Con los parametros path es el nombre de la ruta y el componente que se va a renderizar */}
                <Route path="Mavel" element={<Marvel />} />
                <Route path="Dc" element={<Dc />} />
                <Route path="Buscar" element={<Buscar />} />
                <Route path="hero/:id" element={<Heroe />} />

                 <Route path="/*" element={<Navigate to='Mavel' />} />

            </Routes>

        </>
    )
}
