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
                            padding: '10px 15px',
                            fontSize: '16px',
                            borderRadius: '5px',
                            border: '2px solid #ccc'
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