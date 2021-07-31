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
            <a href="#mouses" className="menu-item">Mouses</a>
            <a href="#teclados" className="menu-item">Teclados</a>
            <a href="#monitores" className="menu-item">Monitores</a>
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
