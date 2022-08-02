
// Es el valor inicial de nuestro del reducer de auth
const estadoInicial = {
    logged: false,
}

export const authReducer = (state = estadoInicial, action) => {
    console.log(action.type)
    switch (action.type) {
        // Si el tipo de acción es login, entonces...
        case action.type:
            return {
                ...state,
                logged: true,
                user: action.payload
            }

        case type.logout:
            return {
                ...state,
                logged: false,
            }

        default:
            return state
    }
}