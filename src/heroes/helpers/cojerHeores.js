import { heroes } from './../data/dataHeroes';

// Funcion para cojer los heroes de la base de datos de los heroes
export const cojerHeores = ( publisher ) => {

    //const heroesFiltrados = heroes.filter( heroe => heroe.publisher === publisher );

    const heroesPublisher = ['DC Comics','Marvel Comics'];
    // Si el publisher es DC Comics o Marvel Comics
    if( !heroesPublisher.includes( publisher ) ){
        throw new Error( `No existe el publisher ${publisher}` );
    }

    return heroes.filter( heroe => heroe.publisher === publisher );
}

