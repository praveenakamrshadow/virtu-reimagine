import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiEdit,
    FiChevronDown,
    FiTrash,
    FiShare,
    FiPlusSquare,
    FiChevronRight,
} from 'react-icons/fi';

const NavBar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeERP, setActiveERP] = useState(false);
    const [activeManagedServices, setActiveManagedServices] = useState(null);
    const [isSticky, setIsSticky] = useState(false);

    const handleDropdownClick = (menu) => {
        setActiveDropdown(menu === activeDropdown ? null : menu);
    };
    const handleERPHover = (isHovering) => {
        setActiveERP(isHovering);
    };
    const handleManagedServicesHover = (service) => {
        setActiveManagedServices(service);
    };
    const handleScroll = () => {
        const offset = window.scrollY;
        setIsSticky(offset > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const wrapperVariants = {
        open: {
            scaleY: 1,
            opacity: 1,
            transition: {
                duration: 0.2,
                when: 'beforeChildren',
                staggerChildren: 0.1,
            },
        },
        closed: {
            scaleY: 0,
            opacity: 0,
            transition: {
                duration: 0,
            },
        },
    };

    const iconVariants = {
        open: { rotate: 180 },
        closed: { rotate: 0 },
    };

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.1,
                when: 'beforeChildren',
            },
        },
        closed: {
            opacity: 0,
            y: -15,
            transition: {
                duration: 0.1,
                when: 'afterChildren',
            },
        },
    };

    return (
        <div className={`navbar-container ${isSticky ? 'sticky' : ''}`}>
            <div className="p-4 text-sm font-semibold text-[#9daeb6]">
                <div className=" flex justify-between items-center mx-auto">
                    <a href="/">
                        <img
                            src="/assets/images/virtu-logo.png"
                            alt="virtu-logo"
                            className="h-12 ml-[2.4rem]"
                        />
                    </a>
                    <nav className="flex-1">
                        <ul className="flex justify-center space-x-6">
                            <li className="relative">
                                <button
                                    onClick={() =>
                                        handleDropdownClick('corporate')
                                    }
                                    className="flex items-center gap-2"
                                >
                                    CORPORATE
                                    <motion.span
                                        variants={iconVariants}
                                        animate={
                                            activeDropdown === 'corporate'
                                                ? 'open'
                                                : 'closed'
                                        }
                                    >
                                        <FiChevronDown />
                                    </motion.span>
                                </button>
                                <motion.ul
                                    initial="closed"
                                    animate={
                                        activeDropdown === 'corporate'
                                            ? 'open'
                                            : 'closed'
                                    }
                                    variants={wrapperVariants}
                                    className="absolute left-0 mt-2 w-48 bg-[#2C3443] shadow-lg dropdown origin-top"
                                    data-dropdown="corporate"
                                >
                                    <motion.li
                                        variants={itemVariants}
                                        className="p-2 hover:bg-gray-200 flex items-center gap-2"
                                    >
                                        <FiEdit />
                                        About Us
                                    </motion.li>
                                    <motion.li
                                        variants={itemVariants}
                                        className="p-2 hover:bg-gray-200 flex items-center gap-2"
                                    >
                                        <FiPlusSquare />
                                        Careers
                                    </motion.li>
                                </motion.ul>
                            </li>
                            {/* CAPABILITIES */}
                            <li className="relative">
                                <button
                                    onClick={() =>
                                        handleDropdownClick('capabilities')
                                    }
                                    className="flex items-center gap-2"
                                >
                                    CAPABILITIES
                                    <motion.span
                                        variants={iconVariants}
                                        animate={
                                            activeDropdown === 'capabilities'
                                                ? 'open'
                                                : 'closed'
                                        }
                                    >
                                        <FiChevronDown />
                                    </motion.span>
                                </button>
                                <motion.ul
                                    initial="closed"
                                    animate={
                                        activeDropdown === 'capabilities'
                                            ? 'open'
                                            : 'closed'
                                    }
                                    variants={wrapperVariants}
                                    className="absolute left-0 mt-2 w-58 bg-white shadow-lg dropdown origin-top"
                                    data-dropdown="capabilities"
                                >
                                    <motion.li
                                        variants={itemVariants}
                                        className="p-2 hover:bg-gray-200 flex items-center justify-between gap-2"
                                    >
                                        <div className="flex items-center gap-2">
                                            <FiEdit />
                                            TECHNOLOGIES
                                        </div>
                                    </motion.li>
                                    {/* Nested dropdown for ERP */}
                                    <motion.li
                                        variants={itemVariants}
                                        className="p-2 hover:bg-gray-200 flex items-center justify-between gap-2"
                                        onMouseEnter={() =>
                                            handleERPHover(true)
                                        }
                                        onMouseLeave={() =>
                                            handleERPHover(false)
                                        }
                                    >
                                        <div className="flex items-center gap-2">
                                            <FiPlusSquare />
                                            ERP
                                        </div>
                                        <FiChevronRight />
                                        {/* Nested ERP dropdown */}
                                        {activeERP && (
                                            <motion.ul
                                                initial="closed"
                                                animate="open"
                                                variants={wrapperVariants}
                                                className="absolute left-full top-10 mt-0 ml-0 w-48 bg-white shadow-lg dropdown origin-top"
                                            >
                                                <motion.li
                                                    variants={itemVariants}
                                                    className="p-2 hover:bg-gray-200 flex items-center gap-2"
                                                >
                                                    SAP
                                                </motion.li>
                                                <motion.li
                                                    variants={itemVariants}
                                                    className="p-2 hover:bg-gray-200 flex items-center gap-2"
                                                >
                                                    SAP BUSINESS ONE
                                                </motion.li>
                                            </motion.ul>
                                        )}
                                    </motion.li>
                                    <motion.li
                                        variants={itemVariants}
                                        className="p-2 hover:bg-gray-200 flex items-center justify-between gap-2"
                                    >
                                        <div className="flex items-center gap-2">
                                            <FiShare />
                                            DIGITAL TRANSFORMATION
                                        </div>
                                        <FiChevronRight />
                                    </motion.li>
                                    <motion.li
                                        variants={itemVariants}
                                        className="p-2 hover:bg-gray-200 flex items-center justify-between gap-2"
                                        onMouseEnter={() =>
                                            handleManagedServicesHover(true)
                                        }
                                        onMouseLeave={() =>
                                            handleManagedServicesHover(false)
                                        }
                                    >
                                        <div className="flex items-center gap-2">
                                            <FiTrash />
                                            MANAGED SERVICES
                                        </div>
                                        <FiChevronRight />
                                        {/* Nested Managed Services dropdown */}
                                        {activeManagedServices && (
                                            <motion.ul
                                                initial="closed"
                                                animate="open"
                                                variants={wrapperVariants}
                                                className="absolute left-full top-[9rem] mt-0 ml-0 w-52 bg-white shadow-lg dropdown origin-top"
                                            >
                                                <motion.li
                                                    variants={itemVariants}
                                                    className="p-2 hover:bg-gray-200 flex items-center gap-2"
                                                >
                                                    DATABASE ADMINISTRATION
                                                </motion.li>
                                                <motion.li
                                                    variants={itemVariants}
                                                    className="p-2 hover:bg-gray-200 flex items-center gap-2"
                                                >
                                                    QUALITY ASSURANCE & TEST
                                                    AUTOMATION
                                                </motion.li>
                                                <motion.li
                                                    variants={itemVariants}
                                                    className="p-2 hover:bg-gray-200 flex items-center gap-2"
                                                >
                                                    INFRASTRUCTURE MANAGEMENT
                                                </motion.li>
                                            </motion.ul>
                                        )}
                                    </motion.li>
                                </motion.ul>
                            </li>
                            {/* INDUSTRIES */}
                            <li className="relative">
                                <button
                                    onClick={() =>
                                        handleDropdownClick('industries')
                                    }
                                    className="flex items-center gap-2"
                                >
                                    INDUSTRIES
                                    <motion.span
                                        variants={iconVariants}
                                        animate={
                                            activeDropdown === 'industries'
                                                ? 'open'
                                                : 'closed'
                                        }
                                    >
                                        <FiChevronDown />
                                    </motion.span>
                                </button>
                                <motion.ul
                                    initial="closed"
                                    animate={
                                        activeDropdown === 'industries'
                                            ? 'open'
                                            : 'closed'
                                    }
                                    variants={wrapperVariants}
                                    className="absolute left-0 mt-2 w-56 bg-white shadow-lg dropdown origin-top"
                                    data-dropdown="industries"
                                >
                                    <motion.li
                                        variants={itemVariants}
                                        className="p-2 hover:bg-gray-200 flex items-center justify-between gap-2"
                                    >
                                        <div className="flex items-center gap-2">
                                            <FiEdit />
                                            ERP
                                        </div>
                                        <FiChevronRight />
                                    </motion.li>
                                    {/* Nested dropdown for ERP */}
                                    <motion.li
                                        variants={itemVariants}
                                        className="p-2 hover:bg-gray-200 flex items-center justify-between gap-2"
                                        onMouseEnter={() =>
                                            handleERPHover(true)
                                        }
                                        onMouseLeave={() =>
                                            handleERPHover(false)
                                        }
                                    >
                                        <div className="flex items-center gap-2">
                                            <FiPlusSquare />
                                            ERP
                                        </div>
                                        <FiChevronRight />
                                        {/* Nested ERP dropdown */}
                                        {activeERP && (
                                            <motion.ul
                                                initial="closed"
                                                animate="open"
                                                variants={wrapperVariants}
                                                className="absolute left-full top-10 mt-0 ml-0 w-48 bg-white shadow-lg dropdown origin-top"
                                            >
                                                <motion.li
                                                    variants={itemVariants}
                                                    className="p-2 hover:bg-gray-200 flex items-center gap-2"
                                                >
                                                    MANUFACTURING
                                                </motion.li>
                                                <motion.li
                                                    variants={itemVariants}
                                                    className="p-2 hover:bg-gray-200 flex items-center gap-2"
                                                >
                                                    INVENTORY MANAGEMENT
                                                </motion.li>
                                                <motion.li
                                                    variants={itemVariants}
                                                    className="p-2 hover:bg-gray-200 flex items-center gap-2"
                                                >
                                                    CONSTRUCTIONS
                                                </motion.li>
                                                <motion.li
                                                    variants={itemVariants}
                                                    className="p-2 hover:bg-gray-200 flex items-center gap-2"
                                                >
                                                    PHARMACEUTICALS
                                                </motion.li>
                                            </motion.ul>
                                        )}
                                    </motion.li>
                                    <motion.li
                                        variants={itemVariants}
                                        className="p-2 hover:bg-gray-200 flex items-center justify-between gap-2"
                                    >
                                        <div className="flex items-center gap-2">
                                            <FiShare />
                                            DIGITAL TRANSFORMATION
                                        </div>
                                        <FiChevronRight />
                                    </motion.li>
                                </motion.ul>
                            </li>

                            <li>REFERENCES</li>
                            <li>AGENCY SUPPORT</li>
                            <li>CONTACT US</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
