import { useState } from 'react';

const ThemeToggler = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <button
            className={`fixed top-4 right-4 p-2 rounded-full ${
                darkMode ? 'bg-gray-900' : 'bg-gray-200'
            } text-white`}
            onClick={toggleTheme}
        >
            {darkMode ? 'Light' : 'Dark'} Mode
        </button>
    );
};

export default ThemeToggler;
