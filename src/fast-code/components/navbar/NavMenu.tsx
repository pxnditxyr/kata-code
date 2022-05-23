
export const NavMenu = () => {
    return (
        <ul className="fixed h-full w-1/2 top-14 flex flex-col justify-center items-center gap-y-20 right-0 bg-slate-900 md:static md:w-auto md:inline md:h-auto md:flex md:flex-row md:gap-x-5 text-white">
            <li className="text-xl transition-all ease-in-out hover:scale-110 hover:underline duration-300"> Home </li>
            <li className="text-xl transition-all ease-in-out hover:scale-110 hover:underline duration-300"> About </li>
            <li className="text-xl transition-all ease-in-out hover:scale-110 hover:underline duration-300"> Contact </li>
        </ul>
    );
};
