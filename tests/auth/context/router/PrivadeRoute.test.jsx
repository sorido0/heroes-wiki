
import { render, screen } from '@testing-library/react';
import { AuthContext } from './../../../../src/auth/context/AuthContext';
import { PrivateRouter } from './../../../../src/router/PrivateRouter';
import { MemoryRouter } from 'react-router-dom';


describe('Pruevas en el PrivadaRouter', () => {


    test('Debe mostrar los children si esta autenticado ', () => {

        Storage.prototype.setItem = jest.fn();

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
                <MemoryRouter>
                    <PrivateRouter>
                        <span> Rutas privadas  </span>
                    </PrivateRouter>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        // Se crear el expect
        expect(screen.getByText('Rutas privadas')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
    
    
    })


})