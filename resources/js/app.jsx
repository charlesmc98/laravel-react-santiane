/* import Assets */
import './bootstrap';
import '../css/app.css'

/* import Core React Router */
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* import Pages */
import Layout from './pages/Layout';
import Home from './pages/Home';
import Travel from './pages/Travel';
import ViewedTravels from './pages/ViewedTravels';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="create-travel" element={<Travel />} />
                    <Route path="viewed-travels" element={<ViewedTravels />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);
