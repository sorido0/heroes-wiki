

export const ImagenHeroe = ({ value }) => {

    const ruta = `./src/assets/heroes/${value}.jpg`;
    console.log(ruta);
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
