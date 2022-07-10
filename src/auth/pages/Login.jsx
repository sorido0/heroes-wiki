
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const enHome = useNavigate();

    const eLogin = () => {
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
