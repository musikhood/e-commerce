import React, { useContext, useState, useEffect } from "react";
import "./nav.scss";
import logo from "../../images/logo.svg";
import { ReactComponent as Cart } from "../../images/icon-cart.svg";
import profile from "../../images/image-avatar.png";
import { AppContext } from "../../AppContext";

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
  const { isOpen, setIsOpen } = useContext(AppContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 699) {
      setIsOpen(false);
    }
  });
  useEffect(() => {
    setIsCartOpen(false);
  }, []);
  return (
    <nav className="nav">
      <div
        className="nav__menu-box"
        onClick={() => setIsOpen((prevValue) => !prevValue)}
      >
        <div
          className={isOpen ? "nav__menu nav__menu--active" : "nav__menu"}
        ></div>
      </div>
      <div className="nav__mobile-menu">
        <Navigation
          name={isOpen ? "nav__mobile nav__mobile--active" : "nav__mobile"}
        />
        <div
          className={
            isOpen
              ? "nav__mobile-background nav__mobile-background--active"
              : "nav__mobile-background"
          }
          onClick={() => setIsOpen(false)}
        ></div>
      </div>

      <div className="nav__logo-box">
        <img src={logo} alt="logo" className="nav__logo" />
      </div>
      <Navigation name="nav__desktop" />
      <div className="nav__user-interface">
        <div
          className="nav__cart-box"
          onClick={() => {
            setIsCartOpen((prevValue) => !prevValue);
          }}
        >
          <Cart
            className="nav__cart"
            style={isCartOpen ? { fill: "black" } : null}
          />
          {isCartOpen && (
            <div className="nav__cart-content">
              <div className="nav__cart-content-1">Cart</div>
              <div className="nav__cart-content-2">Your cart is empty.</div>
            </div>
          )}
        </div>
        <div className="nav__profile-box">
          <img src={profile} alt="profile" className="nav__profile" />
        </div>
      </div>
    </nav>
  );
}
