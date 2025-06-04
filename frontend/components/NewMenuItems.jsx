"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
//api
import { useGetMenuQuery } from "@/store/api";
//img
import NoPhoto from "@/assets/img/menu/nophoto.jpg";
//styles
import "swiper/css";
import "swiper/css/pagination";
import "@/assets/css/swiper.css";

const NewMenuItems = () => {
  const { data: getMenu, isLoading: loadingMenu } = useGetMenuQuery();

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
      {!loadingMenu &&
        getMenu
          .filter((el) => el.is_new)
          .map((item) => (
            <SwiperSlide
              className="relative border border-white !h-auto"
              key={item.id}
            >
              <span className="absolute top-3 left-3 px-3 py-2 rounded-md bg-[#640001] text-sm">
                New
              </span>
              <Image
                className="w-full h-[350px] object-cover object-center lg:h-[280px] sm:h-[230px]"
                src={item.image_url === null ? NoPhoto : `${item.image_url}`}
                alt={`Bunker cafe - ${item.name} | м.Фастів`}
                // placeholder="blur"
                width={300}
                height={300}
              />
              <div className="flex flex-col py-[30px] px-[45px] sm:p-5">
                <h4 className="text-primary text-2xl font-medium mb-3">
                  {item.name}
                </h4>
                <p className="mb-8">{item.ingredients}</p>
                <span className="text-primary font-bold text-xl">
                  {item.price}грн | {item.portion_size}
                </span>
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default NewMenuItems;
