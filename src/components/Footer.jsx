import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { GiHouse } from 'react-icons/gi';
import { ImOffice } from 'react-icons/im';
import { IoMail } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-[#111722] dark:bg-[#F6F4EB] py-8 sm:py-10 lg:py-12 inter-normal">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <Link to={'/'}>
                            <img
                                className="w-auto h-10 sm:h-12 dark:hidden"
                                src="/assets/images/virtu-white.png"
                                alt="Virtu Tech Solutions"
                            />
                            <img
                                className="w-auto h-10 sm:h-12 hidden dark:block"
                                src="/assets/images/virtu-logo.png"
                                alt="Virtu Tech Solutions"
                            />
                        </Link>

                        <p className="text-sm sm:text-base leading-relaxed text-gray-500 dark:text-black mt-4 sm:mt-6">
                            At Virtu Tech Solutions, we are a leading provider
                            of ERP-SAP Implementation and Support Services, Data
                            Science, AI/ML, Data Analytics, Data Visualization,
                            Native Mobile Application Development, and Product
                            Development Services.
                        </p>

                        <ul className="flex items-center space-x-4 mt-4 sm:mt-6">
                            <li>
                                <a
                                    href="https://www.facebook.com/virtu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Facebook"
                                    className="flex text-xl sm:text-2xl items-center justify-center text-white transition-all duration-200 bg-gray-900 dark:bg-gray-700 rounded-full w-8 h-8 sm:w-10 sm:h-10 hover:bg-blue-600 focus:bg-blue-600"
                                >
                                    <FaFacebookSquare />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/virtu-tech-solutions/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="LinkedIn"
                                    className="flex text-xl sm:text-2xl items-center justify-center text-white transition-all duration-200 bg-gray-900 dark:bg-gray-700 rounded-full w-8 h-8 sm:w-10 sm:h-10 hover:bg-blue-600 focus:bg-blue-600"
                                >
                                    <FaLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-white dark:text-black uppercase mb-4 sm:mb-6">
                            Company
                        </p>
                        <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                            {['About Us', 'Contact Us', 'Works', 'Career'].map(
                                (item) => (
                                    <li key={item}>
                                        <Link
                                            to={`/${item
                                                .toLowerCase()
                                                .replace(' ', '-')}`}
                                            className="text-gray-500 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors duration-200"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-white dark:text-black uppercase mb-4 sm:mb-6">
                            Contact us - USA
                        </p>
                        <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-500 dark:text-gray-800">
                            <li className="flex items-center gap-2">
                                <ImOffice />
                                <span>Virtu Tech Solutions LLC.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <GiHouse className="text-2xl sm:text-3xl flex-shrink-0 mt-1" />
                                <span>
                                    Metro Office Park Street 1, Lot 6, Suite
                                    B-04 Guaynabo, PR, USA-00968
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt />
                                <span>+1 (787) 598-1489</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoMail />
                                <a
                                    href="mailto:info@virtutechsolutions.com"
                                    className="hover:text-white dark:hover:text-black transition-colors duration-200"
                                >
                                    info@virtutechsolutions.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-white dark:text-black uppercase mb-4 sm:mb-6">
                            Contact us - INDIA
                        </p>
                        <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-500 dark:text-gray-800">
                            <li className="flex items-center gap-2">
                                <ImOffice />
                                <span>Virtu Tech Solutions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <GiHouse className="text-2xl sm:text-3xl flex-shrink-0 mt-1" />
                                <span>
                                    2nd Floor, Nukala Residency Jaihind Enclave,
                                    Madhapur Hyderabad, TS, India-500081
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt />
                                <span>+91 4066333999</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt />
                                <span>+91 4040221401</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoMail />
                                <a
                                    href="mailto:info@virtutechsolutions.com"
                                    className="hover:text-white dark:hover:text-black transition-colors duration-200"
                                >
                                    info@virtutechsolutions.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="mt-8 sm:mt-10 lg:mt-12 border-gray-800 dark:border-gray-300" />

                <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-700">
                    © 2009 - 2024 Virtu Tech Solutions LLC. All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
