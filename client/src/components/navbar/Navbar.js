import React from 'react';
import './Navbar.css'

export const Navbar = () => {

    return (
        <div className="outer-nav-container">
            <div className="nav-container">
                <h1>TimeTable</h1>
                <div className="color-switch">
                    <input type="checkbox" id="switch"
                        class="checkbox" />
                    <label for="switch" className="toggle"></label>
                </div>
            </div>
            <hr />
        </div>
    )
}
