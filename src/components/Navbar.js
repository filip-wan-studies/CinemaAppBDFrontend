import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styleNavbar.css';
import ReactSearchBox from 'react-search-box'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar sticky-top">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">Best Cinema</span>
                </Link>
                <Link to="/">
                    <ReactSearchBox
                        placeholder="Film title"
                        inputBoxBorderColor = "black"
                        inputBoxColor = "blue"
                        searchAsYouType={true}
                        /*data={this.data}*/
                        //callback={record => console.log(record)}
                    />
                </Link>
            </nav>
            <p></p>
        </div>
    );
};

export default Navbar;
