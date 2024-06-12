import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import NavBar from './components/NavBar';
import Services from './components/Services';
import ServicesTwo from './components/ServicesTwo';
import Home from './Home';
import Featured from './components/Featured';

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
                <div
                    ref={scrollRef}
                    className="lexend custom-gradient overflow-hidden scroll-container"
                >
                    <NavBar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/featured" element={<Featured />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/servicesTwo" element={<ServicesTwo />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
};

export default App;
