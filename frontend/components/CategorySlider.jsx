"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { galleryList } from "@/helpers/gallery";
//styles
import "swiper/css";
import "swiper/css/pagination";
import "@/assets/css/swiper.css";

const CategorySlider = () => {
  return (
    <Swiper
      slidesPerView={1.3}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.3,
          spaceBetween: 20,
        },
        1170: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      className="category-slider w-full h-full"
    >
      {galleryList.slice(3, 9).map((item, index) => (
        <SwiperSlide key={item.alt + index}>
          <img
            className="w-full h-[330px] object-cover object-center rounded-md lg:h-[280px] sm:h-[230px]"
            src={item.img.src}
            alt={item.alt}
            placeholder="blur"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySlider;
