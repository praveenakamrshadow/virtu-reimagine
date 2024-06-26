import { useEffect } from 'react';
import Footer from '../../Footer';
import Navbar from '../../NavBar';

const DigitalMarketing = () => {
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
                <h1 className="absolute top-40 left-[39rem] text-white text-4xl uppercase">
                    DIGITAL MARKETING
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        In today's competitive digital landscape, having a
                        strong online presence is crucial for the success of
                        your business. At Virtu Tech Solutions, we understand
                        the importance of digital marketing in driving website
                        traffic, increasing conversions, and ultimately boosting
                        sales. We offer a wide range of comprehensive digital
                        marketing services designed to help your online business
                        thrive.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Putting Your Business at the Forefront:
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Many businesses make the mistake of neglecting their web
                        marketing efforts after launching their website.
                        However, this can lead to frustration when the website
                        fails to achieve the desired results. Just like any
                        other business, your online business needs to be
                        marketed effectively to search engines, gain higher
                        rankings, attract increased traffic, and generate more
                        sales. Our digital marketing strategies focus on
                        promoting your business through search engine
                        optimization (SEO), online advertising, and social media
                        optimization (SMO).
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Search Engine Optimization (SEO):
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Search engine optimization is a fundamental aspect of
                        digital marketing. Our experienced team of SEO experts
                        will optimize your website to improve its visibility on
                        search engine results pages (SERPs). Through
                        comprehensive keyword research, on-page optimization,
                        quality link building, and content creation, we ensure
                        that your website ranks high for relevant search
                        queries. This increased visibility will drive targeted
                        organic traffic to your site, leading to higher
                        conversions.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Pay-Per-Click (PPC) Advertising:
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        As a certified Google AdWords partner, we provide
                        effective PPC advertising campaigns that drive immediate
                        results. Our experts will develop customized PPC
                        strategies to target your specific audience, maximize
                        your advertising budget, and increase your return on
                        investment (ROI). By carefully selecting keywords,
                        crafting compelling ad copy, and optimizing landing
                        pages, we ensure that your PPC campaigns generate
                        quality leads and conversions.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Social Media Optimization (SMO):
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        In today's digital age, social media plays a significant
                        role in creating brand awareness, engaging with
                        customers, and driving website traffic. Our SMO services
                        utilize the power of social media platforms to enhance
                        your online presence. From creating engaging social
                        media profiles to developing and executing targeted
                        social media campaigns, we help you connect with your
                        target audience and build brand loyalty.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Conversion Rate Optimization (CRO):
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Driving traffic to your website is just the first step.
                        We understand that a high conversion rate is essential
                        for the success of your online business. Our digital
                        marketing experts will conduct in-depth analysis to
                        identify potential barriers to conversion and develop
                        strategies to optimize your website's conversion rate.
                        By implementing proven CRO techniques, such as A/B
                        testing, user experience optimization, and persuasive
                        copywriting, we aim to boost your conversion rates and
                        maximize your revenue.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Partnering with Experienced Online Marketing
                        Consultants:
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        If you are looking for expert guidance and a sound
                        return on your investment, our team of online marketing
                        consultants is here to help. With our in-depth
                        knowledge, industry insights, and years of experience,
                        we will work closely with you to understand your
                        business goals, develop tailored digital marketing
                        strategies, and ensure that your online marketing
                        efforts yield tangible results.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Don't miss out on the opportunities that digital
                        marketing presents for your online business. Contact us
                        today to explore how our comprehensive digital marketing
                        services, including SEO, PPC, Google AdWords, SMO, and
                        more can drive your business growth, increase
                        conversions, and maximize your online success.
                    </p>
                </div>
                <img
                    src="/assets/images/digitalTransformation/digitalMarketing.svg"
                    alt="DigitalMarketing-Img"
                    className="h-[35rem] w-[35rem] rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default DigitalMarketing;
