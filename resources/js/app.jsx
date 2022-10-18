/* import Assets */
import './bootstrap';
import '../css/app.css'

/* import Core React Router */
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* import Pages */
import Layout from './pages/Layout';
import Home from './pages/Home';
import CreateTrip from './pages/CreateTrip';
import EditTrip from './pages/EditTrip';
import ListTrip from './pages/ListTrip';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/trip/create" element={<CreateTrip />} />
                    <Route path="/trip/edit/:id" element={<EditTrip />} />
                    <Route path="/trip/list" element={<ListTrip />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);
