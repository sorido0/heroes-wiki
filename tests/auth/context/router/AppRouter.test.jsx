
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './../../../../src/auth/context/AuthContext';
import { AppRuter } from './../../../../src/router/AppRuter';


describe('Pruebas en el <AppRouter>', () => {

    test('Debe mostrar el login si no esta autenticado', () => {

        // Se crea el contextValue
        const contextValue = {
            logged: false,
        }

        // Se renderiza el componente
        render(
            <MemoryRouter initialEntries={["/dc"]}>
                <AuthContext.Provider value={contextValue}>
                    <AppRuter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // Se renderiza el componente
        //screen.debug();

        // Se espera que el componente Login este en el documento
        expect(screen.getByText("Login")).toBeTruthy();

    });


    test('Debe mostrar el componente marvel si esta autenticado', () => {

        // se crea el contextValue
        const contextValue = {
            logged: true,
            user: {
                name: 'Fernando',
                id: 'ABC123'
            }
        }

        render(
            <MemoryRouter initialEntries={["/marvel"]}>
                <AuthContext.Provider value={contextValue}>
                   <AppRuter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // se renderiza el componente
        //screen.debug();

        // se espera que el componente marvel este en el documento
        expect(screen.getAllByText("Marvel").length ).toBeGreaterThanOrEqual(1);
        

    }); 
});