import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggler = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode.toString());
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
                            color: darkMode ? '#000000' : '#fff',
                        }}
                    />
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
};

export default ThemeToggler;
