import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import { Networks } from './Networks';
import { NavToggler } from './NavToggler';

export const Navbar = () => {
    return (
        <nav className="flex justify-between py-3 items-center bg-slate-900">
            <Logo />
            <NavMenu />
            <Networks />
            <NavToggler />
        </nav>
    );
};
