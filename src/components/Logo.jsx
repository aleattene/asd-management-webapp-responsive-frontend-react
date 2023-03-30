import logo from '../assets/img/logo.jpg';
import React from "react";

const Logo = () => {
    return (
        <a href="/" className="logo-link">
            <img
                src={logo}
                //height="30"
                width="100rem"
                className="d-inline-block align-top float-left"
                alt="Logo"
            />
        </a>

    );
};

export default Logo;
