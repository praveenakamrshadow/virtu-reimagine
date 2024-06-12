import { useEffect, useState } from 'react';
import './BackToTop.css';

const BackToTopButton = () => {
    const [showsScrollBtn, setShowScrollBtn] = useState(false);

    useEffect(() => {
        const handleButtonVisibility = () => {
            window.pageYOffset > 300
                ? setShowScrollBtn(true)
                : setShowScrollBtn(false);
        };

        window.addEventListener('scroll', handleButtonVisibility);
        return () => {
            window.removeEventListener('scroll', handleButtonVisibility);
        };
    }, []);

    return (
        showsScrollBtn && (
            <div
                id="scrollToTop"
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                }}
                style={{
                    position: 'fixed',
                    bottom: '60px',
                    right: '60px',
                    color: 'gray',
                    textAlign: 'center',
                    cursor: 'pointer',
                    fontSize: '4em',
                    lineHeight: 0,
                    textDecoration: 'none',
                }}
            >
                Click To Move Top
            </div>
        )
    );
};

export default BackToTopButton;
