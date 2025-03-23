import React, { useState } from "react";
import "../styles/global.css";
import { FaShoppingCart, FaSearch, FaSignOutAlt } from 'react-icons/fa';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ShopGuard</div>
      <div className="navbar-icons">
        <FaSearch className="navbar-icon" title="Search" />
        <div className="navbar-cart">
          <FaShoppingCart className="navbar-icon" title="Cart" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
        <FaSignOutAlt className="navbar-icon" title="Logout" />
      </div>
    </nav>
  );
};

export default Navbar;
