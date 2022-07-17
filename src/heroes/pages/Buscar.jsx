import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { FormHero } from "./components/FormHero";
import { Resultados } from "./components/Resultados";


export const Buscar = () => {

   // useLocation() para obtener la location de la url y se importa de react-router-dom
    const locacion = useLocation();

    //queryString() para parsear el query de la url y se importa de query-string, Nota: hay que instalar el paquete query-string con npm add query-string
    const { q = "" } = queryString.parse( locacion.search );

  
    return (
        <>
            <div className="container">
                <h1> Buscar heroe </h1>
                <br />

                <div className="row">
                    <div className="col-5">
                        <FormHero q={`${q}`}  />
                    </div>

                    <div className="col-7">
                       <Resultados q={`sorido0`} /> 
                    </div>

                </div>
            </div>
        </>
    )
}
