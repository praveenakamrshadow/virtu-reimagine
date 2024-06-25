import { useEffect } from 'react';
import Footer from '../../Footer';
import Navbar from '../../NavBar';

const Pharmaceuticals = () => {
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
                <h1 className="absolute top-40 left-[40rem] text-white text-4xl">
                    PHARMACEUTICALS
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        At Virtu Tech Solutions, we offer a pre-packaged and
                        comprehensive solution specifically designed to cater to
                        the needs of the pharmaceutical industry. Our
                        pharmaceutical ERP software covers all essential
                        business processes effectively, providing a holistic
                        solution for producing safe and cost-effective drugs.
                        With our solution, you can automate, integrate, and
                        streamline your complete supply chain operations.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Real-time Information and Industry Insights
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our pharmaceutical ERP software provides real-time
                        information and a holistic view of the industry,
                        empowering you to make informed decisions proactively.
                        In today’s competitive marketplace, staying ahead
                        requires having the right data at your fingertips. Our
                        solution offers real-time insights that support your
                        business strategy and help you succeed in the
                        pharmaceutical industry.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Specialized Features for the Pharmaceutical Industry
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our pharmaceutical ERP software handles all the special
                        manufacturing, distribution, and accounting needs
                        specific to the pharmaceutical industry. Here are some
                        key features of our solution:
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Optimizing Cash Flow
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        We understand the importance of optimizing cash flow in
                        the pharmaceutical industry. Our solution offers a
                        ‘What-if’ cost analysis feature that takes into account
                        factors such as labor, losses, overheads, and more. By
                        analyzing different scenarios, you can make informed
                        decisions that maximize profitability and control costs
                        effectively.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Bi-directional Traceability
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Ensuring end-to-end traceability is vital in the
                        pharmaceutical industry. Our solution provides in-depth
                        bi-directional traceability, enabling you to track
                        products from raw materials to finished goods and vice
                        versa. This traceability facilitates efficient audits
                        and lot recall, ensuring compliance and customer safety.
                    </p>
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
                    src="https://img.freepik.com/free-vector/biotechnology-isometric-composition-with-computer-screens-dna-pills-syringe-silhouette-human-body-projection-vector-illustration_1284-83231.jpg?t=st=1719297297~exp=1719300897~hmac=63a3a11fd003e3829d9d251925011ce579adfea3e8a7c86df13088d5edfa8b60&w=740"
                    alt=""
                    className="h-[35rem] w-[35rem] rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default Pharmaceuticals;
