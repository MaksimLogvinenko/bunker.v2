"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
//img
import { FaBars } from "react-icons/fa";

const Header = ({ menuList, setShowMenu }) => {
  const pathname = usePathname();

  return (
    <header className="absolute w-full mt-[45px] sm:mt-[30px]">
      <div className="container">
        <div className="flex flex-col">
          <h5 className="text-primary text-2xl text-center font-bold mb-4">
            Bunker <span className="text-white">cafe</span>
          </h5>
          <div className="flex justify-between items-center gap-5">
            <ul className="flex items-center gap-8 md:hidden">
              {menuList.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <li key={item.title}>
                    <Link
                      className="relative font-inter text-white duration-300 hover:text-primary"
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
            <a
              className="text-lg duration-300 text-white hover:text-primary sm:text-base"
              href="tel:380933817902"
            >
              +38 093 381 7902
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowMenu(true);
              }}
              className="hidden md:flex text-3xl text-white"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
