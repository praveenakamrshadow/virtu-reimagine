import Card from '../utils/Card';
import { motion } from 'framer-motion';

const Featured = () => {
    return (
        <div
            id="featured"
            className="flex flex-col items-center h-[123vh] w-full bg-[#111722]"
        >
            <h1 className="mt-10 lexend-normal text-xl text-center text-white">
                INTERNATIONAL IT GROUP AT THE CROSSROAD OF MOBILE, WEB AND
                INFORMATION SYSTEMS CONVERGENCE
            </h1>
            <p className="inter-normal mt-5 text-center w-[60%] text-gray-400">
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
            </p>
            <motion.div className="cards mt-12">
                <Card />
            </motion.div>
        </div>
    );
};

export default Featured;
