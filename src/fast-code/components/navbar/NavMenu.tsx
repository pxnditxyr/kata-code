import { Link } from 'react-router-dom';

type NavMenuProps = {
    isOpen: boolean;
}

export const NavMenu = ( { isOpen } : NavMenuProps ) => {
    return (
        <ul className={ `fixed h-full w-1/2 top-14 flex flex-col justify-center items-center gap-y-20 right-0 bg-slate-900 md:static md:w-auto md:inline md:h-auto md:flex md:flex-row md:gap-x-5 md:translate-x-0 md:transition-none text-white  ${ isOpen ? "translate-x-0 transition-all duration-300 ease-in" : "translate-x-full" }` }>
            <li className="text-xl transition-all ease-in-out hover:scale-110 hover:underline duration-300">
                <Link to="/"> Home </Link>
            </li>
            <li className="text-xl transition-all ease-in-out hover:scale-110 hover:underline duration-300">
                <Link to="/about"> About </Link>
            </li>
            <li className="text-xl transition-all ease-in-out hover:scale-110 hover:underline duration-300">
                <Link to="/contact"> Contact </Link>
            </li>
        </ul>
    );
};
