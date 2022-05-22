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
                    <div className="flex gap-x-3">
                        <input
                            id="title"
                            className="bg-gray-200 px-2 py-1 rounded-lg focus:outline-none"
                            name="title"
                            placeholder="Title"
                            value={ title }
                            onChange={ handleChange }
                        />
                        <button onClick={ () => setEditable( false ) }> ✔️ </button>
                    </div>
                : <span className="title" onDoubleClick={ () => setEditable( true ) }> { title } </span>
            }
        </div>
    );
};
