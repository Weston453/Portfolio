import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="title">Weston Isheim</div>
                <a href='#home' className="toggle-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <div className="navbar-links">
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
