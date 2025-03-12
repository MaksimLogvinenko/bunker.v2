"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { menuList } from "@/helpers/menu";
//styles
import "swiper/css";
import "swiper/css/pagination";
import "@/assets/css/swiper.css";

const NewMenuItems = () => {
  return (
    <Swiper
      slidesPerView={1.3}
      spaceBetween={25}
      pagination={{
        dynamicBullets: true,
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
          slidesPerView: 2.3,
          spaceBetween: 25,
        },
        1170: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      }}
      className="new-menu-slider w-full h-full flex flex-1"
    >
      {menuList
        .filter((el) => el.new)
        .map((item) => (
          <SwiperSlide
            className="relative border border-white !h-auto"
            key={item.title}
          >
            <span className="absolute top-3 left-3 px-3 py-2 rounded-md bg-[#640001] text-sm">
              New
            </span>
            <img
              className="w-full h-[350px] object-cover object-center lg:h-[280px] sm:h-[230px]"
              src={item.img.src}
              alt={item.title}
              placeholder="blur"
            />
            <div className="flex flex-col py-[30px] px-[45px] sm:p-5">
              <h4 className="text-primary text-2xl font-medium mb-3">
                {item.title}
              </h4>
              <p className="mb-8">{item.subtitle}</p>
              <span className="text-primary font-bold text-xl">
                {item.price}грн | {item.gr}
              </span>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default NewMenuItems;
