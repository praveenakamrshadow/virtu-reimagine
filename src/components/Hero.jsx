import { useEffect, useRef } from 'react';
import { TimelineMax } from 'gsap';
import { FaPlay } from 'react-icons/fa';
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

    useEffect(() => {
        const tl = new TimelineMax({ delay: 0.5 });

        tl.from(heroRef.current.children, {
            y: 50,
            opacity: 0,
            stagger: 0.3,
            duration: 1,
            ease: 'power3.out',
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="dark:bg-gray-900 text-white dark:text-white">
            <div className="flex">
                <div className="p-16 h-screen w-screen flex flex-col items-center justify-center">
                    <div ref={heroRef} className="relative w-full">
                        <h1 className="text-[2.8rem] lexend-bold text-center top-10 left-[0.8rem]">
                            Unlocking The Power Of SAP{' '}
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
                                Get Started
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
                <div className="flex justify-center items-center h-screen w-screen relative p-8">
                    <img src="/public/assets/images/AI-&-ML.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
