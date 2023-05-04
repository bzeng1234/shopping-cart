import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <ul className="nav-bar">
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/shopping'>Shopping</Link>
            </li>
        </ul>
    );
};

export default Nav;