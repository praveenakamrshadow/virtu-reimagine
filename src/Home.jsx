import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesTwo from './components/ServicesTwo';
import Collaboration from './components/Collaboration';
import Marquee from './components/Marquee';
import Testimonial from './components/Testimonial';

const Home = () => {
    return (
        <div>
            <Hero />
            <Featured />
            <Services />
            <ServicesTwo />
            <Testimonial />
            <Marquee />
            <Collaboration />
            <Footer />
        </div>
    );
};

export default Home;
