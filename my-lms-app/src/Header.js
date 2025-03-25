import React from 'react';
import Logo from './images/logo.jpg';

import './styles.css';

function Header() {

    return (
        <div>
            <img src={Logo} alt="Logo"/>
                <div>
                    <nav>
                        <a href="/">Homepage</a> 
                        <a href="/Courses">Courses</a> 
                        <a href="/Login">Login</a>
                    </nav>
                </div>
        </div>
    );
}

export default Header;