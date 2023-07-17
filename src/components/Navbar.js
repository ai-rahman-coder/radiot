import React from "react";
import './Navbar.css';

function Navbar() {
    return (
        <>
            <div className="desktop">
                <div className="title-and-icon">
                    <img src="/images/RRSL.png" alt="logo" className="logo" />
                </div>
                <div className="about">
                    About
                </div>
                <div className="contact">
                    Contact
                </div>
                <div className="button">
                    <div className="signup">
                        Signup
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
