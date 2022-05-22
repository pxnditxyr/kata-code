import { createContext } from 'react';
import { CodeState } from '../../interfaces';

export interface CodeContextProps {
    codeState: CodeState;
    changeHTML: ( html: string ) => void;
    changeCSS: ( css: string ) => void;
    changeJS: ( js: string ) => void;
    changeTitle: ( title: string ) => void;
};

export const CodeContext = createContext( {} as CodeContextProps );
