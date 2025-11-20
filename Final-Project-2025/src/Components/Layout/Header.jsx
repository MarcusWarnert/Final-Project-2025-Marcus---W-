import React from 'react';
import NavMenu from './NavMenu';
import AnimatedLogo from '../Forms/AnimatedLogo';
import ALB from '../Forms/ALB';

export default function Header() {

    return (
        <header>
            <div id="head" style={{ 
                display: 'flex', 
                alignItems: 'center'
            }}>
                <AnimatedLogo size={60} />
                <strong>Super Cool Awesome Name for Awesome People</strong>
                <ALB size={60} />
            </div>
            <NavMenu />
        </header>
    );
};