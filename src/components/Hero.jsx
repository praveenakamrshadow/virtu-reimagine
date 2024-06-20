import { useRef, useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const heroRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            id: 'ai',
            heading: 'Revolutionize Your Business With AI/ML',
            subheading: 'Explore The Possibilities',
        },
        {
            id: 'sap',
            heading: 'Leverage SAP ERP services for success',
            subheading: 'With Our Expertise',
        },
        {
            id: 'digital',
            heading: 'Unlock Power of Digital Transformation',
            subheading: 'with Digital Solutions',
        },
    ];

    const images = [
        '/assets/images/machineLearning.svg',
        '/assets/images/SAP-Image.png',
        '/assets/images/digitalTransformation.svg',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const handleScrollToFeatured = () => {
        const featuredSection = document.getElementById('featured');
        if (featuredSection) {
            window.scrollTo({
                top: featuredSection.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const headingVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeInOut',
            },
        },
    };

    const subheadingVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                delay: 0.4,
                ease: 'easeInOut',
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <div className="dark:bg-gray-900 text-white dark:text-white overflow-x-hidden">
            <div className="flex">
                <div className="p-16 h-screen w-screen flex flex-col items-center justify-center">
                    <div ref={heroRef} className="w-full">
                        <div className="h-[150px] flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={slides[currentSlide].id}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={headingVariants}
                                >
                                    <h1 className="text-[2rem] lexend-bold text-start">
                                        {slides[currentSlide].heading}
                                        <motion.span
                                            className="block text-3xl text-end"
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={subheadingVariants}
                                        >
                                            {slides[currentSlide].subheading}
                                        </motion.span>
                                    </h1>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <p className="text-gray-400 inter-normal mt-16 p-3">
                        Virtu Tech Solutions is a global leader in IT, business
                        services, and software solutions. We specialize in
                        consulting, industry solutions, IT modernization, and
                        managed services. With a presence in over 60 countries,
                        we empower clients for success in the digital era.
                    </p>

                    <div className="flex w-full p-4 mt-10 gap-10">
                        <div className="lexend-normal flex justify-center gap-8 items-center">
                            <button
                                onClick={handleScrollToFeatured}
                                className="w-44 lexend-bold ring-offset-background transition-colors delay-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-12 inline-flex items-center justify-center px-6 py-2 border-0 rounded-md text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Get Started
                                <FaArrowRight className="ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center h-screen w-screen p-8">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={images[currentSlide]}
                            src={images[currentSlide]}
                            alt="image"
                            className="w-[80%]"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={imageVariants}
                        />
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Hero;
