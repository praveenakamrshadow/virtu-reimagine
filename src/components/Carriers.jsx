import { useEffect } from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import { FaArrowRightLong } from 'react-icons/fa6';

const Carriers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <Navbar />
            <div className="relative w-full h-[12rem] sm:h-[16rem] md:h-[20rem]">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUGMO8v1YxhmAmNfQ_3xg-LGZ8c3emfX6_A&s"
                    className="w-full h-full top-0 object-cover absolute"
                    alt="Carriers banner"
                />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                    CARRIERS
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row mt-6 sm:mt-8 md:mt-10 px-4 sm:px-8 md:px-16 lg:px-32 gap-6 lg:gap-10">
                <div className="lg:w-2/3">
                    <h1 className="text-white text-xl sm:text-2xl lexend-bold mt-4 dark:text-black">
                        IT STARTS WITH YOU !
                    </h1>
                    <p className="text-gray-500 mt-4 dark:text-gray-800">
                        At Virtu Tech Solutions, we are a leading provider of
                        ERP-SAP Implementation and Support Services, Data
                        Science, AI/ML, Data Analytics, Data Visualization,
                        Native Mobile Application Development, and Product
                        Development Services. We take pride in delivering
                        end-to-end solutions that drive digital transformation
                        for our clients.
                    </p>
                    <p className="text-gray-500 mt-4 dark:text-gray-800">
                        We believe in building a talented and diverse team of
                        professionals who are passionate about technology and
                        innovation. If you are looking to grow your career in
                        the IT industry, Virtu Tech Solutions is the place for
                        you.
                    </p>
                    <p className="text-gray-500 mt-4 dark:text-gray-800">
                        As a member of our team, you will have the opportunity
                        to work on exciting and challenging projects. Our Portal
                        Development and Web Development solutions are known for
                        their innovation and effectiveness. We have a wealth of
                        experience in building interactive and user-friendly web
                        portals that meet the unique requirements of our
                        clients.
                    </p>
                    <p className="text-gray-500 mt-4 dark:text-gray-800">
                        Whether you are an experienced professional or a fresh
                        graduate, we offer a work environment that encourages
                        continuous learning and professional growth. We value
                        creativity, problem-solving skills, and a strong
                        commitment to excellence. At Virtu Tech Solutions, you
                        will have the chance to work with cutting-edge
                        technologies and collaborate with a dynamic team of
                        experts.
                    </p>
                    <p className="text-gray-500 mt-4 mb-4 dark:text-gray-800">
                        Our career opportunities span a wide range of roles,
                        including Portal Development, Web Development, Data
                        Science, AI/ML, Data Analytics, Data Visualization,
                        Native Mobile Application Development, and Product
                        Development. We are committed to providing a supportive
                        and inclusive work culture that allows each team member
                        to thrive and reach their full potential.
                    </p>
                </div>
                <div className="lg:w-1/3 flex justify-center lg:justify-end">
                    <img
                        src="/assets/images/carriers.svg"
                        alt="Carriers-Img"
                        className="h-auto w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[35rem] rounded-md"
                    />
                </div>
            </div>

            <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 my-8  p-6 sm:p-8 rounded-md bg-[#111122] text-gray-400 dark:text-gray-800 dark:bg-[#EEE6D4]">
                <h1 className="text-yellow-800 text-3xl sm:text-4xl md:text-5xl lexend-bold text-center mt-4 sm:mb-6">
                    Let's Grow Together
                </h1>
                <p className="text-base sm:text-lg inter-bold text-center mt-4 px-2 sm:px-4">
                    Join our dynamic team and shape the future with us. Discover
                    your potential and make an impact in an environment that
                    fosters growth and innovation.
                </p>
                <div className="w-full flex items-center justify-center mt-6 mb-6 sm:mt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                        <span className="inter-bold text-base sm:text-lg">
                            To Apply, Drop your Resume/CV
                        </span>
                        <FaArrowRightLong className="text-xl sm:text-2xl hidden sm:block" />
                        <span className="lexend-bold text-white  dark:text-black text-xl sm:text-2xl md:text-3xl hover:text-blue-700 transition-all delay-100">
                            <a href="mailto:info@virtutechsolutions.com">
                                info@virtutechsolutions.com
                            </a>
                        </span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Carriers;
