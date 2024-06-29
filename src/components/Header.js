import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/login-logo.png";
import searchIcons from "../images/icons/searchIcon.png";
import shoppingCart from "../images/icons/shopping-cart.png";
import "./Header.css";
import { useAuth } from "../context/GlobalState";
import { auth } from "../firebase";

const Header = () => {
  const { user, basket } = useAuth();
  const handelAuthSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} className="header-logo" alt="" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img src={searchIcons} alt="" className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={handelAuthSignOut}>
            <div className="header-optionLineOne">
              Hello {user ? `${user.email}` : "Guest"}
            </div>
            <div className="header-optionLineTow">
              {" "}
              {user ? "Sign out" : "Sign in"}{" "}
            </div>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <div className="header-optionLineOne"> Returns </div>
            <div className="header-optionLineTow"> & Orders</div>
          </div>
        </Link>
        <div className="header-option">
          <div className="header-optionLineOne"> Your </div>
          <div className="header-optionLineTow"> Prime</div>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={shoppingCart} alt="" />
            <span className="header-optionLineTow header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
