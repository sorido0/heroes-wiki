
import { types } from './../types/types';
// Es el valor inicial de nuestro del reducer de auth
const estadoInicial = {
    logged: false,
}

export const authReducer = (state = estadoInicial, action) => {
   // console.log(" Tipo de accion desde el test+++++++++ " + action.type)

   

    //console.log("esto es action                  :" + action.type);
    //console.log("esto es type.logout                  :" + types.logout);
    //console.log("esto es action", action.type);

    switch (action.type) {
        // Si el tipo de acción es login, entonces...
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            }

        case types.logout:
            return {
                ...state,
                logged: false,
            }

        default:
            return state
    }
}