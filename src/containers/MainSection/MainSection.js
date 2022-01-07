import React from "react";
import "./mainSection.scss";
import { Gallery } from "../../components";
import IconPlus from "../../images/icon-plus.svg";
import IconMinus from "../../images/icon-minus.svg";
import { ReactComponent as Cart } from "../../images/icon-cart.svg";

export default function MainSection() {
  return (
    <main className="main">
      <div className="main__container-a">
        <Gallery />
      </div>
      <div className="main__container-b">
        <p className="main__p main__p--orange">Sneaker Company</p>
        <h1 className="main__h1">Fall Limited Edition Sneakers</h1>
        <p className="main__p">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="main__price-box">
          <div className="main__current-price">
            <h2 className="main__h2">$125.00</h2>
            <p className="main__p main__p--discount">50%</p>
          </div>
          <div className="main__previous-price">$250.00</div>
        </div>
        <div className="main__buttons">
          <div className="main__number-box">
            <button className="main__number-button">
              <img src={IconMinus} alt="minus" />
            </button>
            <p className="main__p main__p--number">0</p>
            <button className="main__number-button">
              <img src={IconPlus} alt="plus" />
            </button>
          </div>
          <button className="main__buy-button">
            <Cart className="main__cart" />
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
