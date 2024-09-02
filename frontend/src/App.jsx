import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import RegisteredItem from "./pages/cashier/registeredItem.jsx";
import WarrantClaim from "./pages/cashier/warrantClaim.jsx";

const App = () => {
    return (
        <Router>
            <nav className="p-4 bg-gray-800 text-white">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:underline">About</Link>
                    </li>
                </ul>
            </nav>

            <div className="p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cashier/registeredItems" element={<RegisteredItem />} />
                    <Route path="/cashier/warrantClaim" element={<WarrantClaim />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
