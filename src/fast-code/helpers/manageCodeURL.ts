
export const convertCodeToUrl = ( html : string, css : string, js : string ) => btoa( `${ html }|&*|${ css }|&*|${ js }` );
export const convertUrlToCode = ( url : string ) => {
    url = url.replace( /\?=/g, '' );
    const [ htmlUrl, cssUrl, jsUrl ] = atob( url ).split( '|&*|' );
    return { htmlUrl, cssUrl, jsUrl };
}
export const changeUrl = ( html : string, css : string, js : string, navigate : ( url : string ) => void ) => {
    if ( html || css || js )
        navigate( `?=${ convertCodeToUrl( html, css, js ) }` );
    else 
        navigate( '/' );
};


