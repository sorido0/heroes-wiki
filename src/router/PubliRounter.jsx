
import { useContext } from 'react';
import { AuthContext } from '../auth/context';
import { Navigate } from 'react-router-dom';


// PublicRouter es para difiniil cuales componentes son publicos
export const PubliRounter = ( { children } ) => {
        
    // con el useContext podemos usar la funcion onLogin para obtener el valor del contexto y saber si el usuario esta logueado
    const { logged } = useContext( AuthContext );

    return (!logged) // Si el usuario esta logueado se renderiza el componente ( usamos ! para invertir el valor )
      ? children
      : <Navigate to='/mavel' />
    }
