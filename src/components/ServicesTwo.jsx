import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function ServiceType() {
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set('.photo:not(:first-child)', { opacity: 0, scale: 0.5 });

            const animation = gsap.to('.photo:not(:first-child)', {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 1,
            });

            ScrollTrigger.create({
                trigger: '.gallery',
                start: 'top top',
                end: 'bottom bottom',
                pin: '.rightblock',
                animation: animation,
                scrub: true,
            });
        });
        return () => ctx.revert();
    }, []);
    return (
        <React.Fragment>
            <h1 className="text-3xl font-bold text-center lexend-bold tracking-tight text-white sm:text-4xl mt-10">
                DIVERSIFIED KNOW-HOW AND CUSTOMERS PROFILE
            </h1>
            <Box className="gallery lexend-bold" sx={{ display: 'flex' }}>
                <Box
                    className="left"
                    sx={{
                        width: '50%',
                        marginLeft: 'auto',
                        '& .details': {
                            height: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: '40vw',
                            marginLeft: 'auto',
                            color: '#fff',
                            fontSize: '3rem',
                        },
                    }}
                >
                    <Box className="details p-4">
                        <h1>ERP SAP Services</h1>
                        <p className="text-sm text-gray-500 mt-6 inter font-normal">
                            Build modern intelligent enterprises with expert SAP
                            consulting. Our experienced team offers end-to-end
                            SAP consultancy, supporting implementation and
                            upgrades for optimal financial and technical
                            optimization. With a strong reputation and extensive
                            experience in complex SAP implementations across
                            various industries, we provide best practices and
                            maximized return on investment.
                        </p>
                        <Link to={'/erp-sap'}>
                            <button className="w-44  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-md text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Learn More
                            </button>
                        </Link>
                    </Box>

                    <Box className="details p-4">
                        <h1>SAP Business One</h1>
                        <p className="text-sm text-gray-500 mt-6 inter font-normal">
                            Experience streamlined operations and enhanced
                            productivity with the SAP Business One Tool.
                            Designed specifically for software companies, this
                            comprehensive solution simplifies project
                            management, financial management, and customer
                            relationship management. From agile project tracking
                            to real-time collaboration and customizable
                            dashboards, our tool is tailored to meet your unique
                            needs and propel your business forward. Choose SAP
                            Business One Tool and streamline your software
                            company operations today.
                        </p>
                        <Link to={'/sap-business-one'}>
                            <button className="w-44  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-md text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Learn More
                            </button>
                        </Link>
                    </Box>

                    <Box className="details p-4">
                        <h1>
                            Artificial Intelligence & <br /> Machine Learning
                        </h1>
                        <p className="text-sm text-gray-500 mt-6 inter font-normal">
                            Drive digital transformation with our next-gen AI,
                            ML, and big data technologies. We build scalable
                            AI/ML architectures for cloud stacks and develop
                            custom algorithms through a research-based approach.
                            Our cognitive automation capabilities automate
                            workflows with high accuracy and efficiency. Virtu's
                            intelligent bots are deployed in industries like
                            healthcare and travel, leveraging AI, RPA, and NLP.
                            Our solutions connect, collect, and analyze
                            enterprise data, providing leaders with valuable
                            insights. We deliver intelligent bots using
                            platforms like Automation Anywhere and SAP
                            Intelligent RPA. Virtu has a proven track record in
                            developing bots for various activities, from
                            notifications to order processing.
                        </p>
                        <Link to={'/artificial-intelligence-machine-learning'}>
                            <button className="w-44  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-md text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Learn More
                            </button>
                        </Link>
                    </Box>

                    <Box className="details p-4">
                        <h1>Mobile Application Development</h1>
                        <p className="text-sm text-gray-500 mt-6 inter font-normal">
                            The prevalence of smartphones in our daily lives has
                            made them an essential tool. As a result, businesses
                            need to prioritize mobile optimization to tap into
                            the increasingly important mobile marketplace. At
                            Virtu Tech, we specialize in mobile app development,
                            catering to a range of platforms including iOS,
                            Android, and Windows, with offerings such as mobile
                            consulting, application security, and development
                            and maintenance. Our talented team takes a
                            comprehensive approach to ensure that we deliver
                            stunning results on time. We prioritize aesthetics
                            and functionality to reduce costs and improve
                            efficiency. Additionally, our experience of over 8
                            years and adherence to best practices help us
                            support your business strategy by developing systems
                            for increased performance. Don't miss out on the
                            opportunities that the mobile marketplace presents.
                            Get in touch with us today for all your mobile
                            development needs and experience our excellence
                            firsthand.
                        </p>
                        <Link to={'/mobile-development'}>
                            <button className="w-44  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-md text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Learn More
                            </button>
                        </Link>
                    </Box>

                    <Box className="details p-4">
                        <h1>
                            Quality Assurance & <br /> Test Automation
                        </h1>
                        <p className="text-sm text-gray-500 mt-6 inter font-normal">
                            Virtu Tech offers end-to-end software quality
                            assurance services that include requirements
                            management, installation script validation, testing
                            for user conditions, and bug tracking. Our
                            experienced QA team assesses software functionality,
                            load, stress, volume, regression, and performance
                            profiling using top tools like Test Director,
                            Quality Center, and Apache Jmeter. We offer Manual
                            Testing, Automation Testing, Performance Testing,
                            Mobile Testing, Dev Ops, and QA Platform
                            Administration Services that exceed industry
                            standards and optimize solutions for greater
                            efficiency, reliability, and cost-effectiveness.
                        </p>
                        <Link to={'/quality-assurance-test-automation'}>
                            <button className="w-44  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-md text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Learn More
                            </button>
                        </Link>
                    </Box>

                    <Box className="details p-4">
                        <h1>Product Development</h1>
                        <p className="text-sm text-gray-500 mt-6 inter font-normal">
                            Virtu Tech Solutions specializes in creating,
                            implementing, integrating, and maintaining custom
                            software applications to meet your specific business
                            needs. Our experienced team targets the precise
                            requirements of your business, producing features
                            that outperform generic software applications.
                            Whether you need Product Development, Migration,
                            Testing, or Maintenance, our Product Engineering
                            teams can work as extensions of your engineering
                            team or as independent units. We offer services in
                            Product Planning, Technology Planning, Development &
                            Testing, Maintenance and Support, and Product
                            Re-engineering. Our expertise includes Open Source
                            Tools & Frameworks, .NET Technologies, Java,
                            SharePoint, Python, Ruby on Rails, PHP, Web
                            Technologies, Agile Methodologies, and Continuous
                            Integration & Delivery. We are passionate about
                            writing good code that adds value to the end-user
                            experience and strive for simplicity, flexibility,
                            and excellence in our solutions.
                        </p>
                        <Link to={'/product-development'}>
                            <button className="w-44  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-md text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Learn More
                            </button>
                        </Link>
                    </Box>
                </Box>
                <Box
                    className="rightblock"
                    sx={{
                        width: '50%',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        className="mt-[6rem] ml-20"
                        sx={{
                            width: '35vw',
                            height: '35vw',
                            borderRadius: '10px',
                            position: 'relative',
                            overflow: 'hidden',
                            '& .photo': {
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                '& img': {
                                    height: '100%',
                                    width: '100%',
                                    borderRadius: '2px',
                                },
                            },
                        }}
                    >
                        <Box className="photo">
                            <img
                                className="object-fit"
                                src="https://duws858oznvmq.cloudfront.net/What_is_SAP_and_ERP_042feeda18.webp"
                                alt="SAP ERP"
                            />
                        </Box>
                        <Box className="photo">
                            <img
                                className="object-fit"
                                src="/public/assets/images/servicesTwo/SAP-Image.png"
                                alt="SAP-BusinessOne"
                            />
                        </Box>
                        <Box className="photo">
                            <img
                                className="object-fit"
                                src="/assets/images/servicesTwo/AI-Ml.png"
                                alt="AiMl"
                            />
                        </Box>
                        <Box className="photo">
                            <img
                                className="object-fit"
                                src="/public/assets/images/servicesTwo/MobileDev.png"
                                alt="mobilApplication"
                            />
                        </Box>
                        <Box className="photo">
                            <img
                                className="object-fit"
                                src="/public/assets/images/servicesTwo/Testing.png"
                                alt="QA & testAutomation"
                            />
                        </Box>
                        <Box className="photo">
                            <img
                                className="object-fit"
                                src="/public/assets/images/servicesTwo/Product-Development.png"
                                alt="productDevelopment"
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default ServiceType;
