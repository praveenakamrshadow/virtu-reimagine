import Card from '../utils/Card';
import { motion } from 'framer-motion';

const Featured = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5,
                ease: 'easeOut',
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 1,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            id="featured"
            className="flex flex-col dark:bg-[#FEFAF6] items-center h-[full] w-full bg-[#111722]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1
                className="mt-10 lexend-bold dark:lexend-bold dark:text-black text-xl text-center text-white"
                variants={textVariants}
            >
                INTERNATIONAL IT GROUP AT THE CROSSROAD OF MOBILE, WEB AND
                INFORMATION SYSTEMS CONVERGENCE
            </motion.h1>
            <motion.p
                className="inter-normal dark:text-gray-800 mt-7 text-center w-[60%] text-gray-400"
                variants={textVariants}
            >
                Virtu Tech Solutions is a trusted global innovator of IT,
                Business services, and Software solution provider. We help
                clients transform through consulting, industry solutions,
                business process services, IT modernization, and managed
                services. Virtu Tech Solutions enables clients, as well as
                society, to move confidently into the digital future. We are
                committed to our client’s long-term success and combine global
                reach with local client attention to serve them. We service our
                clients in more than 60 countries through various delivery
                models.
            </motion.p>
            <motion.div className="cards mt-12 mb-8" variants={textVariants}>
                <Card />
            </motion.div>
        </motion.div>
    );
};

export default Featured;
