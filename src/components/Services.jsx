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
            filter: 'blur(0.5px)',
        },
    };

    return (
        <div className="h-full dark:bg-[#FEFAF6] w-full bg-[#111722] text-white flex flex-col items-center p-[2%]">
            <h1 className="text-3xl dark:text-black font-bold lexend-bold tracking-tight text-white sm:text-4xl mt-2 mb-2">
                SERVICES WE OFFER
            </h1>
            <div className="flex flex-wrap justify-center gap-x-10">
                <motion.div className="w-[35rem] h-[18rem]  cursor-pointer mt-10 rounded-md overflow-hidden relative group">
                    <motion.img
                        src="/assets/images/mobile-solutions.jpeg"
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
                    <motion.h1 className="text-3xl z-10 absolute left-[8.5rem] top-[12.5rem] transform -translate-x-1/2 -translate-y-1/2 lexend-bold text-white">
                        Mobile Solutions
                    </motion.h1>
                    <motion.p className="text-gray-400 group-hover:text-white transition-all delay-50 mt-2 text-sm z-10 absolute left-[12.2rem] top-[15rem] transform -translate-x-1/2 -translate-y-1/2 inter-normal">
                        Realize a truly “connected” enterprise with access to
                        business data anywhere, anyplace and anytime.
                    </motion.p>
                </motion.div>

                {/* Second Card */}
                <motion.div className="w-[35rem] h-[18rem]  cursor-pointer mt-10 rounded-md overflow-hidden relative group">
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
                    <motion.h1 className="text-3xl z-10 absolute left-[4.8rem] top-[12.5rem] transform -translate-x-1/2 -translate-y-1/2 lexend-bold text-white">
                        ERP SAP
                    </motion.h1>
                    <motion.p className="text-gray-400 group-hover:text-white mt-5 text-sm z-10 absolute left-[12.2rem] top-[14.5rem] transform -translate-x-1/2 -translate-y-1/2 inter-normal">
                        Helps businesses streamline and optimize their processes
                        across various functional areas to enhance efficiency
                        and drive growth.
                    </motion.p>
                </motion.div>

                {/* Third Card */}
                <motion.div className="w-[35rem] h-[18rem] cursor-pointer mt-8 rounded-md overflow-hidden relative group">
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
                    <motion.h1 className="text-3xl z-10 absolute left-[10.3rem] top-[12.5rem] transform -translate-x-1/2 -translate-y-1/2 lexend-bold text-white">
                        CLOUD SOLUTIONS
                    </motion.h1>
                    <motion.p className="text-gray-400 group-hover:text-white mt-3 text-sm z-10 absolute left-[12.3rem] top-[14.5rem] transform -translate-x-1/2 -translate-y-1/2 inter-normal">
                        Maximize the potential of the cloud for your business
                        using our vast experience and expertise.
                    </motion.p>
                </motion.div>

                {/* Fourth Card */}
                <motion.div className="w-[35rem] h-[18rem] mt-8  cursor-pointer rounded-md overflow-hidden relative group">
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
                    <motion.h1 className="text-3xl z-10 absolute left-[12.3rem] top-[12.5rem] transform -translate-x-1/2 -translate-y-1/2 lexend-bold text-white">
                        DATA ANALYTICS & BUSINESS SOLUTIONS
                    </motion.h1>
                    <motion.p className="text-gray-400 group-hover:text-white mt-7 text-sm z-10 absolute left-[12.3rem] top-[14.5rem] transform -translate-x-1/2 -translate-y-1/2 inter-normal">
                        Leverage cutting-edge technology and business
                        intelligence platforms for deeper operational insights.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
