import { Route, Routes } from 'react-router-dom';
import Featured from './components/Featured';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import ScrollProvider from './components/ScrollProvider';
import Services from './components/Services';
import ServicesTwo from './components/ServicesTwo';

const App = () => {
    return (
        <div>
            <ScrollProvider>
                <div className="lexend custom-gradient">
                    <NavBar />
                    <Hero />
                    <Featured />
                    <Services />
                    <ServicesTwo />
                </div>
            </ScrollProvider>

            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/featured" element={<Featured />} />
            </Routes>
        </div>
    );
};

export default App;
