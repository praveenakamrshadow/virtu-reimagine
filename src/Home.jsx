import { Outlet } from 'react-router-dom';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Services from './components/Services';
import ServicesTwo from './components/ServicesTwo';
import Collaboration from './components/Collaboration';
import Marquee from './components/Marquee';
import Testimonial from './components/Testimonial';
import ClientsPortfolio from './components/ClientsPortfolio';

const Home = () => {
    return (
        <div>
            <Hero />
            <Featured />
            <Services />
            <ServicesTwo />
            <Testimonial />
            <ClientsPortfolio />
            <Marquee />
            <Collaboration />
            <Outlet />
        </div>
    );
};

export default Home;
