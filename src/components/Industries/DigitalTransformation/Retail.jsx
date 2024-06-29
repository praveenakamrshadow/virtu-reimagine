import { useEffect } from 'react';
import Navbar from '../../NavBar';
import Footer from '../../Footer';

const Retail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <Navbar />
            <div className="relative w-full h-[20rem]">
                <img
                    src="/assets/images/industries/retail-banner.jpg"
                    className="w-full h-full top-0 object-cover absolute"
                    alt="retail-banner"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl">
                    RETAIL
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        Around the world, the retail market rebounded in the
                        first half of 2013, with retailers
                        Retail-Sectorexpanding their operations to new markets
                        physically and also through web properties and mobile
                        medium. Simultaneously, they are spending billions of
                        dollars to offer their existing customers a great online
                        shopping experience. They are using big data to predict
                        consumer demand, shorten lead times, reduce inventory
                        holding and save cost.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        New logistics techniques have come into vogue —
                        cross-docking, electronic data interchange and data
                        mining and warehousing. Lifestyle retailers are
                        attempting to track consumer purchases through
                        cutting-edge CRM software and rewarding loyal customers
                        through ‘affinity clubs’ although infrastructural
                        bottlenecks are making these international best
                        practices a daunting task.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        That’s where Virtu Tech Solutions PVT LTD. comes into
                        the picture. We help retailers do data capture. With
                        money moving on mobile, we set their mobile strategies
                        in place, we support their ICT needs, we do a quality
                        monitoring of their existing and futuristic web and
                        mobile services.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Over the years, Virtu Tech Solutions PVT LTD. has
                        developed deep-domain knowledge of retail operations and
                        created innovative practices to help retailers execute
                        their strategic initiatives. Our practice leverages does
                        end-to-end mapping of all stages of their business-cycle
                        from product buying to merchandising before proposing an
                        appropriate intervention.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Some of the key areas that we cover are:
                    </h1>
                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-800 mt-5 space-y-4">
                        <li>Store Applications</li>
                        <li>Developing POS Systems</li>
                        <li>
                            Developing Interfaces for Varied Consumer Touch
                            points
                        </li>
                        <li>Offering Web services</li>
                        <li>XML Data Exchanges</li>
                        <li>Back-end Enterprise Applications Technologies</li>
                        <li>Pervasive computing on mobile computing devices</li>
                        <li>RFID solutions</li>
                        <li>Mobile Applications</li>
                        <li>Smart Cart Applications</li>
                        <li>XML Data Exchanges</li>
                        <li>Enterprise Application Integration</li>
                    </ul>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Virtu Tech Solutions PVT LTD. core focus is on four
                        practice areas of IT offerings for the retail industry:
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Business Consulting:
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Identifying new business opportunities; spotting and
                        removing operational bottlenecks; improving your
                        existing business processes; evaluating solutions and
                        recommending new ones that would better fit your needs.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Mobile competency:
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        The retail industry has evolved and expanded from
                        e-commerce to M-Commerce. Consumers are now using their
                        smart devices to review, compare, search and buy. Virtu
                        Tech Solutions PVT LTD. has the expertise for creating
                        and managing apps that would address these needs and
                        delight your consumers, while dramatically enriching
                        their shopping experience.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Infrastructure Management:
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Retail industry requires heavy infrastructure to support
                        its ICT needs. Virtu Tech Solutions PVT LTD. has over 8
                        years of experience in setting-up new managing existing
                        legacies of complex infrastructure environments.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        QA Services:
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our Quality Assurance (QA) service is unmatched in the
                        industry. We have a multi-layered, detail-oriented,
                        customer-focused approach to ensuring that we have zero
                        tolerance for defects or bugs of any kind.
                    </p>
                </div>
                <img
                    src="/assets/images/industries/retail.svg"
                    alt="Retail-Img"
                    className="h-[35rem] w-[35rem] object-cover"
                />
            </div>
            <Footer />
        </div>
    );
};

export default Retail;
