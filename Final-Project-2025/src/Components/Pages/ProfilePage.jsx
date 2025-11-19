import React from 'react';
import UserProfile from '../Forms/UserProfile';

export default function ProfilePage() {

    return (
        <main>
            <h1>
                Profile
            </h1>
            <div>
                <UserProfile/>  
            </div>
            <div>
                <h2>
                    Your Streaming Apps
                </h2>
                <ol>
                    <li>Netflix</li>
                    <li>Disney+</li>
                    <li>Amazon</li>
                </ol>
            </div>
            <div>
                <h2>
                    Your Free Streaming Apps
                </h2>
                <ul>
                    <li>Tubi</li>
                    <li>Pluto</li>
                </ul>
            </div>
        </main>
    )

    
}