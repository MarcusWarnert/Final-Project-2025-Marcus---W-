import React, {useState} from 'react';
import { Link } from 'react-router';
import Button from '../Forms/Button';

export default function SearchPage() {
    return (
        <main style={{ 
            display: 'grid',
            placeItems: 'center',
            minHeight: '80vh',
            padding: '20px'
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '300px auto',
                gap: '10px',
                alignItems: 'center'
            }}>
                <h1>Search Results</h1>
                <input
                     type="text"
                    placeholder="Enter your movie"
                    style={{
                        display: 'grid',
                        alignItems: 'center'
                     }}
                />
                <div onClick >
                    <Link to="/search">
                        <Button>Search</Button>
                    </Link>
                </div>
            </div>
            <div>
                <p>Your search results will appear here!</p>
            </div> 
        </main>
    );
}