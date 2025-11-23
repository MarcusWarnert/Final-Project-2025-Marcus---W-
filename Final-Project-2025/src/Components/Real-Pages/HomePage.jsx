import React, { useState } from 'react';
import { Link } from 'react-router';
import Button from '../Forms/Button';

export default function HomePage() {
    return (
        <main style={{ 
            display: 'grid',
            placeItems: 'center',
            minHeight: '80vh',
        }}>
            <div style={{
                display: 'grid',
                gap: '30px',
                justifyItems: 'center',
                alignItems: 'center'
            }}>
                <h1>Welcome to the Home Page</h1>
                <p style={{ 
                    display: 'grid',
                    gridTemplateColumns: '300px auto',
                    gap: '10px',
                    alignItems: 'center',
                }}>Here you can search for any movies, add them to your wishlist, and then you will be able to see if it is free  to stream, and where at.</p>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    alignItems: 'center',
                    justifyItems: 'center'

                }}>
                    <Link to="/search">
                        <Button>Go to Search</Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
