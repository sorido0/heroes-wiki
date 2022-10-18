import { types } from "../../../src/auth/types/types";



describe('Confirmar los tipos ', () => { 

    //console.log(types);
    
    test('Debe de ser igual a los types originales', () => {
        expect(types).toEqual({
            login: 'login',
            logout: 'logout',
        });
    });
    
});

