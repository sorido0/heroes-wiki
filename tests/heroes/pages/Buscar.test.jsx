
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../../src/auth/context/AuthContext';
import { Buscar } from './../../../src/heroes/pages/Buscar';


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));


describe('Pruebas en el componente <Buscar>', () => { 

    beforeEach(() => {
        jest.clearAllMocks();
    });
    
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
            
            screen.debug(); 
        
            // para representar el valor de cualquier elemento del DOM
            const ima = screen.getByRole('img');
            
            //screen.debug();
            expect( screen.getAllByText('Batman').length  ).toBeGreaterThanOrEqual(1);
            // toContain Es para buscar un texto dentro de un elemento
            expect( ima.src ).toContain('src/assets/heroes/dc-batman.jpg');
      })

        test('Debe de mostrar un error si no se encuentra el hero ', () => {
                
                render(
                    <MemoryRouter initialEntries={['/buscar?q=batman123']}>
                        <Buscar />
                    </MemoryRouter>
                )
                
                const div = screen.getByTestId('resultado-test');
                //screen.debug();
               
                    // Con textContent se obtiene el texto de un elemento
                    //console.log(div.textContent); 
                expect( div.textContent ).toContain("No hay");
            })


            test('Debe de llamar el navigate a la pantalla nueva', () => { 

                render(
                    <MemoryRouter initialEntries={['/buscar?q=batman123']}>
                        <Buscar />
                    </MemoryRouter>                
                )

                // Para simular la carda del input y el boton
                const inputTest = screen.getByTestId('input-test');
                fireEvent.change(inputTest, { target: { value: 'batman' } });
                //console.log(inputTest.value);

                // Obtener el formulario
                const form = screen.getByTestId('form-test');
                fireEvent.submit(form);
               // console.log(form);

                // Saber si llamo el navigate
                expect( mockedUseNavigate ).toBeCalled();
                expect( mockedUseNavigate ).toHaveBeenCalledWith('?q=batman');

             })
          



 })