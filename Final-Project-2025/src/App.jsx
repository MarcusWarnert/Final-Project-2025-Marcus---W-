import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layout/Header';
import HomePage from './Components/Real-Pages/HomePage';
import WishListPage from './Components/Real-Pages/WishListPage';
import SettingsPage from './Components/Pages/SettingsPage';
import ProfilePage from './Components/Pages/ProfilePage';
import SearchPage from './Components/Pages/SearchPage';
import FeedbackPage from './Components/Pages/FeedbackPage';
import AboutPage from './Components/Pages/AboutPage';
import Footer from './Components/Layout/Footer';
import './App.css';

export default function App() {

    const [wishList, setWishList] = useState ([]);
    const API_KEY = '969b806bf9d8a6812ba5f3bec623ab5d';

    const searchMovies = async (query) => {
        if (!query.trim()) return [];

        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
            );
            const data = await response.json();
            return data.results || [];
        } catch (error) {
            console.error('Error: ' + error);
            return [];
        }
    };

    const getStreamingProviders = async (movieId) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${API_KEY}`
            );
            const data = await response.json();
            return data.results?.US || null;
        } catch (error) {
            console.error('Error: ' + error);
            return [];
        }
    };

    const addToWishList = async (movie) => {
        //Check if is already in Wish List
        if (wishList.some(item => item.id === movie.id)) {
            console.log("That movie is already in your Wishlist");
            return;
        }

        const streamingInfo = await getStreamingProviders(movie.id);
        setWishList(prev => [...prev, { ...movie, streamingInfo }]);
    };

    const removeFromWishList = (movieId) => {
        setWishList(prev => prev.filter(movie => movie.id !== movieId));
    };



    return (
        <Router>
            <div id="body-container">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/feedback" element={<FeedbackPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route 
                        path="/search" 
                        element={
                        <SearchPage 
                            searchMovies={searchMovies}
                            addToWishList={addToWishList}
                            wishList={wishList}
                        />} 
                    />
                    <Route 
                        path="/wishlist" 
                        element={
                        <WishListPage 
                            wishList={wishList}
                            removeFromWishList={removeFromWishList}
                        />} 
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

