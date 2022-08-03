import { Route, Routes } from 'react-router-dom'
import { Login } from '../auth/pages/Login';



//Mis imports
//import { Marvel,Dc  } from './../heroes/';

import { HeroesRoutes } from './../heroes/routes/HeroesRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PubliRounter } from './PubliRounter';

export const AppRuter = () => {
    return (
        <>
            {/* Router es inportado de react-router-dom es pare manerjar las rutas */}
            <Routes>
                
                {/* Router recibe barios parametros path Que el nombre de la ruta y el componente que se va a renderizar */}
                <Route path="/login" element={
                    // el unico componente que esta dentro de las rutas publicas es el componente Login
                    <PubliRounter>
                        {/* // el componente Login es el componente que se va a renderizar */}
                        <Login />
                    </PubliRounter>
                } /> 


                <Route path='/*' element={
                    // el unico componente que esta dentro de las rutas privadas es el componente HeroesRoutes que es el 
                    //Router que contiene todas las rutas de los heroes
                    <PrivateRouter>
                        {/* // el componente HeroesRoutes es el componente que se va a renderizar */}
                        {/* Con todas las rutas de los heroes */}
                        <HeroesRoutes />
                    </PrivateRouter>
                } />


                {/* <Route path="Login" element={<Login />} />  */}
                {/* <Route path="/*" element={ <HeroesRoutes /> } /> */}

            </Routes>
        </>
    )
};
