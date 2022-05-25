
type NavTogglerProps = {
    isOpen: boolean;
    changeIsOpen: () => void;
}

export const NavToggler = ( { isOpen, changeIsOpen } : NavTogglerProps ) => {
    return (
        <div 
            id="nav__toggle" className="md:hidden px-5 z-30"
            onClick={ changeIsOpen }
            >
            <button 
                className="flex items-center justify-center text-white focus:outline-none"
                >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
        </div>
    );
};
