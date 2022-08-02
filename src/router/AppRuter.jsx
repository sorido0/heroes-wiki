import { Route, Routes } from 'react-router-dom'
import { Login } from '../auth/pages/Login';



//Mis imports
//import { Marvel,Dc  } from './../heroes/';

import { HeroesRoutes } from './../heroes/routes/HeroesRoutes';
import { PrivateRouter } from './PrivateRouter';

export const AppRuter = () => {
    return (
        <>
            <Routes>
                <Route path="Login" element={<Login />} />

                <Route path='/*' element={
                    <PrivateRouter>
                        <HeroesRoutes />
                    </PrivateRouter>
                } />

                {/* <Route path="/*" element={ <HeroesRoutes /> } /> */}

            </Routes>
        </>
    )
};
