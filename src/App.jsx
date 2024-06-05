import { Route, Routes } from 'react-router';
import Hero from './components/Hero';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Hero />} />
        </Routes>
    );
}
