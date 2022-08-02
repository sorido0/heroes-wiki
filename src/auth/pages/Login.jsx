
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from '../context';

export const Login = () => {

    // con el useContexte y AuthContext podemos usar la funcion onLogin
    const { onLogin } = useContext(AuthContext);

    const enHome = useNavigate();

    const eLogin = () => {

        // Se envia el nombre del usuario al contexto
        onLogin('sorido0');

        enHome('/', {
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
