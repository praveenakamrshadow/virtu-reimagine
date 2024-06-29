import { useEffect } from 'react';
import Footer from '../../../Footer';
import Navbar from '../../../NavBar';

const DataAnalytics = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <Navbar />
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
                <img
                    src="/assets/images/digitalTransformation/data-analytics-banner.jpg"
                    className="w-full h-full top-0 object-cover absolute"
                    alt="data-analytics-banner"
                />
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl">
                    DATA ANALYTICS
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row mt-10 px-4 sm:px-8 md:px-16 lg:px-32 gap-10">
                <div className="lg:w-2/3">
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        At Virtu Tech Solutions, we are dedicated to
                        transforming raw data into valuable insights through the
                        use of data analytics and visualization. Our team of
                        data experts and visualization specialists collaborates
                        to help businesses make data-driven decisions, uncover
                        trends, and communicate complex information in an
                        effective manner.
                    </p>
                    <h2 className="text-white text-xl font-bold mt-5 dark:text-black">
                        Our Data Analytics and Visualization Services:
                    </h2>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        At Virtu Tech Solutions, we are dedicated to
                        transforming raw data into valuable insights through the
                        use of data analytics and visualization. Our team of
                        data experts and visualization specialists collaborates
                        to help businesses make data-driven decisions, uncover
                        trends, and communicate complex information in an
                        effective manner.
                    </p>
                    <h2 className="text-white text-xl font-bold mt-5 dark:text-black">
                        Data Analysis:
                    </h2>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our skilled data analysts delve deep into your data
                        using advanced statistical methods and machine learning
                        algorithms to extract meaningful insights and patterns.
                        We provide you with a comprehensive analysis of your
                        data, empowering you to make informed business
                        decisions.
                    </p>
                    {/* ... (other sections follow the same pattern) ... */}
                    <h2 className="text-white text-xl font-bold mt-5 dark:text-black">
                        Training and Support:
                    </h2>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        We offer training programs and ongoing support to
                        empower your team with data analytics and visualization
                        skills. Our training sessions cover a range of topics,
                        including data analysis techniques, visualization best
                        practices, and data storytelling. We also provide
                        support and guidance as you implement data-driven
                        strategies within your organization.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        At Virtu Tech Solutions, we aim to help you uncover the
                        value hidden within your data. Our goal is to equip you
                        with the confidence and tools to make informed
                        decisions, solve complex problems, and drive business
                        growth using data analytics and visualization. Contact
                        us today to learn more about our data analytics and
                        visualization services and let us be your trusted
                        partner in transforming your data into actionable
                        insights that fuel your success.
                    </p>
                </div>
                <div className=" flex justify-center lg:justify-end">
                    <img
                        src="/assets/images/digitalTransformation/dataAnaytics.svg"
                        alt="DataAnalytics-Img"
                        className="h-auto w-full max-w-[35rem] lg:h-[35rem] lg:w-[35rem] object-contain"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DataAnalytics;
