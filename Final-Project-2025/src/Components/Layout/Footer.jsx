
import React from 'react';

export default function Footer() {

    let thisYear = new Date().getFullYear();

    return (
        <footer>
            <div>&copy; {thisYear} Super Cool Awesome Name for Awesome People</div>
        </footer>
    );
};