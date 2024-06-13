import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggler from '../utils/ThemeToggler';

const Navbar = () => {
    const [isCorporateDropdownOpen, setIsCorporateDropdownOpen] =
        useState(false);
    const [isCapabilitiesDropdownOpen, setIsCapabilitiesDropdownOpen] =
        useState(false);
    const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
        useState(false);

    const toggleCorporateDropdown = () => {
        setIsCorporateDropdownOpen(!isCorporateDropdownOpen);
        // Close other dropdowns
        setIsCapabilitiesDropdownOpen(false);
        setIsIndustriesDropdownOpen(false);
    };

    const toggleCapabilitiesDropdown = () => {
        setIsCapabilitiesDropdownOpen(!isCapabilitiesDropdownOpen);
        // Close other dropdowns
        setIsCorporateDropdownOpen(false);
        setIsIndustriesDropdownOpen(false);
    };

    const toggleIndustriesDropdown = () => {
        setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
        // Close other dropdowns
        setIsCorporateDropdownOpen(false);
        setIsCapabilitiesDropdownOpen(false);
    };

    return (
        <nav className="navbar bg-transparent lexend-normal p-10 sticky top-0 z-50">
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
                            <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                <div className="py-1">
                                    <Link
                                        to="/corporate/sub1"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        to="/corporate/sub2"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
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
                            <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                <div className="py-1">
                                    <Link
                                        to="/capabilities/sub1"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        Technologies
                                    </Link>
                                    <Link
                                        to="/capabilities/sub2"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        ERP
                                    </Link>
                                    <Link
                                        to="/capabilities/sub3"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        Digital Transformation
                                    </Link>
                                    <Link
                                        to="/capabilities/sub4"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        Managed Services
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
                            <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                <div className="py-1">
                                    <Link
                                        to="/industries/sub1"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        ERP
                                    </Link>
                                    <Link
                                        to="/industries/sub2"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        Digital Transformation
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to="/erp" className="nav-link">
                        ERP
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
