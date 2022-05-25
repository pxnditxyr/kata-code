import { createDownloadFile } from '../../helpers';
import { useCode } from '../../hooks';

export const FabDownloadHTML = () => {

    const { codeState } = useCode();
    const { code, title } = codeState;
    
    return (
        <button
            className="fixed z-10 bottom-5 right-5 bg-green-500 hover:bg-green-700 py-2 px-3 rounded-full focus:outline-none focus:shadow-outline flex justify-center items-center"
            onClick={ () => createDownloadFile( code, title ) }
            >
            <span className="text-gray-800 text-3xl font-black">🡇</span>
        </button>
    );
};
