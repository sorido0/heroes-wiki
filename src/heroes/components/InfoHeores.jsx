
import { cojerHeores } from './../helpers/cojerHeores';
import { HeroeCart } from './HeroeCart';
import { useMemo } from 'react';

export const InfoHeores = ({ value }) => {

    const estamoAqui = useMemo(() => cojerHeores(value), [value]); 

    return (
        <div className='row wows-cols-1 row-cols-md-5 g-4'>

            {estamoAqui.map(heroe =>
            (
                <HeroeCart key={heroe.id} {...heroe} />
            )
            )
            }

        </div>
    )
}
