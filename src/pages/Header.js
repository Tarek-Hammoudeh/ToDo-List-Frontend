import React from 'react';
import './../App.css'

const Navbar = () => {
    return (
        <div className="topnav">
            <a href="/" className="btn btn-outline-light me-md-2 btn-lg" type="button">Main Page </a>
            <a href="Home" className="btn btn-outline-light me-md-2 btn-lg" type="button">Tasks Page</a>
            <a href="Create" className="btn btn-outline-light me-md-2 btn-lg" type="button">Add Page </a>
        </div>
    )
}

export default Navbar;
