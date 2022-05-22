import { useCode } from '../hooks';

export const Result = () => {
    
    const { code } = useCode();

    return (
        <div>
            <iframe srcDoc={ code }></iframe>
        </div>
    );
};
