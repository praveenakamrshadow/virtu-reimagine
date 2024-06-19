import '../utils/card.css';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const cardsData = [
    { end: 85, label: 'IT Enthusiast', suffix: '+' },
    { end: 110, label: 'Mobile Apps', suffix: '+' },
    { end: 3, label: 'International Presence', suffix: '+' },
    { end: 14, label: 'Years of Experience', suffix: '+' },
    {
        end: 540,
        labelTop: 'Portal/ECommerce',
        labelBottom: 'Websites',
        suffix: '+',
    },
    {
        end: 70,
        labelTop: 'Businesses in',
        labelBottom: 'America & Europe',
        suffix: '%',
    },
];

const CardComponent = () => {
    return (
        <div className="lexend-medium grid grid-cols-1 md:grid-cols-3 gap-12 ml-10 flex-wrap justify-center items-center">
            {cardsData.map((card, index) => (
                <motion.div
                    key={index}
                    className="outer"
                    whileHover={{ scale: 0.9 }}
                >
                    <div className="dot"></div>
                    <div className="card">
                        <div className="ray"></div>
                        <div className="text">
                            <CountUp
                                className="text"
                                end={card.end}
                                delay={2.5}
                            />
                            {card.suffix}
                        </div>
                        {card.label ? (
                            <div className="text-[90%]">{card.label}</div>
                        ) : (
                            <div className="text-[90%]">
                                <div>{card.labelTop}</div>
                                <div>{card.labelBottom}</div>
                            </div>
                        )}
                        <div className="line topl"></div>
                        <div className="line leftl"></div>
                        <div className="line bottoml"></div>
                        <div className="line rightl"></div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default CardComponent;
