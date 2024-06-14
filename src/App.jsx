import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Services from './components/Services';
import ServicesTwo from './components/ServicesTwo';
import Home from './Home';
import Featured from './components/Featured';
import MobileApps from './components/MobileApps';
import References from './components/References';
import Associates from './components/Associates';
import AgencySupport from './components/AgencySupport';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Carriers from './components/Carriers';
import Technologies from './components/Technologies';

const App = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        let scroll;
        if (scrollRef.current) {
            scroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
            });
        }

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <>
            <Router>
                <div ref={scrollRef} className="lexend custom-gradient">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/featured" element={<Featured />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/servicesTwo" element={<ServicesTwo />} />
                        <Route path="/mobile-apps" element={<MobileApps />} />
                        <Route path="/references" element={<References />} />
                        <Route path="/associates" element={<Associates />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/carriers" element={<Carriers />} />
                        <Route
                            path="/technologies"
                            element={<Technologies />}
                        />
                        <Route
                            path="/agency-support"
                            element={<AgencySupport />}
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
};

export default App;
