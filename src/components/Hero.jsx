import { useRef } from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
    const heroRef = useRef(null);
    const handleScrollToFeatured = () => {
        const featuredSection = document.getElementById('featured');
        if (featuredSection) {
            window.scrollTo({
                top: featuredSection.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="dark:bg-gray-900 text-white dark:text-white">
            <div className="flex">
                <div className="p-16 h-screen w-screen flex flex-col items-center justify-center">
                    <div ref={heroRef} className="w-full">
                        <h1 className="text-[2.8rem] lexend-bold text-center top-10 left-[0.8rem]">
                            Unlock The Power Of AI/ML{' '}
                            <span className="block text-3xl text-end">
                                With Expertise
                            </span>
                        </h1>
                    </div>
                    <p className="text-gray-400 inter-normal mt-16 p-3">
                        Virtu Tech Solutions is a global leader in IT, business
                        services, and software solutions. We specialize in
                        consulting, industry solutions, IT modernization, and
                        managed services. With a presence in over 60 countries,
                        we empower clients for success in the digital era.
                    </p>
                    <div className="flex w-full p-4 mt-10 gap-10">
                        <div className="lexend-normal flex justify-center  gap-8 items-center">
                            <button
                                onClick={handleScrollToFeatured}
                                className="w-44 lexend-bold ring-offset-background transition-colors delay-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-12 inline-flex items-center justify-center px-6 py-2 border-0 rounded-md text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Get Started
                                <FaArrowRight className="ml-2" />
                            </button>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="learn-more flex gap-3 items-center justify-center lexend-normal"
                        >
                            <FaPlay className="text-md" />
                            <span>How it Works</span>
                        </motion.button>
                    </div>
                </div>
                <div className="flex justify-center items-center h-screen w-screen  p-8">
                    <img
                        src="/assets/images/machineLearning.svg"
                        alt="image"
                        className="w-[80%]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
