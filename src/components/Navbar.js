import React from 'react'
import logo from './logo.png'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg myNav">
                <div className="container-fluid">
                    <img src={logo} alt="logo" style={{ width: "50px", height: "45px" }} />
                    <Link className="navbar-brand" to="/">Get-News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Technology">Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
