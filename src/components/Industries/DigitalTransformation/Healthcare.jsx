import { useEffect } from 'react';
import Footer from '../../Footer';
import Navbar from '../../NavBar';

const Healthcare = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <Navbar />
            <div className="relative w-full h-[20rem]">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUGMO8v1YxhmAmNfQ_3xg-LGZ8c3emfX6_A&s"
                    className="w-full h-full top-0 object-cover absolute"
                    alt=""
                />
                <h1 className="absolute top-40 left-[43.5rem] text-white text-4xl">
                    HEALTHCARE
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Modernizing Healthcare Ecosystems
                    </h1>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        The healthcare industry is undergoing a significant
                        systemic overhaul. To meet the challenges, organizations
                        need to restructure and implement stringent quality
                        monitoring to ensure patient safety and personal data
                        security. The need for accurate data-driven analytics
                        and technology tools to deliver efficient healthcare
                        services has never been more important, especially under
                        the evolving framework of FDA regulatory guidelines.
                    </p>

                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        At Virtu Tech Solutions, we specialize in creating a
                        modern-day, patient-focused healthcare ecosystem. This
                        ecosystem supports all the necessary IT components,
                        which have become essential and not a luxury. We
                        understand the tremendous pressures healthcare companies
                        face due to the changing regulatory norms. We help our
                        clients by advising and migrating them to better
                        technology and processes that enhance operational
                        efficiencies.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Responding to Shifting Market Demands
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        The healthcare industry is experiencing significant
                        market shifts and expanding its use of consumer-facing
                        technologies. Companies are now focusing on their core
                        activities while outsourcing non-core activities to
                        specialist vendors like Virtu Tech Solutions.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        We understand the expectation to deliver exceptional
                        service without compromising on IT budgets. Our years of
                        experience, domain expertise and FDA compliant security
                        systems and processes enable us to meet higher
                        expectations from our clients. We have proven vendor
                        experience, having worked with Fortune 500 clients,
                        ensuring that we deliver results on time and within
                        budget.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Mobile Technology for Healthcare Professionals
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Mobile apps are rapidly becoming essential communication
                        channels for many physicians and healthcare
                        professionals. The capabilities of these devices lend
                        themselves to providing up-to-date medical information
                        for specific audiences. Proliferation of devices also
                        enables organizations to spread diagnostic and
                        therapeutic information to a wide target audience with
                        minimal costs.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        At Virtu Tech Solutions, we specialize in mobile app
                        development catering to different platforms such as iOS,
                        Android and Windows. Our mobile consulting services,
                        application security, development and maintenance are
                        top-notch, ensuring that we deliver stunning results on
                        time. Our talented team takes a comprehensive approach,
                        prioritizing aesthetics and functionality to reduce
                        costs and improve efficiency. With over eight years of
                        experience and adherence to best practices, we are
                        confident in our ability to support your business
                        strategy by developing systems for increased
                        performance.
                    </p>
                </div>
                <img
                    src="/assets/images/industries/healthcare.svg"
                    alt="Healthcare-Img"
                    className="h-[35rem] w-[35rem] mt-5 rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default Healthcare;
