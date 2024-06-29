import { useEffect } from 'react';
import Footer from '../Footer';
import Navbar from '../NavBar';

const QualityTesting = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <Navbar />
            <div className="relative w-full h-[20rem]">
                <img
                    src="/public/assets/images/servicesTWO/testing-banner.jpg"
                    className="w-full h-full top-0 object-cover absolute"
                    alt="Testing-Banner"
                />
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center px-4">
                    QUALITY ASSURANCE & TEST AUTOMATION
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <p className="text-gray-500 dark:text-gray-800">
                        At Virtu Tech, we understand the constantly evolving
                        nature of software quality assurance requirements. Our
                        services range from verifying client requirements to
                        validating installation scripts, design documents, and
                        other deliverables, in addition to testing software for
                        various foreseen and unforeseen user conditions. Our
                        skilled QA team assesses software functionality, load,
                        stress, volume, regression, and performance profiling of
                        every piece of software that we deliver as part of our
                        QA Services.
                    </p>

                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        We have an independent team of quality assurance,
                        quality control, and testing engineers who receive
                        regular training to ensure they have the required rigor,
                        process orientation, and skills for this demanding
                        service.
                    </p>

                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        We use numerous testing and defect-tracking tools such
                        as
                    </h1>
                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-800 mt-5 space-y-4">
                        <li>
                            Test Director, Quality Center, ALM, and Top Team
                            Analyst for{' '}
                            <span className="lexend-bold text-white">
                                requirements management
                            </span>
                        </li>
                        <li>
                            Test Director, Quality Center, ALM, Rally, Bamboo,
                            and Atlassian tools for{' '}
                            <span className="lexend-bold text-white">
                                test planning
                            </span>
                        </li>
                        <li>
                            QTP/UFT, Selenium, Rational Suite, Sikuli, Test
                            Complete, Appium, Perfecto, AutoIT, and iMacros for{' '}
                            <span className="lexend-bold text-white">
                                automation
                            </span>
                        </li>
                        <li>
                            Load Runner, Performance Center, apache JMeter, and
                            NeoLoad for{' '}
                            <span className="lexend-bold text-white">
                                load/stress testing
                            </span>
                        </li>
                        <li>
                            Quality Center, ALM, Atlassian tools for{' '}
                            <span className="lexend-bold text-white">
                                reporting and bug tracking
                            </span>
                        </li>
                    </ul>
                    <p className="text-gray-500 mt-5 dark:text-gray-800">
                        Our software product engineering experience has equipped
                        us with expertise in automated unit testing tools such
                        as QTP, JUnit, Selenium, and Test complete. We are also
                        proficient in using configuration management and
                        building tools like CVS, ANT, and Cruise Control.
                    </p>
                    <p className="text-gray-500 mt-5 dark:text-gray-800">
                        As part of our Quality Engineering practice, we offer
                        the following services:
                    </p>
                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-800 mt-5 space-y-4">
                        <li>Manual Testing</li>
                        <li>Automation Testing</li>
                        <li>Performance Testing</li>
                        <li>Mobile Testing</li>
                        <li>Dev Ops</li>
                        <li>QA Platform Administration Services</li>
                    </ul>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our expert services exceed industry standards, and we
                        continually strive to make our solutions more efficient,
                        reliable, and cost-effective.
                    </p>
                </div>
                <img
                    src="https://img.freepik.com/free-vector/isometric-iso-certification-concept_23-2148688048.jpg?t=st=1719232050~exp=1719235650~hmac=f00d18c18f5da8a8b436c0c71f6ee828501c501307e13c7df38db2d1a8ea099d&w=996"
                    alt="Quality-Testing-Img"
                    className="h-[35rem] w-[35rem] rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default QualityTesting;
