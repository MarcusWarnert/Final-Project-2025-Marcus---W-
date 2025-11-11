import React from 'react';
import { Link } from 'react-router';

export default function NavMenu() {
    return (
        <div className="nav-menu">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/wishlist">WishList</Link>
            <Link className="link" to="/settings">Settings</Link>
            <Link className="link" to="/profile">Profile</Link>
        </div>
    );
}
