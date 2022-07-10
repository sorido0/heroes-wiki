
import { cojerHeores } from './../helpers/cojerHeores';
import { ImagenHeroe } from './ImagenHeroe';
import { HeroeCart } from './HeroeCart';

export const InfoHeores = ({ value }) => {

    const estamoAqui = cojerHeores(value);

    return (
        <div className='row wows-cols-1 row-cols-md-3 g-3'>

            {estamoAqui.map(heroe =>
            (
                <HeroeCart key={heroe.id} {...heroe} />
            )
            )
            }

        </div>
    )
}
