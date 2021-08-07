import React from "react";
import "./Navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="header">
        <Link to="/">
          <img className="logo" src="http://devshopu.com/assets/images/header_logo.svg" alt="Logo dev shop"></img>
        </Link>
            <div className="header-line"></div>
  
          <nav className="menu">
        <Link to="/mouses">
            <a className="menu-item">Mouses</a>
        </Link>
        <Link to="/teclados">
            <a className="menu-item">Teclados</a>
        </Link>
        <Link to="/monitores">
            <a className="menu-item">Monitores</a>
        </Link>
          </nav>

        <div className="shoppingCartContainer">
            <Link to="/cart">
                <CartWidget className="icon-cart" />
            </Link>
        </div>
        </header>
    );
};

export default NavBar;
