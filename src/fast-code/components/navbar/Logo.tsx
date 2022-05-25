import { TitleField } from '../fields/TitleField';

export const Logo = () => {
    return (
        <div className="flex flex-col gap-y-2 gap-x-2 px-3 py-1 lg:flex lg:flex-row z-10">
            <h1 className="text-white text-3xl"> K'ata Code </h1>
            <TitleField />
        </div>
    );
};
