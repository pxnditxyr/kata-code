import { Navbar } from './Navbar';
import { Networks } from './Networks';
import { TitleField } from '../fields/TitleField';

export const Header = () => {

    return (
        <header>
            <div>
                <h1> K'ata Code </h1>
            </div>

            <TitleField />
            <Navbar />
            <Networks />
        </header>
    );
};