import {  Route, Routes } from 'react-router-dom'
import { Login } from '../auth';


//Mis imports
//import { Marvel,Dc  } from './../heroes/';

import { HeroesRoutes } from './../heroes/routes/HeroesRoutes';

export const AppRuter = () => {
    return (
        <>
            <Routes>
                <Route path="Login" element={<Login />} />
                <Route path="/*" element={<HeroesRoutes />} />

            </Routes>
        </>
    )
}; 
