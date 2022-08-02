import React from 'react'
import { Navbar } from '../../IntGra'
import { Route, Routes, Navigate } from 'react-router-dom';
import { Buscar, Dc, Heroe, Marvel } from '../pages';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="Mavel" element={<Marvel />} />
                <Route path="Dc" element={<Dc />} />
                <Route path="Buscar" element={<Buscar />} />
                <Route path="hero/:id" element={<Heroe />} />

                <Route path="/*" element={<Navigate to='Dc' />} />

            </Routes>

        </>
    )
}
