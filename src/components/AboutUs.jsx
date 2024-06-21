import { useEffect } from 'react';
import Footer from './Footer';
import Navbar from './NavBar';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div>
                <Navbar />
                <div className="h-full w-full">hello</div>
                <Footer />
            </div>
        </div>
    );
};

export default AboutUs;
