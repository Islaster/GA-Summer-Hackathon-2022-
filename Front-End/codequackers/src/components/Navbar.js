import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <Link to="/"> Home</ Link>
                <Link to="/profile"> Profile</ Link>
                <Link to="/signup"> Signup</ Link>
            </ul>
        </nav>
    )
}

export default Navbar