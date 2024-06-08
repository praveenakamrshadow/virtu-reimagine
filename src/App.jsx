import Hero from './components/Hero';
import NavBar from './components/NavBar';
import ScrollProvider from './components/ScrollProvider';
import './index.css';

export default function App() {
    return (
        <>
            <ScrollProvider>
                <div className="lexend custom-gradient">
                    <NavBar />
                    <Hero />
                </div>
            </ScrollProvider>
        </>
    );
}
