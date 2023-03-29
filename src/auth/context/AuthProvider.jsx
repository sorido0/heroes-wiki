
import { useReducer } from 'react';
//import { types } from '../types/Types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';


const estadoInicial = { }

const types = {
    login: 'login',
    logout: 'logout',
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user
    }
}


export const AuthProvider = ({ children }) => {

    
    // importamos el reducer de auth
    const [state, dispatch] = useReducer(authReducer, estadoInicial, init);

    // Creamos la funcion onLogin
    const onLogin = (name = 'mmg') => {

        const user = { id: 'yunito' , name };

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action)
    }

    const onLogout = () => {
        localStorage.removeItem('user');

        const action = {
            type: types.logout
        }
        dispatch(action)
    }

    return (
        // El provider es un componente que se encarga de proveer el valor de un contexto
        <AuthContext.Provider value={{
            ...state,
            onLogin,
            onLogout 
        }}>
            {/* Los children los las informacion que que recive el provider */}
            {children}
        </AuthContext.Provider >

    );
}
