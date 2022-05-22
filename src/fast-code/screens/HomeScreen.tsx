import { useEffect } from 'react';
import { Result } from '../components';
import { useCode, useForm } from '../hooks';


export const HomeScreen = () => {

    const { html, css, js, handleChange } = useForm({
        html: '',
        css: '',
        js: '',
    });

    const { changeHTML, changeCSS, changeJS } = useCode();

    useEffect(() => {
        changeHTML( html );
        changeCSS( css );
        changeJS( js );
    }, [ html, css, js ]);

    return (
        <>
            <textarea
                id="html"
                className="bg-neutral-800 text-white p-2 resize-none w-full h-full shadow-lg shadow-white focus:outline-none"
                name="html"
                placeholder="HTML"
                value={ html }
                onChange={ handleChange }
            ></textarea>
            <textarea
                id="css"
                className="bg-neutral-800 text-white p-2 resize-none w-full h-full shadow-lg shadow-white focus:outline-none"
                name="css"
                placeholder="CSS"
                value={ css }
                onChange={ handleChange }
            ></textarea>
            <textarea
                id="js"
                name="js"
                className="bg-neutral-800 text-white p-2 resize-none w-full h-full shadow-lg shadow-white focus:outline-none"
                placeholder="JavaScript"
                value={ js }
                onChange={ handleChange }
            ></textarea>
            <Result />
        </>
    );
};
