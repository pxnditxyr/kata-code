export const createDownloadFile = ( code : string , title : string ) => {
    const downloadElement = document.createElement( 'a' );
    const file = new Blob( [ code ], { type: 'text/plain' } );
    downloadElement.href = URL.createObjectURL( file );
    downloadElement.download = `${ title }`;
    document.body.appendChild( downloadElement );
    downloadElement.click();
};
