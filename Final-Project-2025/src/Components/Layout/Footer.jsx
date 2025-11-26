
import React from 'react';

export default function Footer() {

    let thisYear = new Date().getFullYear();

    return (
        <footer>
            <div>&copy; {thisYear} Stream Later</div>
        </footer>
    );
};