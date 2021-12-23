import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import cartIcon from "./images/cart.png";

export default function Header({ cart }) {
  return (
    <header>
      <div>
        <Link to="/">Our Store's Logo</Link>
      </div>
      <div className="right-side">
        <Link to="/products">products</Link>
        <Link to="/cart">
          <span
            className="cart-icon"
            style={{ backgroundImage: `url(${cartIcon})` }}
          >
            <span>{cart}</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
