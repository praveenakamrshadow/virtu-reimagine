import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronRight, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState({
        corporate: false,
        capabilities: false,
        industries: false,
        references: false,
        agencySupport: false,
        associates: false,
        contactUs: false,
        erp: false,
    });
    const timerRef = useRef(null);

    const corporateRef = useRef(null);
    const capabilitiesRef = useRef(null);
    const industriesRef = useRef(null);
    const referencesRef = useRef(null);
    const agencySupportRef = useRef(null);
    const associatesRef = useRef(null);
    const contactUsRef = useRef(null);

    const toggleDropdown = (dropdown) => {
        setDropdownOpen((prevState) => ({
            ...prevState,
            [dropdown]: !prevState[dropdown],
        }));
    };

    const handleMouseEnter = (dropdown) => {
        setDropdownOpen((prevState) => ({
            ...prevState,
            [dropdown]: true,
        }));
    };

    const handleMouseLeave = (dropdown) => {
        timerRef.current = setTimeout(() => {
            setDropdownOpen((prevState) => ({
                ...prevState,
                [dropdown]: false,
            }));
        }, 5000);
    };

    const dropdownVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 'auto' },
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                corporateRef.current &&
                !corporateRef.current.contains(event.target) &&
                capabilitiesRef.current &&
                !capabilitiesRef.current.contains(event.target) &&
                industriesRef.current &&
                !industriesRef.current.contains(event.target) &&
                referencesRef.current &&
                !referencesRef.current.contains(event.target) &&
                agencySupportRef.current &&
                !agencySupportRef.current.contains(event.target) &&
                associatesRef.current &&
                !associatesRef.current.contains(event.target) &&
                contactUsRef.current &&
                !contactUsRef.current.contains(event.target)
            ) {
                setDropdownOpen({
                    corporate: false,
                    capabilities: false,
                    industries: false,
                    references: false,
                    agencySupport: false,
                    associates: false,
                    contactUs: false,
                });
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-transparent lexend-normal sticky z-50 p-10">
            <div className="flex justify-between items-center">
                <div>
                    <Link to={'/'}>
                        <img
                            src="../assets/images/virtu-white.png"
                            alt="virtu-logo"
                        />
                    </Link>
                </div>
                <div className="flex items-center mr-12 space-x-8">
                    {/* Corporate Dropdown */}
                    <div
                        className="relative"
                        ref={corporateRef}
                        onMouseEnter={() => handleMouseEnter('corporate')}
                        onMouseLeave={() => handleMouseLeave('corporate')}
                    >
                        <button
                            onClick={() => toggleDropdown('corporate')}
                            className="nav-link flex gap-2 items-center justify-center"
                        >
                            Corporate{' '}
                            {isDropdownOpen.corporate ? (
                                <FaChevronUp />
                            ) : (
                                <FaChevronDown />
                            )}
                        </button>
                        {isDropdownOpen.corporate && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={dropdownVariants}
                                className="absolute mt-2 w-48 bg-[#2C3443] text-gray-500 rounded-md shadow-lg z-20"
                                onMouseEnter={() =>
                                    handleMouseEnter('corporate')
                                }
                                onMouseLeave={() =>
                                    handleMouseLeave('corporate')
                                }
                            >
                                <Link
                                    to="/AboutUs"
                                    className="block px-4 py-2 transition-colors duration-300 ease-in-out hover:text-white"
                                >
                                    About Us
                                </Link>
                                <Link
                                    to="/Carriers"
                                    className="block px-4 py-2 transition-colors duration-300 ease-in-out hover:text-white"
                                >
                                    Carriers
                                </Link>
                            </motion.div>
                        )}
                    </div>
                    {/* Capabilities Dropdown */}
                    <div
                        className="relative"
                        ref={capabilitiesRef}
                        onMouseEnter={() => handleMouseEnter('capabilities')}
                        onMouseLeave={() => handleMouseLeave('capabilities')}
                    >
                        <button
                            onClick={() => toggleDropdown('capabilities')}
                            className="nav-link flex gap-2 items-center justify-center"
                        >
                            Capabilities{' '}
                            {isDropdownOpen.capabilities ? (
                                <FaChevronUp />
                            ) : (
                                <FaChevronDown />
                            )}
                        </button>
                        {isDropdownOpen.capabilities && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={dropdownVariants}
                                className="absolute mt-2 w-64 bg-[#2C3443] text-gray-500 rounded-md shadow-lg z-20"
                                onMouseEnter={() =>
                                    handleMouseEnter('capabilities')
                                }
                                onMouseLeave={() =>
                                    handleMouseLeave('capabilities')
                                }
                            >
                                <Link
                                    to="/capabilities/sub1"
                                    className="block px-4 py-2 transition-colors duration-300 ease-in-out hover:text-white"
                                >
                                    Technologies
                                </Link>
                                <Link
                                    to="/capabilities/sub2"
                                    className="px-4 py-2 transition-colors duration-300 ease-in-out hover:text-white flex justify-between items-center"
                                >
                                    ERP
                                    <FaChevronRight />
                                </Link>
                                <Link
                                    to="/capabilities/sub2"
                                    className=" px-4 py-2 transition-colors duration-300 ease-in-out hover:text-white flex justify-between items-center"
                                >
                                    Digital Transformation
                                    <FaChevronRight />
                                </Link>
                                <Link
                                    to="/capabilities/sub2"
                                    className=" px-4 py-2 transition-colors duration-300 ease-in-out hover:text-white flex justify-between items-center"
                                >
                                    Managed Services
                                    <FaChevronRight />
                                </Link>
                            </motion.div>
                        )}
                    </div>
                    {/* Industries Dropdown */}
                    <div
                        className="relative"
                        ref={industriesRef}
                        onMouseEnter={() => handleMouseEnter('industries')}
                        onMouseLeave={() => handleMouseLeave('industries')}
                    >
                        <button
                            onClick={() => toggleDropdown('industries')}
                            className="nav-link flex gap-2 items-center justify-center"
                        >
                            Industries{' '}
                            {isDropdownOpen.industries ? (
                                <FaChevronUp />
                            ) : (
                                <FaChevronDown />
                            )}
                        </button>
                        {isDropdownOpen.industries && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={dropdownVariants}
                                className="absolute mt-2 w-64 bg-[#2C3443] text-gray-500 rounded-md shadow-lg z-20"
                                onMouseEnter={() =>
                                    handleMouseEnter('industries')
                                }
                                onMouseLeave={() =>
                                    handleMouseLeave('industries')
                                }
                            >
                                <Link
                                    to="/industries/sub1"
                                    className=" px-4 py-2 transition-colors duration-300 ease-in-out hover:text-white flex justify-between items-center"
                                >
                                    <button>ERP</button>
                                    <FaChevronRight />
                                </Link>
                                <Link
                                    to="/industries/sub
                                2"
                                    className="px-4 py-2 transition-colors duration-300 ease-in-out hover:text-white flex justify-between items-center"
                                >
                                    Digital Transformation
                                    <FaChevronRight />
                                </Link>
                            </motion.div>
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
                        Contact Us
                    </Link>
                </div>
                <div>
                    <button className="text-gray-400 rounded-md bg-blue-600 p-2">
                        Theme Toggler
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
