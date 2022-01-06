import React, { useState } from "react";
import "./nav.scss";
import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import profile from "../../images/image-avatar.png";

const Navigation = ({ name }) => {
  return (
    <ul className={name}>
      <li>
        <a href="#collections">Collections</a>
      </li>
      <li>
        <a href="#men">Men</a>
      </li>
      <li>
        <a href="#women">Women</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 899) {
      setShowMenu(false);
    }
  });
  return (
    <nav className="nav">
      <div
        className="nav__menu-box"
        onClick={() => setShowMenu((prevValue) => !prevValue)}
      >
        <div
          className={showMenu ? "nav__menu nav__menu--active" : "nav__menu"}
        ></div>
      </div>
      <div className="nav__mobile-menu">
        <Navigation
          name={showMenu ? "nav__mobile nav__mobile--active" : "nav__mobile"}
        />
        <div
          className={
            showMenu
              ? "nav__mobile-background nav__mobile-background--active"
              : "nav__mobile-background"
          }
        ></div>
      </div>

      <div className="nav__logo-box">
        <img src={logo} alt="logo" className="nav__logo" />
      </div>
      <Navigation name="nav__desktop" />
      <div className="nav__user-interface">
        <div className="nav__cart-box">
          <img src={cart} alt="cart" className="nav__cart" />
        </div>
        <div className="nav__profile-box">
          <img src={profile} alt="profile" className="nav__profile" />
        </div>
      </div>
    </nav>
  );
}
