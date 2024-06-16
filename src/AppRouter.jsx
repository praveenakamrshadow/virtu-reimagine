import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import BackToTop from './components/BackToTop';
import MainLayout from './layouts/MainLayout';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Featured = lazy(() => import('./components/Featured'));
const Services = lazy(() => import('./components/Services'));
const ServicesTwo = lazy(() => import('./components/ServicesTwo'));
const MobileApps = lazy(() => import('./components/MobileApps'));
const References = lazy(() => import('./pages/References'));
const Associates = lazy(() => import('./pages/Associates'));
const AgencySupport = lazy(() => import('./pages/AgencySupport'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Carriers = lazy(() => import('./pages/Carriers'));
const Technologies = lazy(() => import('./pages/Technologies'));

const AppRouter = () => {
    return (
        <>
            <BackToTop />
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <MainLayout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/featured" element={<Featured />} />
                            <Route path="/services" element={<Services />} />
                            <Route
                                path="/servicesTwo"
                                element={<ServicesTwo />}
                            />
                            <Route
                                path="/mobile-apps"
                                element={<MobileApps />}
                            />
                            <Route
                                path="/references"
                                element={<References />}
                            />
                            <Route
                                path="/associates"
                                element={<Associates />}
                            />
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
                    </MainLayout>
                </Suspense>
            </Router>
        </>
    );
};

export default AppRouter;
