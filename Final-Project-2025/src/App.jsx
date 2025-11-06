import { useState } from 'react';
import Header from './Components/Layout/Header';
import HomePage from './Components/Real-Pages/HomePage';
import Footer from './Components/Layout/Footer';
import './App.css';

export default function App() {
  
    return (
        <div id="body-container">
            <Header />
            <HomePage />        
            <Footer />
        </div>
    );
};

