import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggler from '../utils/ThemeToggler';
import { FaChevronRight } from 'react-icons/fa';

const Navbar = () => {
    const [isCorporateDropdownOpen, setIsCorporateDropdownOpen] =
        useState(false);
    const [isCapabilitiesDropdownOpen, setIsCapabilitiesDropdownOpen] =
        useState(false);
    const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
        useState(false);
    const [isErpDropdownOpen, setIsErpDropdownOpen] = useState(false);
    const [
        isDigitalTransformationDropdownOpen,
        setIsDigitalTransformationDropdownOpen,
    ] = useState(false);
    const [navbarBg, setNavbarBg] = useState('bg-transparent');

    const toggleCorporateDropdown = () => {
        setIsCorporateDropdownOpen(!isCorporateDropdownOpen);
        setIsCapabilitiesDropdownOpen(false);
        setIsIndustriesDropdownOpen(false);
        setIsErpDropdownOpen(false);
    };

    const toggleCapabilitiesDropdown = () => {
        setIsCapabilitiesDropdownOpen(!isCapabilitiesDropdownOpen);
        setIsCorporateDropdownOpen(false);
        setIsIndustriesDropdownOpen(false);
    };

    const toggleErpDropdown = () => {
        setIsErpDropdownOpen(!isErpDropdownOpen);
    };
    const toggleEDigitalTransformationDropdown = () => {
        setIsErpDropdownOpen(!isErpDropdownOpen);
    };
    const toggleIndustriesDropdown = () => {
        setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
        setIsCorporateDropdownOpen(false);
        setIsCapabilitiesDropdownOpen(false);
    };

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
                    <div className="relative">
                        <button
                            onClick={toggleCorporateDropdown}
                            className="nav-link focus:outline-none flex items-center"
                        >
                            Corporate
                            <svg
                                className={`ml-2 transition-transform duration-300 ${
                                    isCorporateDropdownOpen
                                        ? 'transform rotate-180'
                                        : ''
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                        {isCorporateDropdownOpen && (
                            <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-[#2C3443] dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                <div className="py-1 text-gray-400">
                                    <Link
                                        to="/about-us"
                                        className="block px-4 py-2 transition-all delay-100 text-sm hover:text-white"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        to="/carriers"
                                        className="block px-4 py-2 transition-all delay-100 text-sm hover:text-white"
                                    >
                                        Carriers
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button
                            onClick={toggleCapabilitiesDropdown}
                            className="nav-link focus:outline-none flex items-center"
                        >
                            Capabilities
                            <svg
                                className={`ml-2 transition-transform duration-300 ${
                                    isCapabilitiesDropdownOpen
                                        ? 'transform rotate-180'
                                        : ''
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                        {isCapabilitiesDropdownOpen && (
                            <div className="absolute mt-2 w-60 right-0 rounded-md shadow-lg bg-[#2C3443] dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all delay-100">
                                <div className="py-1 text-gray-400">
                                    <Link
                                        to="/technologies"
                                        className="block px-4 py-2 text-sm dark:text-gray-300 hover:text-white dark:hover:bg-gray-700 transition-all delay-100"
                                    >
                                        Technologies
                                    </Link>
                                    <div className="relative">
                                        <button
                                            onClick={toggleErpDropdown}
                                            className=" px-4 py-2 text-sm dark:text-gray-300 hover:text-white dark:hover:bg-gray-700 transition-all delay-100 w-full flex items-center justify-between"
                                        >
                                            ERP
                                            <svg
                                                className={`ml-2 transition-transform duration-300 ${
                                                    isErpDropdownOpen
                                                        ? 'transform rotate-180'
                                                        : ''
                                                }`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                        {isErpDropdownOpen && (
                                            <div className="absolute top-0 left-full mt-0 w-60 rounded-md shadow-lg bg-[#2C3443] dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all delay-100">
                                                <div className="py-1 text-gray-400">
                                                    <Link
                                                        to="/capabilities/erp/sub1"
                                                        className="block px-4 py-2 text-sm dark:text-gray-300 hover:text-white dark:hover:bg-gray-700 transition-all delay-100"
                                                    >
                                                        Option 1
                                                    </Link>
                                                    <Link
                                                        to="/capabilities/erp/sub2"
                                                        className="block px-4 py-2 text-sm dark:text-gray-300 hover:text-white dark:hover:bg-gray-700 transition-all delay-100"
                                                    >
                                                        Option 2
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <Link
                                        to="/capabilities/sub3"
                                        className="flex items-center justify-between px-4 py-2 text-sm dark:text-gray-300 hover:text-white dark:hover:bg-gray-700 transition-all delay-100"
                                    >
                                        Digital Transformation
                                        <FaChevronRight />
                                    </Link>
                                    <Link
                                        to="/capabilities/sub4"
                                        className="flex items-center justify-between px-4 py-2 text-sm dark:text-gray-300 hover:text-white dark:hover:bg-gray-700 transition-all delay-100"
                                    >
                                        Managed Services
                                        <FaChevronRight />
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button
                            onClick={toggleIndustriesDropdown}
                            className="nav-link focus:outline-none flex items-center"
                        >
                            Industries
                            <svg
                                className={`ml-2 transition-transform duration-300 ${
                                    isIndustriesDropdownOpen
                                        ? 'transform rotate-180'
                                        : ''
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                        {isIndustriesDropdownOpen && (
                            <div className="absolute mt-2 w-60 rounded-md shadow-lg bg-[#2C3443] dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                <div className="py-1 text-gray-500">
                                    <div className="relative">
                                        <button
                                            onClick={toggleErpDropdown}
                                            className=" px-4 py-2 text-sm dark:text-gray-300 hover:text-white dark:hover:bg-gray-700 transition-all delay-100 w-full flex items-center justify-between"
                                        >
                                            ERP
                                            <svg
                                                className={`ml-2 transition-transform duration-300 ${
                                                    isErpDropdownOpen
                                                        ? 'transform rotate-180'
                                                        : ''
                                                }`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                        {isErpDropdownOpen && (
                                            <div className="absolute top-0 left-full mt-0 w-60 rounded-md shadow-lg bg-[#2C3443] dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all delay-100">
                                                <div className="py-1 text-gray-400">
                                                    <Link
                                                        to="/capabilities/erp/sub1"
                                                        className="block px-4 py-2 text-sm dark:text-gray-300 hover:text-white dark:hover:bg-gray-700 transition-all delay-100"
                                                    >
                                                        Option 1
                                                    </Link>
                                                    <Link
                                                        to="/capabilities/erp/sub2"
                                                        className="block px-4 py-2 text-sm dark:text-gray-300 hover:text-white dark:hover:bg-gray-700 transition-all delay-100"
                                                    >
                                                        Option 2
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <button
                                            onClick={
                                                toggleEDigitalTransformationDropdown
                                            }
                                            className=" px-4 py-2 text-sm dark:text-gray-300 hover:text-white dark:hover:bg-gray-700 transition-all delay-100 w-full flex items-center justify-between"
                                        >
                                            Digital Transformation
                                            <svg
                                                className={`ml-2 transition-transform duration-300 ${
                                                    isErpDropdownOpen
                                                        ? 'transform rotate-180'
                                                        : ''
                                                }`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                        {isErpDropdownOpen && (
                                            <div className="absolute top-0 left-full mt-0 w-60 rounded-md shadow-lg bg-[#2C3443] dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all delay-100">
                                                <div className="py-1 text-gray-400">
                                                    <Link
                                                        to="/capabilities/erp/sub1"
                                                        className="block px-4 py-2 text-sm dark:text-gray-300 hover:text-white dark:hover:bg-gray-700 transition-all delay-100"
                                                    >
                                                        Option 1
                                                    </Link>
                                                    <Link
                                                        to="/capabilities/erp/sub2"
                                                        className="block px-4 py-2 text-sm dark:text-gray-300 hover:text-white dark:hover:bg-gray-700 transition-all delay-100"
                                                    >
                                                        Option 2
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

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
