import Navbar from '../NavBar';
import Footer from '../Footer';
import { useEffect } from 'react';

const ArtificialIntelligence = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <Navbar />
            <div className="relative w-full h-[20rem] sm:h-[15rem]">
                <img
                    src="/public/assets/images/servicesTWO/artificial-intelligence-banner.jpg"
                    className="w-full h-full top-0 object-cover absolute"
                    alt="artificial-intelligence-Banner"
                />
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center px-4 lexend-bold">
                    ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row mt-10 px-4 sm:px-10 md:px-16 lg:px-32 gap-10">
                <div className="lg:w-2/3">
                    <p className="text-gray-500 dark:text-gray-800 mb-5">
                        At Virtu Tech, we empower our customers to drive digital
                        transformation in their organizations with
                        state-of-the-art technologies such as Machine Learning,
                        Artificial Intelligence, and big data analytics. Our
                        team builds scalable and extensible AI and ML
                        architectures that accommodate modern cloud stacks. We
                        leverage a research-based approach to develop new
                        algorithms that combine automatic learning models with
                        handcrafted customized algorithms. Our methodologies and
                        domain expertise have been proven to drive successful
                        outcomes for our clients.
                    </p>

                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our unique cognitive automation capabilities harness the
                        power of optimized pattern matching and advanced machine
                        learning techniques to offer speed, accuracy, and
                        cost-effectiveness that surpasses what the human
                        workforce can provide. Our Data Extractor solution
                        automates workflows that are manual-driven and
                        document-based with high accuracy, scale, and greater
                        efficiency.
                    </p>

                    <p className="text-gray-500 dark:text-gray-800 mb-5">
                        At Virtu, we have helped customers in various industries
                        to incorporate AI – Machine Learning, AI – Robotic
                        Process Automation, and AI – Natural Language
                        Processing. Our Intelligent Bots are highly valued and
                        have been deployed successfully in the Lifesciences,
                        Healthcare, and Travel industries. Our solutions
                        connect, collect, and analyze data from across
                        enterprise systems, people, and teams, offering valuable
                        insights to leaders for business clarity. Our
                        Intelligent Bots powered by AI have deep learning
                        capabilities that help them handle and learn from
                        conversations, as well as data marts, making them
                        adaptable to any situation.
                    </p>

                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our team has successfully delivered various intelligent
                        Bots using various platforms such as Automation
                        Anywhere, UI Path, SAP Intelligent RPA, or Blueprism.
                        Our cloud-enabled custom framework based on
                        Microsoft/Java platforms is portable and can integrate
                        seamlessly with any messaging platform like WhatsApp,
                        Facebook messenger, Web Chat, Google Suite, MS-Kaizala,
                        and Google Assistance Voice Bot.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Virtu’s Intelligent Bots offer unmatched efficiency,
                        precision, and automation, leading to reduction in costs
                        and human error. We have many success stories to share,
                        having developed and delivered BOTs for various
                        activities such as notification systems, patient
                        appointments, order processing and help desks.
                    </p>
                </div>
                <div className="flex justify-center lg:w-1/3">
                    <img
                        src="/public/assets/images/industries/AI.svg"
                        alt="AI-Img"
                        className="h-[15rem] w-[15rem] sm:h-[20rem] sm:w-[20rem] md:h-[25rem] md:w-[25rem] lg:h-[35rem] lg:w-[35rem]"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ArtificialIntelligence;
