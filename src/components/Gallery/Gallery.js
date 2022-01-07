import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AppContext } from "../../AppContext";
import { Modal } from "../../components";

import "./gallery.scss";
import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation } from "swiper";

import Picture1 from "../../images/image-product-1.jpg";
import Picture2 from "../../images/image-product-2.jpg";
import Picture3 from "../../images/image-product-3.jpg";
import Picture4 from "../../images/image-product-4.jpg";

import PictureThumb1 from "../../images/image-product-1-thumbnail.jpg";
import PictureThumb2 from "../../images/image-product-2-thumbnail.jpg";
import PictureThumb3 from "../../images/image-product-3-thumbnail.jpg";
import PictureThumb4 from "../../images/image-product-4-thumbnail.jpg";

SwiperCore.use([Navigation]);

const GalleryMobile = () => {
  return (
    <div className="galleryMobile">
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Picture1} alt="pic1" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Picture2} alt="pic2" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Picture3} alt="pic3" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Picture4} alt="pic4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const setActive = (id) => {
  document.querySelectorAll(".galleryDesktop__thumbnail").forEach((item) => {
    item.classList.remove("galleryDesktop__thumbnail--active");
    const klasa = item.getAttribute("id");
    if (klasa === id) {
      item.classList.add("galleryDesktop__thumbnail--active");
    }
  });
};

const GalleryDesktop = () => {
  const [currentPicture, setCurrentPicture] = useState(Picture1);
  const { openModal, setOpenModal } = useContext(AppContext);
  useEffect(() => {
    setCurrentPicture(Picture1);
    setActive("th1");
  }, []);
  return (
    <div className="galleryDesktop">
      <div
        className="galleryDesktop__main-pic"
        onClick={() => {
          setOpenModal((prevValue) => !prevValue);
        }}
      >
        <img src={currentPicture} alt="pic1" />
      </div>
      <div className="galleryDesktop__thumbnail-box">
        <div
          className="galleryDesktop__thumbnail galleryDesktop__thumbnail--active"
          id="th1"
          onClick={() => {
            setActive("th1");
            setCurrentPicture(Picture1);
          }}
        >
          <img src={PictureThumb1} alt="thumb1" />
        </div>
        <div
          className="galleryDesktop__thumbnail"
          id="th2"
          onClick={() => {
            setActive("th2");
            setCurrentPicture(Picture2);
          }}
        >
          <img src={PictureThumb2} alt="thumb2" />
        </div>
        <div
          className="galleryDesktop__thumbnail"
          id="th3"
          onClick={() => {
            setActive("th3");
            setCurrentPicture(Picture3);
          }}
        >
          <img src={PictureThumb3} alt="thumb3" />
        </div>
        <div
          className="galleryDesktop__thumbnail"
          id="th4"
          onClick={() => {
            setActive("th4");
            setCurrentPicture(Picture4);
          }}
        >
          <img src={PictureThumb4} alt="thumb4" />
        </div>
      </div>
      {openModal && <Modal />}
    </div>
  );
};

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 899) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 899) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  });
  return <>{isMobile ? <GalleryMobile /> : <GalleryDesktop />}</>;
}
