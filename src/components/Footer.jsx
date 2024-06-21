import { FaFacebookSquare, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { GiHouse } from 'react-icons/gi';
import { ImOffice } from 'react-icons/im';
import { IoMail } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-[#111722] py-10 inter-normal sm:pt-16 lg:pt-12">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <Link to={'/'}>
                            <img
                                className="w-auto h-9"
                                src="/assets/images/virtu-white.png"
                                alt="Virtu Tech Solutions"
                            />
                        </Link>

                        <p className="text-base leading-relaxed text-gray-500 mt-7">
                            At Virtu Tech Solutions, we are a leading provider
                            of ERP-SAP Implementation and Support Services, Data
                            Science, AI/ML, Data Analytics, Data Visualization,
                            Native Mobile Application Development, and Product
                            Development Services.
                        </p>

                        <ul className="flex items-center space-x-4 mt-5">
                            <li>
                                <a
                                    href="https://www.facebook.com/virtu"
                                    target="_blank"
                                    title="Facebook"
                                    className="flex text-2xl items-center justify-center text-white transition-all duration-200 bg-gray-900 rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600"
                                >
                                    <FaFacebookSquare />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.linkedin.com/company/virtu-tech-solutions/"
                                    target="_blank"
                                    title="LinkedIn"
                                    className="flex text-2xl items-center justify-center text-white transition-all duration-200 bg-gray-900 rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600"
                                >
                                    <FaLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-white uppercase">
                            Company
                        </p>

                        <ul className="mt-6 space-y-4 font-semibold text-gray-500">
                            <li>
                                <Link
                                    to="/about-us"
                                    title="About Us"
                                    className="flex text-base transition-all duration-200 hover:text-white focus:text-blue-600"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact-us"
                                    title="Contact Us"
                                    className="flex text-base transition-all duration-200 hover:text-white focus:text-blue-600"
                                >
                                    Contact Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/references"
                                    title="Works"
                                    className="flex text-base transition-all duration-200 hover:text-white focus:text-blue-600"
                                >
                                    Works
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/carriers"
                                    title="Career"
                                    className="flex text-base transition-all duration-200 hover:text-white focus:text-blue-600"
                                >
                                    Career
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-72">
                        <p className="text-sm font-semibold tracking-widest text-white uppercase">
                            Contact us - USA
                        </p>
                        <ul className="mt-6 text-gray-500 space-y-4">
                            <li className="gap-2 flex justify-start items-center">
                                <ImOffice />
                                Virtu Tech Solutions LLC.
                            </li>
                            <li className="gap-2 flex justify-start items-center">
                                <GiHouse className="text-3xl" />
                                Metro Office Park Street 1, Lot 6, Suite B-04
                                Guaynabo, <br /> PR, USA-00968
                            </li>
                            <li className="gap-2 flex justify-start items-center">
                                <FaPhoneAlt />
                                +1 (787) 598-1489
                            </li>
                            <li className="gap-2 flex justify-start items-center">
                                <IoMail />
                                <a
                                    className="hover:text-white transition-all duration-100"
                                    href="mailto:info@virtutechsolutions.com"
                                >
                                    info@virtutechsolutions.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-72 sm:ml-32">
                        <p className="text-sm font-semibold tracking-widest text-white uppercase">
                            Contact us - INDIA
                        </p>
                        <ul className="mt-6 text-gray-500 space-y-4">
                            <li className="gap-2 flex justify-start items-center">
                                <ImOffice />
                                Virtu Tech Solutions
                            </li>
                            <li className="gap-2 flex justify-start items-center">
                                <GiHouse className="text-5xl" />
                                2nd Floor, Nukala Residency Jaihind Enclave,
                                Madhapur Hyderabad, TS, India-500081
                            </li>
                            <li className="gap-2 flex justify-start items-center">
                                <FaPhoneAlt />
                                +91 4066333999
                            </li>
                            <li className="gap-2 flex justify-start items-center">
                                <FaPhoneAlt />
                                +91 4040221401
                            </li>
                            <li className="gap-2 flex justify-start items-center">
                                <IoMail />
                                <a
                                    className="hover:text-white transition-all duration-100"
                                    href="mailto:info@virtutechsolutions.com"
                                >
                                    info@virtutechsolutions.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="mt-6 mb-5 border-gray-200" />
                <p className="text-sm text-center text-gray-500">
                    © 2009 - 2024 Virtu Tech Solutions LLC. All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
