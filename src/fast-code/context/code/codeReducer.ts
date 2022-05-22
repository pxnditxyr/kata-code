import { CodeState } from '../../interfaces';
import { joinCode } from '../../helpers'

type CodeActions =
    | { type: 'CHANGE_HTML', payload: string }
    | { type: 'CHANGE_CSS', payload: string }
    | { type: 'CHANGE_JS', payload: string }
    | { type: 'CHANGE_TITLE', payload: string }
    | { type: 'CHANGE_CODE', payload: undefined }

export const codeReducer = ( state : CodeState = {} as CodeState, action : CodeActions  ) : CodeState => {
    switch ( action.type ) {
        case 'CHANGE_HTML':
            return {
                ...state,
                html: action.payload
            }
        case 'CHANGE_CSS':
            return {
                ...state,
                css: action.payload
            }
        case 'CHANGE_JS':
            return {
                ...state,
                js: action.payload
            }
        case 'CHANGE_TITLE':
            return {
                ...state,
                title: action.payload
            }
        case 'CHANGE_CODE':
            return {
                ...state,
                code: joinCode( state.html, state.css, state.js, state.title )
            }

        default:
            return state;
    };
};
