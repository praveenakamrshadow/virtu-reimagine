import Navbar from '../NavBar';
import Footer from '../Footer';
import { useEffect } from 'react';

const MobileDevelopment = () => {
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
                <h1 className="absolute top-40 left-[32rem] text-white text-4xl">
                    MOBILE APPLICATION DEVELOPMENT
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <p className="text-gray-500 dark:text-gray-800">
                        Virtu boasts world-class capabilities in building
                        scalable, robust, integrated, and highly secure
                        distributed enterprise applications with high throughout
                        and low latency. Our best-in-class technology experts
                        have deep knowledge of the Java technology stack and
                        insights into the NoSQL landscape and emerging computing
                        platforms such as Spark. We leverage Agile and
                        Continuous Delivery practices to ensure on-time and
                        high-quality delivery.
                    </p>

                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our engineers have helped several Fortune 500 clients
                        build software on various platforms using the most
                        appropriate enterprise architectures and technologies
                        for application development. We have used Business
                        Process Management (BPM) products to build efficient
                        operational systems, robust distributed architectures,
                        global billing platforms, highly efficient algorithmic
                        trading software, and many others.
                    </p>

                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Scalable Architecture
                    </h1>
                    <p className="text-gray-500 mt-5 dark:text-gray-800">
                        Ensuring the scalability of applications, in the long
                        run, is a cornerstone of effective in-app development
                        and application architecture. We have designed systems
                        for multiple use cases and clients, using distributed
                        open platforms and cloud solutions. Our highly skilled
                        architects and engineers are adept at defining and
                        designing scalable systems.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Information Security Architecture
                    </h1>
                    <p className="text-gray-500 mt-5 dark:text-gray-800">
                        Security Architecture is an important aspect of
                        Enterprise Architecture and has become all the more
                        critical in the recent past. Our security consultants
                        understand the nuances of integrating security at
                        various levels in a global enterprise and are adept at
                        aligning security goals with the business. We have
                        helped major banks and telecom giants establish a
                        coherent, comprehensive, and strong security across
                        systems, divisions, and geographies.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Technology Strategy & Governance
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Virtu is a technology firm built by engineers who have
                        vast knowledge about application development. The vast
                        technical expertise of the firm helps our clients
                        establish strong technical strategies and Governance
                        Models for large programs. We understand technology as a
                        critical aspect of modern business and help our clients
                        align it with overall business strategies and goals. We
                        work with some of the biggest and most demanding
                        organizations globally to build integrated
                        comprehensive, front- to-back technology stacks and
                        governance mechanisms for long-term success.
                    </p>
                </div>
                <img
                    src="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169839.jpg?t=st=1719231198~exp=1719234798~hmac=8e8e66f2fcd84e21bbd27ce6405d2145c75dd46499ac56f74b770274e642efdc&w=996"
                    alt="MobileDev-Img"
                    className="h-[35rem] w-[35rem] rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default MobileDevelopment;
