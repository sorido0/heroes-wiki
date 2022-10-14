
import { fireEvent, screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import { AuthContext } from '../../../../../src/auth/context';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '../../../../../src/IntGra';


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));


describe('Pruebas en el <Navbar >', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Sorido0',
            id: 'ABC123'
        },
        onLogout: jest.fn(),
    }

    beforeEach(() => jest.clearAllMocks() );

    test('Debe de mostrar el Nnombre del login', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        //screen.debug();
        expect(screen.getAllByText("Sorido0").length ).toBeGreaterThanOrEqual(1);

    });

    test('Debe llamar el Logout y navigate cuano se hace click ', () => { 

        // render(
        //     <AuthContext.Provider value={contextValue}>
        //         <MemoryRouter>
        //             <Navbar />
        //         </MemoryRouter>
        //     </AuthContext.Provider>
        // );

        // //screen.debug();
        // const logooutBtn = screen.getByRole("button");
        // fireEvent.click(logooutBtn);

        // expect( contextValue.onLogout ).toHaveBeenCalled();
        // expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});

     })

})
