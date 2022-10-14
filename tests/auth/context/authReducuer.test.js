
import { authReducer } from './../../../src/auth/context/authReducer';
import { types } from './../../../src/auth/types/types';

describe('Pruebas el reducer ', () => {
        
        test('Debe de retornar el estado por defecto', () => {
            
            const state = authReducer({logged: true}, {});
            expect(state).toEqual({logged: true});
        });
        
        test('Debe de autenticar y colocar el name del usuario', () => {
            
            const action = {
                type: types.login,
                payload: {
                    name: 'sorido0',
                    id: '123'
                }
            }
            const state = authReducer( {logged: false},  action  );
           // console.log(state);
            expect(state).toEqual({
                logged: true,
                user: action.payload
            });
        });
        
        test('Debe de borrar el name del usuario y logged en false', () => {
            
            const action = {
                type: types.logout
            }
            const state = authReducer( {logged: true},  action  );
            //console.log(state);
            expect(state).toEqual({
                logged: false
            })
        });
        
    
    });