import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Split } from '@geoffcox/react-splitter';

import { Result } from '../components';
import { FabDownloadHTML } from '../components';
import { useCode, useForm } from '../hooks';
import { convertCodeToUrl, convertUrlToCode } from '../helpers';


export const HomeScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { search } = location;

    const { htmlUrl, cssUrl, jsUrl }  = convertUrlToCode( search );

    const { html, css, js, handleChange } = useForm({
        html: htmlUrl,
        css: cssUrl,
        js: jsUrl
    });

    const { changeHTML, changeCSS, changeJS } = useCode();

    // first time read url params and charge code

    useEffect(() => {
        changeHTML( html );
        changeCSS( css );
        changeJS( js );
        if ( html || css || js )
            navigate( `?=${ convertCodeToUrl( html, css, js ) }` );
        else 
            navigate( '/' );
    }, [ html, css, js, search ]);

    


    return (
        <>
            <Split horizontal>
                <Split>
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
                </Split>
                <Split>
                    <textarea
                        id="js"
                        name="js"
                        className="bg-neutral-800 text-white p-2 resize-none w-full h-full shadow-lg shadow-white focus:outline-none"
                        placeholder="JavaScript"
                        value={ js }
                        onChange={ handleChange }
                    ></textarea>
                    <Result />
                </Split>
            </Split>
            <FabDownloadHTML />
        </>
    );
};
