import React from 'react'
import { useForms } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

export const FormHero = ( q="" ) => {

     // useNavigate() para obtener la navigate de la url y se importa de react-router-dom
     const navigate = useNavigate();

    console.log(q);

    /// Se llama el hook useForms para que se pueda usar el formulario
    // Se le los parametros que se quiere en el formulario tomando en cuenta que "name" es el nombre del input y "value" es el valor que se quiere que tenga el input
    const { BuscarText, handleInput, formsRecet } = useForms({
        BuscarText: ''
    });

    //const estamoAqui = useMemo(() => cojerHeores(BuscarText), [BuscarText]);
    
    // se recibe lo que esta dentro del formulario 
    const handleSubmit = (e) => {
        // se evita que se recargue la pagina
        e.preventDefault();

        // Validar los datos del formulario
        //if (BuscarText.trim().length <= 2) { return; }
       
        console.log(BuscarText);

        /// Es un query string que se le pasa al url
        navigate(`?q=${BuscarText}`);

        // Se limpia el formulario
        formsRecet({
            BuscarText: ''
        });

    }
    return (
        <>
            <h4> Buscar </h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="BuscarText"
                    id="BuscarText"
                    className="form-control"
                    placeholder="Buscar heroe"
                    autoComplete="off"
                    value={BuscarText}
                    onChange={handleInput}
                />

                <button
                    type="submit"
                    className="btn btn-primary mt-2"
                >
                    Buscar
                </button>

            </form>
        </>
    )
}
