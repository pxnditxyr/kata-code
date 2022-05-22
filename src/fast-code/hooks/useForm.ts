import { useState } from 'react';

export const useForm = <T extends Object>( initialState : T ) => {

    const [ form, setForm ] = useState<T>( initialState );

    const handleChange = ( event : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> ) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [ name ]: value
        });
    };

    const handleReset = () => setForm( initialState );

    return {
        form,
        handleChange,
        handleReset,
        ...form,
        
    };
};
