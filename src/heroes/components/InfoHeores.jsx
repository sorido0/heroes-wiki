
import { cojerHeores } from './../helpers/cojerHeores';
import { HeroeCart } from './HeroeCart';
import { useMemo } from 'react';

// InfoHeores es un componente que se va a renderizar el heores solicitado por el usuario

export const InfoHeores = ({ value }) => {

    // el useMemo es para que solo se ejecute una vez y no cada vez que se renderiza el componente
    // value es el valor que envia el usuario
    const estamoAqui = useMemo(() => cojerHeores(value), [value]); 

    return (
        <div className='row wows-cols-1 row-cols-md-5 g-4'>

            {/* el map es para recorrer el array de heores y mostrarlo en el componente */}
            {estamoAqui.map(heroe =>
            (
                <HeroeCart key={heroe.id} {...heroe} />
            )
            )
            }

        </div>
    )
}
