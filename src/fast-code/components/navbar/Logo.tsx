import { TitleField } from '../fields/TitleField';

export const Logo = () => {
    return (
        <div className="flex flex-col gap-y-2 gap-x-2 px-3 justify-center items-center lg:flex lg:flex-row translate-x-full md:translate-x-0">
            <h1 className="text-white text-3xl"> K'ata Code </h1>
            <TitleField />
        </div>
    );
};
