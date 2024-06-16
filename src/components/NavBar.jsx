import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggler from '../utils/ThemeToggler';

const Navbar = () => {
    const [navbarBg, setNavbarBg] = useState('bg-transparent');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBg('bg-[#111722]');
            } else {
                setNavbarBg('bg-transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`navbar ${navbarBg} lexend-normal p-[1.2rem] sticky top-0 z-50 transition-colors duration-300`}
        >
            <div className="flex justify-between items-center">
                <div>
                    <Link to={'/'}>
                        <img
                            src="../assets/images/virtu-white.png"
                            alt="virtu-logo"
                        />
                    </Link>
                </div>
                <div className="flex items-center mr-12 space-x-8 relative">
                    <Link to="/references" className="nav-link btn-equal">
                        Capabilities
                    </Link>
                    <Link to="/references" className="nav-link btn-equal">
                        References
                    </Link>
                    <Link to="/agency-support" className="nav-link btn-equal">
                        Agency Support
                    </Link>
                    <Link to="/associates" className="nav-link btn-equal">
                        Associates
                    </Link>
                    <Link to="/contact-us" className="nav-link btn-equal">
                        Contact US
                    </Link>
                </div>
                <div>
                    <button className="text-gray-400 text-lg p-2">
                        <ThemeToggler />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
