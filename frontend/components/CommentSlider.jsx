"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { commentsList } from "@/helpers/variebles";
//styles
import "swiper/css";
import "swiper/css/pagination";
import "@/assets/css/swiper.css";
//img
import CommentIconImg from "@/assets/img/home/comment-icon.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const CommentSlider = () => {
  return (
    <Swiper
      spaceBetween={40}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="comment-slider w-full h-full"
    >
      {commentsList.map((item) => (
        <SwiperSlide key={item.comment}>
          <div className="flex flex-col pt-[100px] pb-[30px] px-[85px] max-w-[870px] mx-auto bg-white text-gray md:py-[30px] sm:px-5">
            <img
              className="w-[45px] h-[45px] mx-auto mb-[30px]"
              src={CommentIconImg.src}
              alt={item.comment}
            />
            <p className="text-lg text-center mb-5 sm:text-base">
              {item.comment}
            </p>
            <h5 className="text-2lg font-bold text-center mb-[30px]">
              {item.author}
            </h5>
            <div className="flex items-center justify-center gap-2 text-2xl text-primary">
              {[...Array(item.star)].map((item, index) => (
                <AiFillStar key={index} />
              ))}
              {[...Array(5 - item.star)].map((item, index) => (
                <AiOutlineStar key={index} />
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CommentSlider;
