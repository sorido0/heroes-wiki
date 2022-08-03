
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from '../context';

export const Login = () => {

    // con el useContexte y AuthContext podemos usar la funcion onLogin
    const { onLogin } = useContext(AuthContext);

    // con el useNavigate podemos usar la funcion navigate
    const enHome = useNavigate();

    const eLogin = () => {

        // Para saber la busqueda anterior
        //localStorage.getItem es para obtener el valor guardado en lastPath en el localStorage
        const lastPath = localStorage.getItem('lastPath') || '/';

        console.log(lastPath);
       
        // Se envia el nombre del usuario al contexto
        onLogin('sorido0');

        // Se envia al usuario a la ruta anterior o a la ruta home
        enHome(lastPath, {
            replace: true
            });
    }

    
    return (
        <div className='container mt-5'>
            <h1 
            className='p-5 text-center'
            >   
                Login
            </h1>
            <hr />

            <button 
            className="btn btn-primary d-flex justify-content-center m-5"
            to="/Login"
            onClick={eLogin}

            > Entrar </button>
        </div>
    )
};
