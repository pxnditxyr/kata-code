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
        <div className="flex gap-x-3 items-center">
            { 
                ( isEditable )
                ?   
                    <div className="flex gap-x-3">
                        <input
                            id="title"
                            className="w-28 bg-gray-200 px-2 rounded-lg focus:outline-none text-gray-700 font-semibold"
                            name="title"
                            placeholder="Title"
                            value={ title }
                            onChange={ handleChange }
                        />
                        <button onClick={ () => setEditable( false ) }> ✔️ </button>
                    </div>
                : 
                    <>
                        <span
                            className="text-gray-300 font-bold text-sm cursor-pointer border-2 border-sky-500 rounded-lg px-2 py-1"
                            onDoubleClick={ () => setEditable( true ) }
                        > { title } </span>
                    </>
            }
        </div>
    );
};
