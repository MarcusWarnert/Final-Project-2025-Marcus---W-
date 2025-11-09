import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layout/Header';
import HomePage from './Components/Real-Pages/HomePage';
import WishListPage from './Components/Real-Pages/WishListPage';
import SettingsPage from './Components/Pages/SettingsPage';
import ProfilePage from './Components/Pages/ProfilePage';
import Footer from './Components/Layout/Footer';
import './App.css';

export default function App() {
    return (
        <Router>
            <div id="body-container">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/wishlist" element={<WishListPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

