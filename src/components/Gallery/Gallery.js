import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../AppContext";
import { Swiper, SwiperSlide } from "swiper/react";

import "./gallery.scss";
import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation } from "swiper";

import Picture1 from "../../images/image-product-1.jpg";
import Picture2 from "../../images/image-product-2.jpg";
import Picture3 from "../../images/image-product-3.jpg";
import Picture4 from "../../images/image-product-4.jpg";

SwiperCore.use([Navigation]);

const GalleryMobile = () => {
  const { isOpen } = useContext(AppContext);
  return (
    <div
      className={
        isOpen ? "galleryMobile  galleryMobile--active" : "galleryMobile"
      }
      style={isOpen ? { zIndex: "-1" } : { zIndex: "1" }}
    >
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
  return <>{isMobile ? <GalleryMobile /> : null}</>;
}
