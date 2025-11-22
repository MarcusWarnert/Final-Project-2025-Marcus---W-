import React from 'react';
import NavMenu from './NavMenu';
import AnimatedLogo from '../Forms/AnimatedLogo';
import ALB from '../Forms/ALB';
import Title from '../Forms/Title';

export default function Header() {

    return (
        <header>
            <div id="head" style={{ 
                display: 'flex', 
                alignItems: 'center'
            }}>

                <ALB size={60} />
                <Title />
                <AnimatedLogo size={60} />
                
            </div>
            <NavMenu />
        </header>
    );
};