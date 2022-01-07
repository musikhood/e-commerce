import React, { useContext, useState } from "react";
import "./modal.scss";

import { AppContext } from "../../AppContext";

import Close from "../../images/icon-close.svg";

import Picture1 from "../../images/image-product-1.jpg";
import Picture2 from "../../images/image-product-2.jpg";
import Picture3 from "../../images/image-product-3.jpg";
import Picture4 from "../../images/image-product-4.jpg";

import PictureThumb1 from "../../images/image-product-1-thumbnail.jpg";
import PictureThumb2 from "../../images/image-product-2-thumbnail.jpg";
import PictureThumb3 from "../../images/image-product-3-thumbnail.jpg";
import PictureThumb4 from "../../images/image-product-4-thumbnail.jpg";

const setActive = (id) => {
  document.querySelectorAll(".modal__thumbnail").forEach((item) => {
    item.classList.remove("modal__thumbnail--active");
    const klasa = item.getAttribute("id");
    if (klasa === id) {
      item.classList.add("modal__thumbnail--active");
    }
  });
};

function Modal() {
  const [currentPicture, setCurrentPicture] = useState(Picture1);
  const { setOpenModal } = useContext(AppContext);
  return (
    <div className="modal">
      <div className="modal__content">
        <div
          className="modal__close-box"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <img src={Close} alt="close" className="modal__close" />
        </div>
        <div className="modal__main-pic">
          <img src={currentPicture} alt="pic1" />
        </div>
        <div className="modal__thumbnail-box">
          <div
            className="modal__thumbnail modal__thumbnail--active"
            id="th1"
            onClick={() => {
              setActive("th1");
              setCurrentPicture(Picture1);
            }}
          >
            <img src={PictureThumb1} alt="thumb1" />
          </div>
          <div
            className="modal__thumbnail"
            id="th2"
            onClick={() => {
              setActive("th2");
              setCurrentPicture(Picture2);
            }}
          >
            <img src={PictureThumb2} alt="thumb2" />
          </div>
          <div
            className="modal__thumbnail"
            id="th3"
            onClick={() => {
              setActive("th3");
              setCurrentPicture(Picture3);
            }}
          >
            <img src={PictureThumb3} alt="thumb3" />
          </div>
          <div
            className="modal__thumbnail"
            id="th4"
            onClick={() => {
              setActive("th4");
              setCurrentPicture(Picture4);
            }}
          >
            <img src={PictureThumb4} alt="thumb4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
