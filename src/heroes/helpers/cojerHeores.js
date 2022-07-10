import { heroes } from './../data/dataHeroes';




export const cojerHeores = ( publisher ) => {

    //const heroesFiltrados = heroes.filter( heroe => heroe.publisher === publisher );

    const heroesPublisher = ['DC Comics','Marvel Comics'];
    if( !heroesPublisher.includes( publisher ) ){
        throw new Error( `No existe el publisher ${publisher}` );
    }

    return heroes.filter( heroe => heroe.publisher === publisher );
}

