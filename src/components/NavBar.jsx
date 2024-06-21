import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggler from '../utils/ThemeToggler';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Navbar = () => {
    const [navbarBg, setNavbarBg] = useState('bg-transparent');
    const [openDropdown, setOpenDropdown] = useState(null);

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

    const toggleDropdown = (dropdown) => {
        setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
    };

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <nav
            className={`navbar ${navbarBg} lexend-normal p-[1.4rem] sticky top-0 z-50 transition-colors duration-300`}
        >
            <div className="flex justify-between items-center">
                {/* nav-logo */}
                <div>
                    <Link
                        to={'/'}
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                    >
                        <img
                            src="../assets/images/virtu-white.png"
                            alt="virtu-logo"
                        />
                    </Link>
                </div>

                {/* nav-links */}
                <div className="flex items-center justify-center mr-12 space-x-8  relative">
                    {/* dropdowns */}
                    {/* corporate */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('corporate')}
                            className="nav-link flex items-center"
                        >
                            Corporate
                            {openDropdown === 'corporate' ? (
                                <IoIosArrowUp className="ml-1" />
                            ) : (
                                <IoIosArrowDown className="ml-1" />
                            )}
                        </button>
                        <AnimatePresence>
                            {openDropdown === 'corporate' && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={dropdownVariants}
                                    className="absolute mt-2 w-48 bg-[#2C3443]  shadow-lg rounded-md py-2"
                                >
                                    <Link
                                        to="/about-us"
                                        className="block px-4 py-2 text-gray-500 transition-all delay-100  hover:text-white"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        to="/carriers"
                                        className="block px-4 py-2 transition-all delay-100 text-gray-500 hover:text-white"
                                    >
                                        Carriers
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* capabilities */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('capabilities')}
                            className="nav-link flex items-center"
                        >
                            Capabilities
                            {openDropdown === 'capabilities' ? (
                                <IoIosArrowUp className="ml-1" />
                            ) : (
                                <IoIosArrowDown className="ml-1" />
                            )}
                        </button>
                        <AnimatePresence>
                            {openDropdown === 'capabilities' && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={dropdownVariants}
                                    className="absolute mt-2 w-60 bg-[#2C3443] shadow-lg rounded-md py-2"
                                >
                                    <Link
                                        to="/technologies"
                                        className="block px-4 py-2 transition-all delay-100 text-gray-500 hover:text-white"
                                    >
                                        Technologies
                                    </Link>
                                    <button
                                        onClick={() => toggleDropdown('erp')}
                                        className="w-full text-left px-4 py-2 transition-all delay-100 text-gray-500 hover:text-white"
                                    >
                                        ERP
                                        {openDropdown === 'erp' ? (
                                            <IoIosArrowUp className="ml-1" />
                                        ) : (
                                            <IoIosArrowDown className="ml-1" />
                                        )}
                                    </button>
                                    <AnimatePresence>
                                        {openDropdown === 'erp' && (
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={dropdownVariants}
                                                className="bg-[#1E2432] rounded-md py-2 mt-1"
                                            >
                                                <Link
                                                    to="/erp-module1"
                                                    className="block px-4 py-2 transition-all delay-100 text-gray-500 hover:text-white"
                                                >
                                                    ERP Module 1
                                                </Link>
                                                <Link
                                                    to="/erp-module2"
                                                    className="block px-4 py-2 transition-all delay-100 text-gray-500 hover:text-white"
                                                >
                                                    ERP Module 2
                                                </Link>
                                                {/* Add more ERP modules as needed */}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <Link
                                        to="/digital-transformation"
                                        className="flex items-center justify-between px-4 py-2 transition-all delay-100 text-gray-500 hover:text-white"
                                    >
                                        Digital Transformation
                                        <MdKeyboardArrowRight />
                                    </Link>
                                    <Link
                                        to="/managed-services"
                                        className="flex items-center justify-between px-4 py-2 transition-all delay-100 text-gray-500 hover:text-white"
                                    >
                                        Managed Services
                                        <MdKeyboardArrowRight />
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* industries */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('industries')}
                            className="nav-link flex items-center"
                        >
                            Industries
                            {openDropdown === 'industries' ? (
                                <IoIosArrowUp className="ml-1" />
                            ) : (
                                <IoIosArrowDown className="ml-1" />
                            )}
                        </button>
                        <AnimatePresence>
                            {openDropdown === 'industries' && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={dropdownVariants}
                                    className="absolute mt-2 w-60 bg-[#2C3443] shadow-lg rounded-md py-2"
                                >
                                    <Link
                                        to="/erp"
                                        className="flex items-center justify-between  px-4 py-2 transition-all delay-100 text-gray-500 hover:text-white"
                                    >
                                        ERP
                                        <MdKeyboardArrowRight />
                                    </Link>
                                    <Link
                                        to="/industries-2"
                                        className="flex items-center justify-between  px-4 py-2 transition-all delay-100 text-gray-500 hover:text-white"
                                    >
                                        Digital Transformation
                                        <MdKeyboardArrowRight />
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* remaining nav  */}
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

                {/* Theme toggler */}
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
