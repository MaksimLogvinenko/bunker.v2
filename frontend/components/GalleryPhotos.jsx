"use client";
import React from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { galleryList } from "@/helpers/gallery";
import { CiSearch } from "react-icons/ci";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const GalleryPhotos = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="flex flex-wrap gap-5"
      >
        {galleryList.map((item, index) => (
          <a
            key={index}
            className="relative flex w-[calc(33.3333%_-_14px)] h-[300px] object-cover object-center rounded-md group lg:h-[250px] md:h-[200px] sm:w-[calc(50%_-_10px)] sm:h-[150px]"
            href={item.img.src}
          >
            <Image
              src={item.img}
              alt={`Кафе Bunker - ${item.alt} | місто Фастів`}
              placeholder="blur"
              key={index}
              className="w-full h-full object-cover object-center rounded-md duration-300 "
            />
            <div className="absolute inset-0 bg-black/60 duration-300 opacity-0 group-hover:opacity-100"></div>
            <CiSearch className="absolute text-3xl left-1/2 top-2/3 -translate-x-1/2 opacity-0 duration-500 group-hover:opacity-100 group-hover:top-1/2 group-hover:-translate-y-1/2" />
          </a>
        ))}
      </LightGallery>
    </>
  );
};

export default GalleryPhotos;
