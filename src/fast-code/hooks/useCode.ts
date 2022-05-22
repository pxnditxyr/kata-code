import { useContext } from 'react';
import { CodeContext } from '../context';

export const useCode = () => {
    const { codeState, changeHTML, changeCSS, changeJS, changeTitle } = useContext( CodeContext );
    return {
        codeState,
        changeHTML,
        changeCSS,
        changeJS,
        changeTitle,
        ...codeState
    };
};;
