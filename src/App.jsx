import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Featured from './components/Featured';
import Services from './components/Services';
import ServicesTwo from './components/ServicesTwo';
import MobileApps from './components/MobileApps';
import References from './components/References';
import Associates from './components/Associates';
import AgencySupport from './components/AgencySupport';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Carriers from './components/Carriers';
import Technologies from './components/Technologies';
import BackToTop from './components/BackToTop';
import Collaboration from './components/Collaboration';
import Marquee from './components/Marquee';
import Testimonial from './components/Testimonial';
import ClientsPortfolio from './components/ClientsPortfolio';
import Loader from './utils/Loader';
import ArtificialIntelligence from './components/servicesTwo/ArtificialIntelligence';
import QualityTesting from './components/servicesTwo/QualityTesting';
import SAPBusinessOne from './components/servicesTwo/SAPBusinessOne';
import ProductDevelopment from './components/servicesTwo/ProductDevelopment';
import MobileDevelopment from './components/servicesTwo/MobileDevelopment';
import ErpSap from './components/servicesTwo/ErpSap';
import Manufacturing from './components/Industries/ERP/Manufacturing';
import Construction from './components/Industries/ERP/Construction';
import InventoryManagement from './components/Industries/ERP/InventoryManagement';
import Pharmaceuticals from './components/Industries/ERP/Pharmaceuticals';
import Education from './components/Industries/DigitalTransformation/Education';
import EGovernance from './components/Industries/DigitalTransformation/EGovernance';
import EnterpriseSolutions from './components/Industries/DigitalTransformation/EnterpriseSolutions';
import Financial from './components/Industries/DigitalTransformation/Financial';
import Healthcare from './components/Industries/DigitalTransformation/Healthcare';
import Logistics from './components/Industries/DigitalTransformation/Logistics';
import MediaPublishing from './components/Industries/DigitalTransformation/MediaPublishing';
import TravelTourism from './components/Industries/DigitalTransformation/TravelTourism';
import Retail from './components/Industries/DigitalTransformation/Retail';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <BackToTop />
            <Router>
                <div className="lexend custom-gradient">
                    <Routes>
                        <Route path="/" element={<Home />}>
                            <Route path="featured" element={<Featured />} />
                            <Route path="services" element={<Services />} />
                            <Route
                                path="servicesTwo"
                                element={<ServicesTwo />}
                            />
                            <Route
                                path="testimonial"
                                element={<Testimonial />}
                            />
                            <Route
                                path="clients-portfolio"
                                element={<ClientsPortfolio />}
                            />
                            <Route path="marquee" element={<Marquee />} />
                            <Route
                                path="collaboration"
                                element={<Collaboration />}
                            />
                        </Route>
                        {/* navBar */}
                        <Route path="/mobile-apps" element={<MobileApps />} />
                        <Route path="/references" element={<References />} />
                        <Route path="/associates" element={<Associates />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/carriers" element={<Carriers />} />
                        {/* servicesTwo */}
                        <Route
                            path="/technologies"
                            element={<Technologies />}
                        />
                        <Route
                            path="/agency-support"
                            element={<AgencySupport />}
                        />
                        <Route
                            path="/artificial-intelligence-machine-learning"
                            element={<ArtificialIntelligence />}
                        />
                        <Route
                            path="/quality-assurance-test-automation"
                            element={<QualityTesting />}
                        />
                        <Route
                            path="/sap-business-one"
                            element={<SAPBusinessOne />}
                        />
                        <Route
                            path="/product-development"
                            element={<ProductDevelopment />}
                        />
                        <Route
                            path="/mobile-development"
                            element={<MobileDevelopment />}
                        />
                        <Route path="/erp-sap" element={<ErpSap />} />
                        {/* ERP */}
                        <Route
                            path="/manufacturing"
                            element={<Manufacturing />}
                        />
                        <Route
                            path="/construction"
                            element={<Construction />}
                        />
                        <Route
                            path="/inventory-management"
                            element={<InventoryManagement />}
                        />
                        <Route
                            path="/pharmaceuticals"
                            element={<Pharmaceuticals />}
                        />
                        {/* DigitalTransformation */}
                        <Route path="/healthcare" element={<Healthcare />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/eGovernance" element={<EGovernance />} />
                        <Route
                            path="/enterprise-solutions"
                            element={<EnterpriseSolutions />}
                        />
                        <Route path="/financial" element={<Financial />} />
                        <Route path="/logistics" element={<Logistics />} />
                        <Route
                            path="/media-publishing"
                            element={<MediaPublishing />}
                        />
                        <Route
                            path="/travel-tourism"
                            element={<TravelTourism />}
                        />
                        <Route path="/retail" element={<Retail />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
};

export default App;
