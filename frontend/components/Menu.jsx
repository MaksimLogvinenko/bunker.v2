"use client";
import React from "react";
import Image from "next/image";
//api
import { useGetMenuQuery, useGetCategoriesQuery } from "@/store/api";
//img
import NoPhoto from "../assets/img/menu/nophoto.jpg";

const Menu = () => {
  const [currentCategorie, setCurrentCategorie] = React.useState(null);
  const { data: cetegoriesItems, isLoading: loadingCategories } =
    useGetCategoriesQuery();
  const { data: menuItems, isLoading, isError, error } = useGetMenuQuery();

  return (
    <div className="relative flex flex-col">
      <div className="flex items-center gap-2 overflow-y-auto mb-10">
        {!loadingCategories && (
          <button
            className={`${
              currentCategorie === null ? "bg-primary" : "bg-gray"
            } px-3 py-2 font-medium rounded-md duration-300 min-w-max w-full hover:bg-primary`}
            onClick={() => setCurrentCategorie(null)}
          >
            Все меню
          </button>
        )}
        {!loadingCategories &&
          cetegoriesItems.map((item) => (
            <button
              key={item.id}
              className={`${
                currentCategorie === item.id ? "bg-primary" : "bg-gray"
              } px-3 py-2 font-medium rounded-md duration-300 min-w-max w-full hover:bg-primary`}
              onClick={() => setCurrentCategorie(item.id)}
            >
              {item.name}
            </button>
          ))}
      </div>

      {isLoading && <p className="text-center mb-5">Завантаження...</p>}
      {isError && (
        <p className="text-red-500 text-center mb-5">
          Помилка: {error?.status}
        </p>
      )}
      {!isLoading && menuItems ? (
        <div className="flex flex-wrap items-stretch gap-10 sm:gap-5">
          {menuItems
            .filter(
              (el) =>
                el.category_id === currentCategorie || currentCategorie === null
            )
            .map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col w-[calc(20%_-_32px)] pb-4 border-b border-primary lg:w-[calc(25%_-_30px)] md:w-[calc(33%_-_25px)] sm:w-[calc(50%_-_10px)]"
              >
                {item.is_new && (
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-[#640001] text-sm sm:p-1 sm:text-xs">
                    New
                  </span>
                )}
                <Image
                  src={item.image_url === null ? NoPhoto : `${item.image_url}`}
                  alt={`Bunker cafe - ${item.name} | м.Фастів`}
                  // placeholder="blur"
                  className="w-full h-[200px] object-cover object-center rounded-xl mb-6 sm:h-[150px]"
                  width={300}
                  height={300}
                />
                <h4 className="text-lg text-center font-bold text-primary mb-3">
                  {item.name}
                </h4>
                <p className="tex-sm text-center mb-2">{item.ingredients}</p>
                <strong className="text-xl text-center font-bold">
                  {item.price} грн | {item.portion_size}
                </strong>
              </div>
            ))}
        </div>
      ) : (
        !isLoading && <p>Нічого не знайдено</p>
      )}
    </div>
  );
};

export default Menu;
