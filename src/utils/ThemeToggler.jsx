import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggler = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'false';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const buttonVariants = {
        initial: { scale: 1 },
        animate: { scale: 1.2 },
    };

    const Icon = darkMode ? FiMoon : FiSun;

    useEffect(() => {
        const body = document.querySelector('body');
        if (darkMode) {
            body.style.setProperty('--sb-track-color', '#FFFFFF');
            body.style.setProperty('--sb-thumb-color', '#808080');
        } else {
            body.style.setProperty('--sb-track-color', '#232e33');
            body.style.setProperty('--sb-thumb-color', '#4a6cf7');
        }
    }, [darkMode]);

    return (
        <motion.button
            onClick={toggleDarkMode}
            initial="initial"
            animate="animate"
            variants={buttonVariants}
            style={{
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                transition: 'background-color 0.1s',
            }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={darkMode ? 'moon' : 'sun'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Icon
                        style={{
                            width: '1.5rem',
                            height: '1.5rem',
                            transition: 'transform 0.2s',
                            color: darkMode ? '#1F2937' : '#FFFFFF',
                        }}
                    />
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
};

export default ThemeToggler;
