import React, { useContext } from 'react'
import { AuthContext } from '../auth/context';
import { Navigate, useLocation } from 'react-router-dom';


// PrivateRouter es para difiniil cuales componentes son privados
export const PrivateRouter = ({ children }) => {


    // con el useContext podemos usar la funcion onLogin para obtener el valor del contexto y saber si el usuario esta logueado 
    const { logged } = useContext( AuthContext );

    // con el useLocation podemos obtener la ruta actual
    const { pathname, search } = useLocation();

    // Si el usuario no esta logueado se envia al usuario a la ruta de login
    const lastPath = pathname + search;

    // localStorage.setItem es para guardar el valor de la ultima busqueda o ubicacion del usario en el localStorage
    localStorage.setItem('lastPath', lastPath);
    console.log(lastPath);

  return (logged) // Si el usuario esta logueado se renderiza el componente
    ? children
    : <Navigate to='/login' />
}
