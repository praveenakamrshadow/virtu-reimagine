import { useEffect } from 'react';
import Footer from '../../Footer';
import Navbar from '../../NavBar';

const DatabaseAdministration = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <Navbar />
            <div className="relative w-full h-[20rem]">
                <img
                    src="/assets/images/capabilities/database-administration-banner.jpg"
                    className="w-full h-full top-0 object-cover absolute"
                    alt="database-administration-banner"
                />
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl lexend-bold">
                    DATABASE ADMINISTRATION
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        Virtu Tech Solutions is a pioneer and leader in the
                        field of Data Infrastructure Management and is the only
                        company to provide complete support for all major
                        database platforms Oracle, UDB DB2, DB2 z/OS, Sybase,
                        SQL Server, MySQL using the ONguard IM process. Virtu
                        Tech Solutions is SAS 70 Type II compliant. The
                        company’s international Data Operations Center is
                        headquartered in Florida.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Remote DBA
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Get reliable, 24×7 database administration services
                        across all major database platforms without the expense
                        or headache associated with managing and staffing your
                        own data center. Virtu Tech Solutions is fully staffed
                        with highly skilled DBA teams that are ready to assist
                        you anytime, any day, weekend, or holiday.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Remote DBA Benefits
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        By layering dedicated DBAs on top of the CSA service,
                        large organizations are able to:
                    </p>
                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-800 mb-5 mt-5 space-y-4">
                        <li>
                            Reduce costs by standardizing and optimizing routine
                            administration tasks.
                        </li>
                        <li>
                            Have a robust data operation with enhanced expertise
                            and data performance
                        </li>
                    </ul>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Remote DBA Projects
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Whether you use our Database Operations services or just
                        need some one-time help with your data environment,
                        Virtu Tech Solutions offers comprehensive database
                        project services. Our focus on system DBA tasks provides
                        you with the expertise you need to get these tasks
                        completed on time and on budget. We’ll handle those
                        time-consuming infrastructure projects so that you can
                        manage and improve your business. Our most popular
                        services include:
                    </p>
                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-800 mb-5 mt-5 space-y-4">
                        <li>Database Upgrades</li>
                        <li>Oracle Upgrades</li>
                        <li>Database Patching</li>
                        <li>Database Installations</li>
                        <li>Data Analytics</li>
                        <li>Performance Analysis</li>
                        <li>Database Optimization</li>
                        <li>Remote DBA Application</li>
                    </ul>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        From small businesses to Fortune 1000 enterprises, Virtu
                        Tech Solutions has the database administration services
                        that meet your needs. We understand how mission-critical
                        data is across industries. We manage critical data
                        assets across the following industries
                    </p>
                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-800 mb-5 mt-5 space-y-4">
                        <li>Manufacturing</li>
                        <li>National Retail Chains</li>
                        <li>Global Financial Services</li>
                        <li>Healthcare Services</li>
                    </ul>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Support for Various Business Models
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our pharmaceutical ERP software fully supports various
                        business models prevalent in the industry, including
                        Contract Manufacturing, Loan Licensing, and Third-Party
                        Manufacturing. Additionally, our solution accommodates
                        the definition and production of soft-gels, capsules,
                        syrups, and other pharmaceutical forms.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Inventory Management and Regulatory Compliance
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Efficient inventory management and regulatory compliance
                        are critical for pharmaceutical companies. Our solution
                        segregates and tracks inventory, calculates service
                        charges, and supports multiple packaging options. It
                        also provides robust reporting capabilities for
                        non-conformance, Corrective and Preventive Actions
                        (CAPA), and adverse events, ensuring stringent
                        regulatory compliance.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Compliant Batch Processing
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our compliant batch processing feature consolidates
                        batch information and manages multi-staged production,
                        helping you control costs and overheads effectively. The
                        solution supports easy sampling plans, stability
                        testing, and the recording of batch monitoring
                        activities. It also facilitates the implementation of
                        Standard Operating Procedures (SOPs) to ensure
                        continuous and timely quality production, meeting cGMP
                        and other regulatory requirements.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Streamlined Sales and Procurement Strategy
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our pharmaceutical ERP software offers a streamlined
                        sales and procurement strategy. It includes features
                        such as opportunity management and sample tracking,
                        allowing you to monitor and analyze the cost at each
                        stage. Additionally, our supplier management module
                        ensures vendor certification maintenance and provides a
                        best vendor analysis based on factors like lead time,
                        quality, and price.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Benefit from Our Experience and Expertise
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        With over eight years of experience in developing
                        pharmaceutical industry-specific ERP software, Virtu
                        Tech Solutions adheres to industry best practices to
                        deliver exceptional systems that drive performance.
                        Contact us today to learn more about our solution and
                        how we can help your pharmaceutical business reduce
                        costs, enhance efficiency, and deliver a great user
                        experience.
                    </p>
                </div>
                <img
                    src="/assets/images/capabilities/database-administration.svg"
                    alt=""
                    className="h-[35rem] w-[35rem] rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default DatabaseAdministration;
