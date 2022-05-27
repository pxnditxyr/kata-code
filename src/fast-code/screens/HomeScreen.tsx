import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Split } from '@geoffcox/react-splitter';

import { Result } from '../components';
import { FabDownloadHTML } from '../components';
import { useCode, useMonacoForm } from '../hooks';
import { convertUrlToCode, changeUrl } from '../helpers';

import Editor from "@monaco-editor/react";


export const HomeScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { search } = location;
    const { htmlUrl, cssUrl, jsUrl }  = convertUrlToCode( search );
    
    const { html, css, js, handleChangeHTML, handleChangeJS, handleChangeCSS } = useMonacoForm({
        html: htmlUrl || '',
        css: cssUrl || '',
        js: jsUrl || ''
    });

    const { changeHTML, changeCSS, changeJS } = useCode();

    useEffect(() => {
        changeHTML( html );
        changeCSS( css );
        changeJS( js );
        changeUrl( html, css, js, navigate );
    }, [ html, css, js, search ]);

    
    return (
        <>
            <Split horizontal>
                <Split>
                    <Editor
                        height="100%"
                        defaultLanguage="html"
                        defaultValue={ html }
                        onChange={ handleChangeHTML }
                        theme="vs-dark"
                    />
                    <Editor
                        height="100%"
                        defaultLanguage="javascript"
                        defaultValue={ js }
                        onChange={ handleChangeJS }
                        theme="vs-dark"
                    />
                </Split>
                <Split>
                    <Editor
                        height="100%"
                        defaultLanguage="css"
                        defaultValue={ css }
                        onChange={ handleChangeCSS }
                        theme="vs-dark"
                    />
                    <Result />
                </Split>
            </Split>
            <FabDownloadHTML />
        </>
    );
};
