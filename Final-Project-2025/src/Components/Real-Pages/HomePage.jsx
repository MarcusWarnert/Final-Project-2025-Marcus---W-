import React, { useState } from 'react';
import { Link } from 'react-router';
import Button from '../Forms/Button';

export default function HomePage() {
    return (
        <main style={{ 
            display: 'grid',
            placeItems: 'center',
            minHeight: '80vh',
            padding: '20px'
        }}>
            <div style={{
                display: 'grid',
                gap: '30px',
                justifyItems: 'center'
            }}>
                <h1>Welcome to the Home Page</h1>
                
                <p style={{ 
                    display: 'grid',
                    gridTemplateColumns: '300px auto',
                    gap: '10px',
                    alignItems: 'center'
                }}>Feel free to search for any movie you wish to add to your tracker.</p>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '300px auto',
                    gap: '10px',
                    alignItems: 'center'
                }}>
                    <input
                        type="text"
                        placeholder="Enter your movie"
                        style={{
                            display: 'grid',
                            alignItems: 'center'
                        }}
                    />
                    <Link to="/search">
                        <Button>Search</Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
