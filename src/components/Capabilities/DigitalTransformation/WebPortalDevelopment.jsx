import { useEffect } from 'react';
import Footer from '../../Footer';
import Navbar from '../../NavBar';

const WebPortalDevelopment = () => {
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
                <h1 className="absolute top-40 left-[33rem] text-white text-4xl uppercase">
                    WEB / PORTAL DEVELOPMENT
                </h1>
            </div>

            <div className="flex items-center justify-center mt-10 px-32 gap-10">
                <div>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        We at Virtu Tech Solutions. offer end to end Portal
                        development & Web development solutions with a large
                        experience which helps us in building interactive and
                        web portals for our clients. Portal development includes
                        an operation of knowledge and expertise at all levels,
                        to make sure best results every time. Virtu Tech
                        Solutions. innovative and cost–effective website portals
                        are expertly designed and developed to maintain an
                        unique brand identity of our clients with maximum
                        visibility for your company.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our web portal Development services includes setting up
                        job portals, travel industry portals, B2C portal,
                        auction/bidding portals, E-Commerce / online shopping
                        portals, matrimonial portals, real estate portals, B2B
                        portal, social networking sites and a lot more. Our
                        specialty is creating best customized user friendly
                        website portals for you which are easy the visitors to
                        navigate through.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        As a Web Portal Development company know that time is
                        valuable, and portal accessibility is very precious
                        therefore our website portal projects, as along with all
                        our other projects are completed and delivered best time
                        so that our customers don't have to keep waiting while
                        someone else takes up their place online.
                    </p>
                </div>
                <img
                    src="/assets/images/digitalTransformation/webPortal.svg"
                    alt="WebDev-Img"
                    className="h-[35rem] w-[35rem] rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default WebPortalDevelopment;
