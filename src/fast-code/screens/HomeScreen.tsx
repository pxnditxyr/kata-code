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
                className="field"
                name="html"
                placeholder="HTML"
                value={ html }
                onChange={ handleChange }
            ></textarea>
            <textarea
                id="css"
                className="field"
                name="css"
                placeholder="CSS"
                value={ css }
                onChange={ handleChange }
            ></textarea>
            <textarea
                id="js"
                className="field"
                name="js"
                placeholder="JavaScript"
                value={ js }
                onChange={ handleChange }
            ></textarea>
            <Result />
        </>
    );
};
