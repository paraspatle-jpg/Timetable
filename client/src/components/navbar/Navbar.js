import React, { useState, useEffect } from 'react';
import './Navbar.css'

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);
    })
    return (
        <div className="nav-container">
            <h2>Timetable</h2>
            {(toggleMenu || screenWidth > 615) && (<ul className="nav-list">
                <li>Select Year</li>
                <li>Select Section</li>
            </ul>)}
            <span onClick={toggleNav} className="nav-button"><i className="fa fa-bars"></i></span>
        </div>
    )
}
