
import { heroes } from '../data/dataHeroes';


export const obtenerHeroesPorNombre = ( name = "" ) => {
  
    name.toLocaleLowerCase().trim();

    if ( name.length === 0 ) return [];

    return heroes.filter( heroe => heroe.superhero.toLocaleLowerCase().includes( name ) );
}
