import { useState } from "react";

export const useForm = ( initialValor = {} ) => {

    const [formState, setFormState] = useState(initialValor)

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        })
    };

    const onResetForm = () => {
        setFormState( initialValor );
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

    }
}
