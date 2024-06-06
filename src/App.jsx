import Hero from './components/Hero';
import NavBar from './components/NavBar';
import ThemeToggler from './utils/ThemeToggler';

export default function App() {
    return (
        <>
            <div className="font-faktum-bold bg-[#2C375A] ">
                <ThemeToggler />
                <NavBar />
                <Hero />
            </div>
        </>
    );
}
