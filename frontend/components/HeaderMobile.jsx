"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineCloseCircle } from "react-icons/ai";

const HeaderMobile = ({ menuList, showMenu, setShowMenu }) => {
  const pathname = usePathname();

  return (
    <aside
      className={`${
        showMenu ? "translate-x-0" : "translate-x-full"
      } hidden md:flex z-30 justify-center items-center fixed w-full h-full min-h-[100dvh] bg-dark/90 backdrop-blur-[4px] duration-300`}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          setShowMenu(false);
        }}
        className="absolute text-4xl text-white top-5 right-5"
      >
        <AiOutlineCloseCircle />
      </button>
      <div className="container">
        <div className="flex flex-col">
          <h5 className="text-primary text-4xl text-center font-bold mb-16">
            Valhalla <span className="text-white">cafe</span>
          </h5>
          <nav className="flex justify-center">
            <ul className="flex flex-col gap-8 text-center">
              {menuList.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <li key={item.title}>
                    <Link
                      onClick={() => {
                        setTimeout(() => setShowMenu(false), 500);
                      }}
                      className="relative font-inter text-3xl text-white duration-300 hover:text-primary sm:text-2xl"
                      href={item.url}
                    >
                      {item.title}
                      <div
                        className={
                          isActive
                            ? "absolute w-[7px] h-[7px] bg-primary -bottom-3 left-1/2 -translate-x-1/2 rounded-full opacity-100 visible duration-300"
                            : "opacity-0 invisible"
                        }
                      ></div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default HeaderMobile;
