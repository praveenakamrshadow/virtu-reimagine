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
                Data Goes Here
                <Footer />
            </div>
        </div>
    );
};

export default AboutUs;
