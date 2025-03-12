"use client";
import React from "react";
import Image from "next/image";

import { menuCategory, menuList } from "@/helpers/menu";

const Menu = () => {
  const [currentCategorie, setCurrentCategorie] = React.useState("Все меню");

  return (
    <div className="relative flex flex-col">
      <div className="flex items-center gap-2 overflow-y-auto mb-10">
        {menuCategory.map((item, index) => (
          <button
            key={`${item}_${index}`}
            className={`${
              currentCategorie === item ? "bg-primary" : "bg-gray"
            } px-3 py-2 font-medium rounded-md duration-300 min-w-max w-full hover:bg-primary`}
            onClick={() => setCurrentCategorie(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-stretch gap-10 sm:gap-5">
        {menuList
          .filter(
            (el) =>
              el.sort === currentCategorie || currentCategorie === "Все меню"
          )
          .map((item, index) => (
            <div
              key={`${item.title}_${index}`}
              className="relative flex flex-col w-[calc(20%_-_32px)] pb-4 border-b border-primary lg:w-[calc(25%_-_30px)] md:w-[calc(33%_-_25px)] sm:w-[calc(50%_-_10px)]"
            >
              {item.new && (
                <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-[#640001] text-sm sm:p-1 sm:text-xs">
                  New
                </span>
              )}
              <Image
                src={item.img}
                alt={`Valhalla cafe - ${item.title} | м.Фастів`}
                placeholder="blur"
                className="w-full h-[200px] object-cover object-center rounded-xl mb-6 sm:h-[150px]"
              />
              <h4 className="text-lg text-center font-bold text-primary mb-3">
                {item.title}
              </h4>
              <p className="tex-sm text-center mb-2">{item.subtitle}</p>
              <strong className="text-xl text-center font-bold">
                {item.price} грн | {item.gr}
              </strong>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;
