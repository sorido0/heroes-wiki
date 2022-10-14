
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from './../../../src/auth/context/AuthContext';
import { Buscar } from './../../../src/heroes/pages/Buscar';



describe('Pruebas en el componente <Buscar>', () => { 


    test('Debe de mostrar los valores por defectos ', () => { 

        
        const { container } = render(
            //<AuthContext.Provider>
                <MemoryRouter>
                <Buscar />
                </MemoryRouter>
            //</AuthContext.Provider>
            
        )

        //screen.debug();
        expect( container ).toMatchSnapshot();

     })

     test('De debe mostrar a Batman y el input con el valor el queryString ', () => { 

        render(
            <MemoryRouter initialEntries={['/buscar?q=batman']}>
                <Buscar />
            </MemoryRouter>
        )
            
            // para representar el valor de cualquier elemento del DOM
            const ima = screen.getByRole('img');
            
            //screen.debug();
            expect( screen.getAllByText('Batman').length  ).toBeGreaterThanOrEqual(1);
            // toContain Es para buscar un texto dentro de un elemento
            expect( ima.src ).toContain('src/assets/heroes/dc-batman.jpg');
      })

 })