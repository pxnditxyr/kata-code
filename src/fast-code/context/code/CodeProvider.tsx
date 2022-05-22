import { useReducer } from 'react';

import { CodeContext } from './CodeContext';
import { codeReducer } from './codeReducer';

import { CodeState } from '../../interfaces';



export interface CodeProviderProps {
    children: JSX.Element | JSX.Element[];
};

const INITIAL_STATE: CodeState = {
    html: "",
    css: "",
    js: "",
    code: "",
    title: "my_example_",
};

export const CodeProvider = ( { children } : CodeProviderProps ) => {

    const [ codeState, dispatch ] = useReducer( codeReducer, INITIAL_STATE );

    const changeHTML = ( html : string ) => {
        dispatch({ type: "CHANGE_HTML", payload: html });
        dispatch({ type: "CHANGE_CODE", payload: undefined });
    };

    const changeCSS = ( css : string ) => {
        dispatch({ type: "CHANGE_CSS", payload: css });
        dispatch({ type: "CHANGE_CODE", payload: undefined });
    };

    const changeJS = ( js : string ) => {
        dispatch({ type: "CHANGE_JS", payload: js });
        dispatch({ type: "CHANGE_CODE", payload: undefined });
    };

    const changeTitle = ( title : string ) => {
        dispatch({ type: "CHANGE_TITLE", payload: title });
        dispatch({ type: "CHANGE_CODE", payload: undefined });
    };

    return (
        <CodeContext.Provider value={{
            codeState,
            changeHTML,
            changeCSS,
            changeJS,
            changeTitle,
        }}>
            { children }
        </CodeContext.Provider>
    );
};
