import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AnimatePresence>
            {showButton && (
                <motion.button
                    onClick={scrollToTop}
                    id="myBtn"
                    title="Go to top"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    whileHover={{ scale: 1.1 }}
                    style={{
                        display: 'block',
                        position: 'fixed',
                        bottom: '20px',
                        right: '30px',
                        zIndex: 99,
                        border: 'none',
                        outline: 'none',
                        backgroundColor: '#4A6CF7',
                        color: 'white',
                        cursor: 'pointer',
                        padding: '15px',
                        borderRadius: '50%',
                        fontSize: '24px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <FaArrowUp />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
