import { motion } from 'framer-motion';

const Services = () => {
    const imageVariants = {
        hover: {
            filter: 'blur(0px)',
            transition: {
                duration: 0.1,
            },
        },
        initial: {
            filter: 'blur(0.2px)',
        },
    };

    return (
        <>
            <div className="h-screen w-screen bg-[#151515] text-white flex flex-wrap items-center justify-center gap-x-10 p-[2%]">
                <motion.h1>SERVICES WE OFFER</motion.h1>
                <motion.div className="w-[40%] h-[40%] cursor-pointer mt-10 rounded-md overflow-hidden relative group">
                    <motion.img
                        src="/public/assets/images/mobile-solutions.jpeg"
                        alt="First card image"
                        className="w-full h-full object-cover filter grayscale transition duration-200 group-hover:filter-none transform group-hover:scale-110"
                        variants={imageVariants}
                        initial="initial"
                        whileHover="hover"
                    />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
                        variants={imageVariants}
                        initial="initial"
                        whileHover="hover"
                    ></motion.div>
                    <motion.h1 className="text-3xl z-10 absolute left-[23%] top-[68%] transform -translate-x-1/2 -translate-y-1/2 lexend-bold text-white">
                        Mobile Solutions
                    </motion.h1>
                    <motion.p className="text-gray-400 group-hover:text-white transition-all delay-50 mt-2 text-sm z-10 absolute left-[35%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 inter-normal">
                        Realize a truly “connected” enterprise with access to
                        business data anywhere, anyplace and anytime.
                    </motion.p>
                </motion.div>

                {/* Second Card */}
                <motion.div className="w-[40%] h-[40%] cursor-pointer mt-10 rounded-md overflow-hidden relative group">
                    <motion.img
                        src="/assets/images/sap.jpg"
                        alt="Second card image"
                        className="w-full h-full object-cover filter grayscale transition duration-200 group-hover:filter-none transform group-hover:scale-110"
                        variants={imageVariants}
                        initial="initial"
                        whileHover="hover"
                    />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
                        variants={imageVariants}
                        initial="initial"
                        whileHover="hover"
                    ></motion.div>
                    <motion.h1 className="text-3xl z-10 absolute left-[13%] top-[70%] transform -translate-x-1/2 -translate-y-1/2 lexend-bold text-white">
                        ERP SAP
                    </motion.h1>
                    <motion.p className="text-gray-400 group-hover:text-white mt-5 text-sm z-10 absolute left-[35%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 inter-normal">
                        Helps businesses streamline and optimize their processes
                        across various functional areas to enhance efficiency
                        and drive growth.
                    </motion.p>
                </motion.div>

                {/* Third Card */}
                <motion.div className="w-[40%] h-[40%] cursor-pointer mb-10 rounded-md overflow-hidden relative group">
                    <motion.img
                        src="/assets/images/cloud-solutions.png"
                        alt="Third card image"
                        className="w-full h-full object-cover filter grayscale transition duration-200 group-hover:filter-none transform group-hover:scale-110"
                        variants={imageVariants}
                        initial="initial"
                        whileHover="hover"
                    />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
                        variants={imageVariants}
                        initial="initial"
                        whileHover="hover"
                    ></motion.div>
                    <motion.h1 className="text-3xl z-10 absolute left-[28%] top-[70%] transform -translate-x-1/2 -translate-y-1/2 lexend-bold text-white">
                        CLOUD SOLUTIONS
                    </motion.h1>
                    <motion.p className="text-gray-400 group-hover:text-white mt-3 text-sm z-10 absolute left-[35.2%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 inter-normal">
                        Maximize the potential of the cloud for your business
                        using our vast experience and expertise.
                    </motion.p>
                </motion.div>

                {/* Fourth Card */}
                <motion.div className="w-[40%] h-[40%] mb-10 cursor-pointer rounded-md overflow-hidden relative group">
                    <motion.img
                        src="/assets/images/data-analytics.png"
                        alt="Fourth card image"
                        className="w-full h-full object-cover filter grayscale transition duration-200 group-hover:filter-none transform group-hover:scale-110"
                        variants={imageVariants}
                        initial="initial"
                        whileHover="hover"
                    />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
                        variants={imageVariants}
                        initial="initial"
                        whileHover="hover"
                    ></motion.div>
                    <motion.h1 className="text-3xl z-10 absolute left-[35%] top-[70%] transform -translate-x-1/2 -translate-y-1/2 lexend-bold text-white">
                        DATA ANALYTICS & BUSINESS SOLUTIONS
                    </motion.h1>
                    <motion.p className="text-gray-400 group-hover:text-white mt-7 text-sm z-10 absolute left-[35%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 inter-normal">
                        Leverage cutting-edge technology and business
                        intelligence platforms for deeper operational insights.
                    </motion.p>
                </motion.div>
            </div>
        </>
    );
};

export default Services;
