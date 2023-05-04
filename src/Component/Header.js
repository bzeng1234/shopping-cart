import React from "react";
import Nav from "./Nav";
import Cart from "./Cart";
import '../style/header.css'

function Header() {
    return (
        <header className="header-container">
            <h1 className="website-title">MicroCenter</h1>
            <Nav />
            <Cart />
        </header>
    );
};

export default Header;