import { useCode } from '../hooks';

export const Result = () => {
    
    const { code } = useCode();

    return (
        <div className="bg-white w-full h-full">
            <iframe srcDoc={ code } className="w-full h-full"></iframe>
        </div>
    );
};
