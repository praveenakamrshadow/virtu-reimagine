import { useEffect } from 'react';
import Footer from './Footer';
import Navbar from './NavBar';

const AgencySupport = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <div>
                <Navbar />
                <div className="relative w-full h-[20rem]">
                    <img
                        src="/public/assets/images/agency-support-banner.png"
                        className="w-full h-full top-0 object-cover absolute"
                        alt="agency-support-Banner"
                    />
                    <div className="absolute inset-0 bg-black opacity-75"></div>
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center px-4 lexend-bold">
                        AGENCY SUPPORT
                    </h1>
                </div>
                <div className="text-white dark:text-gray-800  mb-16 mt-16 ml-8 p-4 flex text-start gap-x-8 justify-center">
                    <div className="w-1/2 gap-2 px-6">
                        <div>
                            <p>
                                Virtu Tech Solutions, We are experts in Native
                                Mobile Application Development, Product
                                development & Web Application Development
                                Services. What makes us unique is our capability
                                to exclusively work with Tech companies, Media
                                Companies, and Marketing & Advertising Agencies.
                                We strongly believe that you will be impressed
                                with our work and offerings.
                            </p>
                            <br />{' '}
                            <p>
                                {' '}
                                Virtu Tech Solutions follows a Step-wise
                                approach in the development process. From
                                gathering initial information to the development
                                & deployment of your Project, and lastly to
                                maintenance. we provide comprehensive design,
                                development, and support services.
                            </p>{' '}
                            <br />{' '}
                            <p>
                                Analysis – In this phase, we define the major
                                project goals and schedule, find the target
                                audience and tailor the design solution to your
                                set of goals. We will analyze the website
                                requirements in detail and finalize the scope.
                                We prepare a strategic plan to deal with renewed
                                Information Architecture and obtain project plan
                                sign-off. Design – Using the information
                                gathered we build a plan for your project and
                                create a detailed wireframe. Keeping in mind all
                                the goals and priorities we will begin to design
                                graphic and layout samples. Paper wireframes and
                                click-through mockups are developed in this
                                phase.{' '}
                            </p>
                            <br />{' '}
                            <p>
                                Development – This is where your project is
                                created. We take all of the individual graphic
                                elements from the prototype and use them to
                                create the functional site. We also take your
                                content and distribute it throughout the site,
                                in the appropriate areas.
                            </p>{' '}
                            <br />
                            <p>
                                {' '}
                                QA and UAT – At this point, we attend to the
                                final details and test your web site. We test
                                things such as the complete functionality of
                                forms or other scripts, we test for last minute
                                compatibility issues (viewing differences in
                                different web browsers), ensuring that the site
                                is optimized to be viewed properly in the most
                                recent browser versions.
                            </p>{' '}
                            <br />
                            <p>
                                {' '}
                                Launch – Once we receive your final approval, it
                                is time to deliver the site. Here we quickly
                                test again to make sure that all files have been
                                uploaded correctly, and that the site continues
                                to be fully functional. This marks the official
                                launch of your site, as it is now viewable to
                                the public.
                            </p>{' '}
                            <br />
                            <p>
                                {' '}
                                Maintenance and Support – After the Project is
                                deployed and fully functional, we provide
                                complete support to our clients, including
                                evaluation, on-site training for content and
                                site management, upgrades with the latest
                                technologies, and any required updates or
                                patches.
                            </p>
                        </div>
                    </div>
                    <img
                        src="/assets/images/agencySupport.svg"
                        alt="Agency-Support-Img"
                        className="h-[35rem] w-[35rem] rounded-md object-fit"
                    />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default AgencySupport;
