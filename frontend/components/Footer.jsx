"use client";
import React from "react";
import Link from "next/link";
import { menuList, social } from "@/helpers/variebles";
//img
import { PiClockClockwise } from "react-icons/pi";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaViber } from "react-icons/fa";

const Footer = () => {
  const [currYear, setCurrYear] = React.useState(2025);

  React.useEffect(() => {
    const date = new Date();
    setCurrYear(date.getFullYear());
  }, []);

  return (
    <footer className="pt-[70px] sm:pt-[50px]">
      <div className="container">
        <div className="flex justify-between items-start gap-10 border-t border-primary py-[65px] md:gap-5 sm:py-10 sm:flex-col sm:gap-10">
          <div className="flex-col w-1/3 sm:w-full">
            {/* <h3 className="text-2xl font-bold mb-6 sm:mb-3">Про нас</h3>
            <p className="font-inter mb-8 md:text-xs">
              В кафе «Bunker» на вас чекає вишукана кухня, привітний персонал і
              приємна атмосфера.
            </p> */}
            <div className="flex items-start">
              <div className="flex items-center justify-center w-[75px] h-[75px] rounded-md bg-primary mr-4 md:w-10 md:h-10">
                <PiClockClockwise className="text-[40px] md:text-2xl" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-inter text-lg">Графік роботи</h4>
                <span className="text-sm font-inter">
                  Пн - Нд (11:00 - 23:00)
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-1/3 sm:w-full sm:items-start">
            <div className="flex flex-col max-w-max">
              <h3 className="text-2xl font-bold mb-6 sm:mb-3">Меню</h3>
              <ul className="flex flex-col gap-3">
                {menuList.map((item) => (
                  <li key={item.title}>
                    <Link
                      className="relative font-inter text-white duration-300 hover:text-primary"
                      href={item.url}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col w-1/3 sm:w-full">
            <h3 className="text-2xl font-bold mb-6 sm:mb-3">
              Соціальні мережі
            </h3>
            <div className="flex items-start gap-4">
              <a
                className="flex items-center justify-center w-[50px] h-[50px] rounded-md bg-white group duration-300 md:w-10 md:h-10"
                href={social.instagram}
                target="_blank"
              >
                <AiFillInstagram className=" duration-300 text-black text-2xl group-hover:text-primary" />
              </a>
              <a
                className="flex items-center justify-center w-[50px] h-[50px] rounded-md bg-white group duration-300 md:w-10 md:h-10"
                href={social.facebook}
                target="_blank"
              >
                <AiFillFacebook className="duration-300 text-black text-2xl group-hover:text-primary" />
              </a>
              <a
                className="flex items-center justify-center w-[50px] h-[50px] rounded-md bg-white group duration-300 md:w-10 md:h-10"
                href={social.viber}
                target="_blank"
              >
                <FaViber className="duration-300 text-black text-2xl group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray py-5">
        <div className="container">
          <p className="font-inter text-sm sm:text-xs sm:text-center">
            © {currYear} Кафе "Bunker". Розроблено{" "}
            <a className="underline" href="mailto:maksimlogvinenko98@gmail.com">
              WebDoze Studio
            </a>
            . Всі права захищено.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
