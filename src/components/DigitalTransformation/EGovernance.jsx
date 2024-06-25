import { useEffect } from 'react';
import Footer from '../Footer';
import Navbar from '../NavBar';

const EGovernance = () => {
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
                <h1 className="absolute top-40 left-[30.5rem] text-white text-4xl">
                    E-GOVERNANCE / SMART GOVERNANCE
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        The initiatives of E-Government and Smart-Government,
                        have great impact in reducing administration headaches,
                        increasing productivity and providing around-the-clock
                        information to citizens and enterprises.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        We have seen Many transformations on the public sector
                        since few years:
                    </p>
                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-800 mt-5 space-y-4">
                        <li>
                            The provided services are becoming transactional and
                            not only informational.
                        </li>
                        <li>
                            Solutions are been deployed into smartphones giving
                            birth to Smart-Government; a trend named after the
                            use of smart mobile phones.
                        </li>
                        <li>
                            Content contextualization have been widely adopted.
                        </li>
                        <li>
                            Many Processes are being ported into the web and
                            mobile channels.
                        </li>
                        <li>
                            Thanks to web / mobile enabling processes , public
                            administrators started implementing and monitoring
                            key performance indicators (KPI) for services
                            offered by public administrators.
                        </li>
                        <li>
                            E-Government & Smart-Government may result in
                            changes on the organization of the public
                            administrators by replacing many citizen-facing
                            tasks into back-office BPO tasks.
                        </li>
                        <li>
                            Dematerialization & going paperless have adopted of
                            E-Government initiatives.
                        </li>
                        <li>
                            Open-Source as well as proprietary software
                            solutions have emerged to enable these
                            transformation.
                        </li>
                        <li>
                            Increased and cheaper connectivity between public
                            information systems helped build G2G(Government to
                            Government ) services.
                        </li>
                    </ul>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        All these trends made out the public sector a very
                        dynamic IT sector in many regions and growth is expected
                        to continue in the coming years.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Our Value Proposition
                    </h1>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        We have deployed several capabilities for public sectors
                        such as:
                    </p>
                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-800 mb-5 mt-5 space-y-4">
                        <li>
                            Our expertise in building Smart Government
                            solutions.
                        </li>
                        <li>
                            Experience in building Java / Jee , .NET, SharePoint
                            Web Portals.
                        </li>
                        <li>Location Based solutions.</li>
                        <li>Responsive & HTML5 development skills.</li>
                        <li>Business Process Management.</li>
                        <li>
                            E-Government & Smart-Government may result in
                            changes on the organization of the public
                            administrators by replacing many citizen-facing
                            tasks into back-office BPO tasks.
                        </li>
                        <li>Dematerialization.</li>
                    </ul>
                </div>
                <img
                    src="https://img.freepik.com/free-vector/open-banking-data-access-financial-services-mobile-payment-app-development-api-technology-web-developers-designing-banking-platforms_335657-2401.jpg?t=st=1719302396~exp=1719305996~hmac=d89b440f8314c5cf0e26c036d2db82fee469df6546f9e5d8e98abf15ae1d117f&w=740"
                    alt=""
                    className="h-[35rem] w-[35rem] mb-5 mt-5 rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default EGovernance;
