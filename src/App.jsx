import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import BackToTop from './components/BackToTop';

const App = () => {
    return (
        <>
            <BackToTop />
            <Router>
                <div className="lexend custom-gradient">
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
