import { useEffect, useRef } from 'react';
import { TimelineMax } from 'gsap';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    const heroRef = useRef(null);

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
                        <h1 className="text-[2.8rem] lexend-bold text-center  top-10 left-[0.8rem]">
                            Unlocking The Power Of SAP{' '}
                            <span className="block text-3xl text-end">
                                With Expertise
                            </span>
                        </h1>
                    </div>
                    <p className="text-gray-400 inter-normal mt-16 p-4">
                        Virtu Tech Solutions is a global leader in IT, business
                        services, and software solutions. We specialize in
                        consulting, industry solutions, IT modernization, and
                        managed services. With a presence in over 60 countries,
                        we empower clients for success in the digital era.
                    </p>
                    <div className="flex w-full p-4 mt-10 gap-10">
                        <div className="lexend-normal flex-shrink-0">
                            <Link
                                to="/featured"
                                className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden tracking-tight text-white bg-[#4A6CF7] rounded-lg group"
                            >
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                <span className="relative">Get Started</span>
                            </Link>
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
                    <img
                        src="../assets/images/AI-&-ML.png"
                        alt="SAP-img"
                        style={{
                            height: '560px',
                            width: '520px',
                            objectFit: 'cover',
                        }}
                        className="absolute left-32 top-12 w-3/5 h-full object-cover "
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
