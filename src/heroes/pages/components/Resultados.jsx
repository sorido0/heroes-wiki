import { HeroeCart } from "../../components/HeroeCart"
import { obtenerHeroesPorNombre } from "../../helpers";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';



export const Resultados = () => {

      // useLocation() para obtener la location de la url y se importa de react-router-dom
      const locacion = useLocation();

      //queryString() para parsear el query de la url y se importa de query-string, Nota: hay que instalar el paquete query-string con npm add query-string
      const { q = "" } = queryString.parse( locacion.search );
  
      // console.log(?); para probar el query de la url
              // console.log({locacion});
              // console.log({q});
              // console.log(locacion.search);
  
      // Usamos obtenerHeroesPorNombre para obtener los heroes por el nombre que se ingresa en el input de forma filtrada
      const heroes = obtenerHeroesPorNombre(q);

    return (
        <>
            <h4> Resultados </h4>
            <hr />
            {
                (q === "")
                    ?
                    <div className="alert alert-primary"> 
                        <p> 😎 Realiza una busqueda <span> ... </span> </p> 
                    </div>
                    :
                    (heroes.length === 0) &&
                    <div className="alert alert-danger">
                        No hay resultados ... <b> {q} </b>
                    </div>

            }
            {

                <div className="container">
                    {
                        heroes.map(heroe => (
                            <HeroeCart
                                key={heroe.id}
                                {...heroe}
                            />
                        ))
                    }
                </div>
            }

        </>
    )
}
