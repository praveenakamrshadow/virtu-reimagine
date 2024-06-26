import { useEffect } from 'react';
import Footer from '../../Footer';
import Navbar from '../../NavBar';

const Construction = () => {
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
                <h1 className="absolute top-40 left-[43rem] text-white text-4xl">
                    CONSTRUCTION
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        As the construction industry gets increasingly complex,
                        entrepreneurs face growing manpower costs and the need
                        for stronger, automated processes. At Virtu Tech
                        Solutions, we understand these challenges, and we offer
                        solutions that streamline operations, reduce costs, and
                        enhance efficiency. Our Construction ERP solution,
                        powered by SAP Business One, is specifically designed to
                        meet the unique needs of the construction industry,
                        enabling seamless integration and management of diverse
                        functions.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Centralizing and Streamlining Construction Operations
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        With SAP Business One’s Construction ERP solution, you
                        gain access to a powerful tool that streamlines,
                        manages, and integrates all the diverse functions
                        involved in construction. From managing manpower, both
                        employed and contracted, to project management, legal
                        compliance, finance, and a wide variety of inventory and
                        vendors, our solution is designed to ensure seamless
                        operations.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Here are some of the core features
                    </h1>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Bill of Quantity
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our solution provides the ability to add project-based
                        Bill of Quantities (BOQ), and leverage Master Rate
                        Analysis to perform comprehensive costing. This feature
                        includes rate analysis for masters as well as specific
                        project requirements, covering materials, labor,
                        equipment, subcontracting, and more.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Execution
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        The Estimation & Measurement Book feature simplifies
                        client measurement and billing, ensuring accurate and
                        efficient project execution. This feature allows you to
                        maintain different stages of estimation data and track
                        actual measurements in real-time.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Sub-contract
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our solution offers a range of features to streamline
                        sub-contracting processes, including Tender Document
                        management, BOQ Preparation, Tender quotation, Tender
                        Comparison, Tender Negotiation / Rate Edit, Work Order
                        Preparation, Measurement Book Entry, and Sub Contractor
                        Billing.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Optimizing Construction Operations
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        At Virtu Tech Solutions, we empower construction
                        companies with comprehensive ERP solutions that drive
                        success in the industry. Our Construction ERP solution
                        based on SAP Business One optimizes operations, enhances
                        efficiency, and maximizes profitability by:
                    </p>
                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-800 mt-5 space-y-4">
                        <li>Streamlining processes and centralizing data.</li>
                        <li>
                            Minimizing errors and reducing operational costs.
                        </li>
                        <li>
                            Improving cash flow through enhanced receivables
                            management and procurement control.
                        </li>
                        <li>
                            Enhancing project management capabilities through
                            timely delivery, accurate reporting, and real-time
                            monitoring.
                        </li>
                    </ul>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Are you ready to transform your construction business
                        with a comprehensive ERP solution? Contact us today to
                        learn more about our SAP Business One solution and how
                        we can help streamline your operations, simplify your
                        processes, and optimize your performance. Don’t miss out
                        on the opportunity to achieve excellence in construction
                        management with Virtu Tech Solutions.
                    </p>
                </div>
                <img
                    src="/assets/images/industries/construction.svg"
                    alt="Construction-Img"
                    className="h-[35rem] w-[35rem] rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default Construction;
