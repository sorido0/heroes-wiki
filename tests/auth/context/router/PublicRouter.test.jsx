import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../../../src/auth/context";
import { PubliRounter } from './../../../../src/router/PubliRounter';
import { Routes, Route, MemoryRouter } from 'react-router-dom';


describe('Pruebas en el publicRouter', () => {

    test('Debe mostrar el publiRouter', () => {

        // Se crea un contexto para poder usar el componente
        const contextValue = {
            logged: false,
        }

        // se renderiza el componente
        render(
            <AuthContext.Provider value={contextValue}>
                <PubliRounter>
                    <span> Rutas publicas  </span>
                </PubliRounter>
            </AuthContext.Provider>

        );

        // Se busca el texto Hola Mundo
        //screen.debug();
        // creamos el expect
        expect(screen.getByText('Rutas publicas')).toBeTruthy();


    })


    test('Debe de navegar si esta autenticado ', () => {

        // se crea un contexto para poder usar el componente en true 
        const contextValue = {
            logged: true,
            user: {
                name: 'Fernando',
                id: 'ABC123'
            }
        }

        // se renderiza el componente
        render(
            // por es la ruta donde se cuentra todo el contexto de mi pagina
            // Y le paso el valor de contextValue
            <AuthContext.Provider value={contextValue}>
                 {/* MemoryRouter es el componente que simula donde nos encontramos */}
                <MemoryRouter initialEntries={["/login"]}>
                    {/* Router es para definil las posibles rutas  */}
                    <Routes>
                        <Route path='login' element={
                            <PubliRounter>
                                <span> Rutas privadas  </span>
                            </PubliRounter>
                        }/>
                        <Route path="Mavel" element={ <h1> Pagina de Marvel</h1>}/> 
                        <Route path="dc" element={ <h1> Pagina de DC</h1>}/> 

                    </Routes>

                </MemoryRouter>


            </AuthContext.Provider>
        );

        // se busca el texto de la pagina de marvel
        //screen.debug();
        // creamos el expect
        expect(screen.getByText('Pagina de Marvel')).toBeTruthy();

    })
})