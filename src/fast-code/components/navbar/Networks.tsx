
type NetworksProps = {
    isOpen: boolean;
};

export const Networks = ( { isOpen } : NetworksProps ) => {
    return (
        <ul className={ `md:flex md:justify-end md:px-5 md:gap-x-5 hidden ${ isOpen ? "" : "" }` }>
            <li>
                <a href="https://github.com/pxnditxyr/" target="_blank">
                    <img className="w-12 h-12 rounded-full bg-white" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github" />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/PxndxsYR" target="_blank">
                    <img className="w-12 h-12" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg" alt="Twitter" />
                </a>
            </li>
        </ul>
    );
};
