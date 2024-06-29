import { useEffect } from 'react';
import Footer from '../../Footer';
import Navbar from '../../NavBar';

const Manufacturing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <Navbar />
            <div className="relative w-full h-[20rem]">
                <img
                    src="/assets/images/industries/manufacturing-banner.jpg"
                    className="w-full h-full top-0 object-cover absolute"
                    alt="Manufacturing-banner"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl lexend-bold">
                    MANUFACTURING
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Solving Manufacturing Challenges with SAP Business One
                    </h1>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        Is your manufacturing business struggling with various
                        challenges, from manpower issues to maintaining
                        profitability in the face of low-priced products from
                        countries like China? Are you grappling with inventory
                        management problems, concerns about meeting demand and
                        supply requirements, and maximizing plant resources? The
                        constantly changing regulations and high maintenance
                        costs adding to your worries?
                    </p>

                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        At Virtu Tech Solutions, we understand your concerns,
                        and we have been helping numerous clients overcome these
                        challenges for over a decade. Our comprehensive ERP
                        solution, based on SAP Business One, is specifically
                        designed to address the diverse manufacturing needs and
                        provide solutions that simplify and enhance the success
                        of medium and small industries.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Customized Solution for Manufacturing Excellence
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our ERP solution, developed and customized for the
                        manufacturing sector, is born on the factory floor. We
                        have taken into account hundreds of challenges faced by
                        businesses in diverse manufacturing industries. From
                        problem-solving to streamlining processes and
                        innovation, our mission is to help businesses simplify
                        and succeed to the fullest.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Enhancing Productivity and Profitability
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Implementing SAP Business One for Manufacturing can
                        significantly increase the productivity of your
                        workforce and machinery, ultimately contributing to the
                        success and profitability of your business. By
                        optimizing processes and ensuring smooth operations, we
                        enable you to create timeless creations that delight
                        your customers and directly impact your bottom line.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Scalable and Flexible Solution for All Manufacturing
                        Businesses
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our solution is highly scalable, integrated, and
                        modular, making it suitable for a range of manufacturing
                        businesses. Whether you operate a single plant or
                        multiple plants across different geographies and brands,
                        our ERP solution adapts to your specific requirements.
                        It covers essential functions of your business,
                        including procurement, manufacturing, inventory
                        management, supply chain, planning, sales and marketing,
                        asset maintenance, finance, and human resources.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        At Virtu Tech Solutions, we provide product planning,
                        technology planning, product development and testing,
                        maintenance and support, and product re-engineering. We
                        use a wide range of tools and technologies such as
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Key Features and Benefits
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        As part of our SAP Business One solution, you can expect
                        the following key features and benefits:
                    </p>
                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-800 mt-5 space-y-4">
                        <li>
                            Track, Measure, and Monitor: Gain real-time
                            visibility into all aspects of your manufacturing
                            operations, enabling you to make informed decisions.
                        </li>
                        <li>
                            Automate and Schedule Work: Streamline your
                            workflows, automate repetitive tasks, and optimize
                            resource allocation for improved efficiency.
                        </li>
                        <li>
                            Plan Your Material Requirements Right: Optimize
                            inventory management and streamline procurement
                            processes to ensure timely availability of
                            materials.
                        </li>
                        <li>
                            Double Your Productivity: Our solution helps you
                            maximize your productivity, allowing you to do more
                            with less.
                        </li>
                        <li>
                            Manage Regulatory Compliances: Stay compliant with
                            constantly changing regulations and standards,
                            avoiding penalties and legal complications.
                        </li>
                        <li>
                            Keep Your Customers Happy: Enhance customer
                            satisfaction by delivering high-quality products on
                            time, meeting their specific requirements, and
                            exceeding their expectations.
                        </li>
                    </ul>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Don’t let manufacturing challenges hold your business
                        back. Contact us today to discuss how our SAP Business
                        One solution can empower your manufacturing operations,
                        simplify processes, and drive success. Experience our
                        excellence firsthand and join the ranks of our satisfied
                        clients who have overcome similar obstacles to achieve
                        remarkable growth and profitability.
                    </p>
                </div>
                <img
                    src="/assets/images/industries/manufacturing.svg"
                    alt="Manufacturing-Img"
                    className="h-[35rem] w-[35rem] rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default Manufacturing;
