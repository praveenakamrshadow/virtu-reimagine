import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggler from '../utils/ThemeToggler';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Importing IoIosArrowUp for the upward arrow

const Navbar = () => {
    const [navbarBg, setNavbarBg] = useState('bg-transparent');
    const [isCorporateOpen, setIsCorporateOpen] = useState(false); // State to track if capabilities dropdown is open

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

    const toggleCorporate = () => {
        setIsCorporateOpen(!isCorporateOpen);
    };

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
                    <div
                        className="nav-link flex gap-2 items-center relative"
                        onMouseEnter={toggleCorporate}
                        onMouseLeave={toggleCorporate}
                    >
                        Corporate
                        {isCorporateOpen ? (
                            <IoIosArrowUp />
                        ) : (
                            <IoIosArrowDown />
                        )}
                        {isCorporateOpen && (
                            <div className="absolute top-full left-0 bg-[#2C3443]  rounded-md mt-1 w-[12rem] shadow-lg py-2 px-4">
                                <Link to="/capabilities-item-1" className="">
                                    Capability Item 1
                                </Link>
                                <Link
                                    to="/capabilities-item-2"
                                    className="mt-1"
                                >
                                    Capability Item 2
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/references" className="nav-link">
                        Capabilities
                    </Link>
                    <Link to="/references" className="nav-link">
                        References
                    </Link>
                    <Link to="/agency-support" className="nav-link">
                        Agency Support
                    </Link>
                    <Link to="/associates" className="nav-link">
                        Associates
                    </Link>
                    <Link to="/contact-us" className="nav-link">
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
