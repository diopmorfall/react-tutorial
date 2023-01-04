import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
//* Link is in the package,  and by setting the to prop you're saying where you want to navigate
//! It must match the exact prop

export default function Navbar() {
    return (
        <nav className='nav-router'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/people">People</Link>
                </li>
            </ul>
        </nav>
    );
}
