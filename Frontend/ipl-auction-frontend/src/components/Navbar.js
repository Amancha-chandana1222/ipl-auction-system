import React from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {

    return (

        <nav className="navbar">

            <Link
    to="/"
    className="nav-link"
>
    Dashboard
</Link>

            <Link
                to="/players"
                className="nav-link"
            >
                Players
            </Link>

            <Link
                to="/teams"
                className="nav-link"
            >
                Teams
            </Link>

            <Link
                to="/auction"
                className="nav-link"
            >
                Auction
            </Link>

        </nav>

    );

}

export default Navbar;