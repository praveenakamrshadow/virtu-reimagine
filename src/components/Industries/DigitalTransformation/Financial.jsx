import { useEffect } from 'react';
import Footer from '../../Footer';
import Navbar from '../../NavBar';

const Financial = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <Navbar />
            <div className="relative w-full h-[20rem]">
                <img
                    src="/assets/images/industries/financial-banner.jpg"
                    className="w-full h-full top-0 object-cover absolute"
                    alt="financial-banner"
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl lexend-bold">
                    FINANCIAL
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        The emergence of banking has been dated back to 2000 BC
                        in ancient Babylonia. One would expect the industry,
                        which is probably as old as civilization, to have a
                        stable and fully understood business model. Nothing can
                        be further from the truth.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        The banks of today have to re-invent themselves every
                        decade to maintain their competitive edge. Digital
                        technology has revolutionized the banking landscape and
                        has opened up several new modes of doing business. At
                        the same time, banks have to embrace an environment of
                        increased volatility and comply with significant
                        regulatory oversight.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Virtu Tech Solutions PVT LTD. deep insights in banking
                        and finance can help you translate emerging imperatives
                        to competitive advantage. Our strong team of domain and
                        technology experts can help you wade through the hype
                        and implement concrete solutions that provide enormous
                        business value.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Virtu Tech Solutions PVT LTD. have a wide range of
                        experience and knowledge in the Financial Services
                        industry. Our industry specific planners and account
                        handlers will work closely with you to define your
                        mobile strategy across your target audiences, defining
                        the structure of your app and the platforms it will work
                        on.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our developers will then use their knowledge of
                        financial API’s and data compression to make sure your
                        apps work accurately, quickly and elegantly.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        The financial apps can be included
                    </h1>
                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-800 mb-5 mt-5 space-y-4">
                        <li>Investment Portfolio</li>
                        <li>Market Idea</li>
                        <li>Stock Finders</li>
                        <li>Research</li>
                        <li>Banking</li>
                        <li>Newsletters</li>
                        <li>Stock Finders</li>
                        <li>Dashboards</li>
                        <li>Calculators</li>
                        <li>Spread Betting</li>
                        <li>News</li>
                    </ul>
                </div>
                <img
                    src="/assets/images/industries/financial.svg"
                    alt="Financial-Img"
                    className="h-[35rem] w-[35rem] mt-5 rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default Financial;
