import { useState } from 'react';

import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import { Networks } from './Networks';
import { NavToggler } from './NavToggler';

export const Navbar = () => {

    const [ isOpen, setIsOpen ] = useState( false );

    const changeIsOpen = () => setIsOpen( !isOpen );

    return (
        <nav className="flex justify-between py-3 items-center bg-slate-900">
            <Logo />
            <NavMenu isOpen={ isOpen }/>
            <Networks isOpen={ isOpen }/>
            <NavToggler isOpen={ isOpen } changeIsOpen={ changeIsOpen } />
        </nav>
    );
};
