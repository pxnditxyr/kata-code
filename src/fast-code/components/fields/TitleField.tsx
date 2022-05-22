import { useEffect, useState } from 'react';
import { useCode, useForm } from '../../hooks';

export const TitleField = () => {
    const [ isEditable, setEditable ] = useState( false );
    const { changeTitle } = useCode();

    const { title, handleChange } = useForm({
        title: 'example.html',
    })


    useEffect( () => {
        changeTitle( title );
    }, [ title, isEditable ] );

    return (
        <div>
            { 
                ( isEditable )
                ?   
                    <>
                        <input
                            id="title"
                            className="title"
                            name="title"
                            placeholder="Title"
                            value={ title }
                            onChange={ handleChange }
                        />
                        <button onClick={ () => setEditable( false ) }> ✔️ </button>
                    </>
                : <span className="title" onDoubleClick={ () => setEditable( true ) }> { title } </span>
            }
        </div>
    );
};
