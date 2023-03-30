import { rurtas } from "../helpers/rutas";


export const ImagenHeroe = ({ value }) => {

    // const ruta = `./src/assets/heroes/${value}.jpg`;
    // console.log(ruta);
    const ruta = rurtas(value);
    return (
        <>
            
                {<img
                    className="card-img-center"
                    src={ruta}
                    alt="imagen heroe"
                />}
            
        </>
    )
}
