import { useState } from "react";

export const useMonacoForm = <T extends Object> ( initialState : T ) => {
    const [ form, setForm ] = useState( initialState );

    const handleChange = ( name : string, value : string ) => {
        setForm({
            ...form,
            [ name ]: value
        });
    };

    const handleChangeHTML = ( value? : string ) => {
        setForm({
            ...form,
            html: value || ""
        });
    }
    
    const handleChangeCSS = ( value? : string ) => {
        setForm({
            ...form,
            css: value || ""
        });
    }
    
    const handleChangeJS = ( value? : string ) => {
        setForm({
            ...form,
            js: value || ""
        });
    }

    return { 
        form,
        handleChange,
        handleChangeHTML,
        handleChangeCSS,
        handleChangeJS,
        ...form
    };
};
