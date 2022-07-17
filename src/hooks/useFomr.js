import { useState } from "react";


export const useForms = (valoresIniciales = {} ) => {
 
    const [Forms, setForms] = useState(valoresIniciales);


    const handleInput = ( {target} ) => {
        const { name, value } = target;
        setForms({
            ...Forms,
            [ name ]: value
        });
    };

    //==========console.log(Forms);
    const formsRecet = () => {
        setForms(valoresIniciales)
    }

    return { ...Forms, Forms, handleInput, formsRecet };

}
