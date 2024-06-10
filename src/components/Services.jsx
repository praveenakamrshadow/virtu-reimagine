import { motion } from 'framer-motion';

const Services = () => {
    return (
        <>
            <div className="h-screen w-screen place-items-center grid grid-cols-2">
                <motion.div
                    className="w-[75%] h-[75%] rounded-md bg-red-600"
                    whileHover={{
                        scale: 1.1,
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <img
                        src="https://saigontechnology.com/assets/media/Blog/typical-process-for-a-successful-mobile-development.jpeg"
                        alt="mobility-solutions"
                        className="w-full h-full object-cover rounded-md"
                    />
                </motion.div>
                <motion.div
                    className="w-[75%] h-[75%] rounded-md bg-blue-600"
                    whileHover={{
                        scale: 1.1,
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <img
                        src="/path/to/your/second/image.jpg"
                        alt="Second card image"
                        className="w-full h-full object-cover rounded-md"
                    />
                </motion.div>
                <motion.div
                    className="w-[75%] h-[75%] rounded-md bg-green-600"
                    whileHover={{
                        scale: 1.1,
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <img
                        src="/path/to/your/third/image.jpg"
                        alt="Third card image"
                        className="w-full h-full object-cover rounded-md"
                    />
                </motion.div>
                <motion.div
                    className="w-[75%] h-[75%] rounded-md bg-yellow-600"
                    whileHover={{
                        scale: 1.1,
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <img
                        src="/path/to/your/fourth/image.jpg"
                        alt="Fourth card image"
                        className="w-full h-full object-cover rounded-md"
                    />
                </motion.div>
            </div>
        </>
    );
};

export default Services;
