import { useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from '../utils/Button';

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
                        <div className="lexend-normal flex-shrink-0">
                            <button onClick={handleScrollToFeatured}>
                                <Button />
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
