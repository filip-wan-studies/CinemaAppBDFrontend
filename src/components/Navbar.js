import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar sticky-top navbar-dark bg-danger">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Best Cinema</span>
            </Link>
        </div>
    );
};

export default Navbar;
