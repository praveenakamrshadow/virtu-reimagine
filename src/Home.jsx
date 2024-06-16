import { Outlet } from 'react-router-dom';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Services from './components/Services';
import ServicesTwo from './components/ServicesTwo';
import Collaboration from './components/Collaboration';
import Marquee from './components/Marquee';
import Testimonial from './components/Testimonial';
import ClientsPortfolio from './components/ClientsPortfolio';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar />
            <Hero />
            <Featured />
            <Services />
            <ServicesTwo />
            <Testimonial />
            <ClientsPortfolio />
            <Marquee />
            <Collaboration />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;
