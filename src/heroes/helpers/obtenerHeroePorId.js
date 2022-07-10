
import { heroes } from './../data/dataHeroes';

export const obtenerHeroePorId = ( value ) => {
 
    return heroes.find( heroe => heroe.id === value );
}
