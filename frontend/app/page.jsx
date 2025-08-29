import React from "react";
import Link from "next/link";
import Image from "next/image";
import { social, contacts } from "@/helpers/variebles";
//component
import CategorySlider from "@/components/CategorySlider";
import NewMenuItems from "@/components/NewMenuItems";
import MapBox from "@/components/MapBox";
import CommentSlider from "@/components/CommentSlider";
//img
import MainBgImg from "@/assets/img/gallery/gallery-1.jpg";
import MainImg from "@/assets/img/home/main.png";
import About1Img from "@/assets/img/home/about-1.jpg";
import About2Img from "@/assets/img/home/about-2.png";
import About3Img from "@/assets/img/home/about-3.png";
// import ChooseImg from "@/assets/img/home/chose.png";
import StockBgImg from "@/assets/img/home/stock-bg.jpg";
import Stock1Img from "@/assets/img/home/stock-1.png";
import Stock2Img from "@/assets/img/home/stock-2.png";
import Stock3Img from "@/assets/img/home/stock-3.png";
import Stock4Img from "@/assets/img/home/stock-4.png";
import CommentFlowerImg from "@/assets/img/home/comment-flower.png";
import { FaViber } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
// import { MdOutlineFreeBreakfast, MdOutlineDinnerDining } from "react-icons/md";
// import { LuBeef } from "react-icons/lu";

export const metadata = {
  title: "Кафе Bunker - Фастів | Головна",
  description:
    "Кафе Bunker місто Фастів, Кафе Bunker з дружньою атмосферою розташоване недалеко від центра міста. Ми завжди радіємо нашим гостям. Тут Ви можете скуштувати різноманітну кухню від українського борщика до американського бургера. Це місце в якому можна гарно відпочити, зустрітися з друзями, та відволіктися від буденних справ. Ти точно захочеш сюди повернутися.",
};

export default function Home() {
  return (
    <>
      <main>
        <section
          className="flex flex-col justify-center py-32 h-full bg-no-repeat bg-cover bg-center bg-blend-multiply bg-black/60 sm:py-44"
          style={{ backgroundImage: `url(${MainBgImg.src})` }}
        >
          <div className="container">
            <div className="relative flex justify-between items-center gap-10 mt-[76px] md:flex-col md:items-start">
              <div className="flex items-center gap-8 md:relative md:z-10 sm:gap-5">
                <div className=" relative flex flex-col gap-6 items-center text-2xl text-white sm:gap-5">
                  <div className="absolute h-[160px] w-[1px] bg-white -top-[200px] sm:h-[120px] sm:-top-[160px]"></div>
                  <a href={social.instagram} target="_blank">
                    <AiFillInstagram className="duration-300 hover:text-primary" />
                  </a>
                  <a href={social.facebook} target="_blank">
                    <AiFillFacebook className="duration-300 text-primary hover:text-primary" />
                  </a>
                  <a href={social.viber} target="_blank">
                    <FaViber className="duration-300 hover:text-primary" />
                  </a>
                  <div className="absolute h-[160px] w-[1px] bg-white -bottom-[200px] sm:h-[120px] sm:-bottom-[160px]"></div>
                </div>

                <div className="flex flex-col max-w-[470px] md:max-w-full">
                  {/* <h3 className="subtitle-section">Welcome to Bunker Cafe!</h3> */}
                  <h1 className="text-white text-[60px] leading-[68px] font-bold mb-8 sm:text-4xl sm:mb-5">
                    <span className="text-primary">Ласкаво</span> просимо до
                    Кафе Bunker
                  </h1>
                  <p className="text-white font-inter mb-8">
                    Кращий BUNKER твого міста!
                  </p>
                  <Link
                    href="/menu"
                    className="btn-primary w-[190px] sm:w-full"
                  >
                    Перейти до меню
                  </Link>
                </div>
              </div>

              <Image
                className="w-[600px] lg:w-[400px] md:absolute md:-bottom-[180px] md:-right-[90px] md:w-[350px] sm:hidden"
                src={MainImg}
                alt="Ласкаво просимо до Кафе Bunker"
              />
            </div>
          </div>
        </section>

        <section className="pt-[120px] pb-[70px] sm:py-[50px]">
          <div className="container">
            <div className="flex items-start gap-[100px] md:gap-10 sm:flex-col">
              <div className="flex flex-col w-1/2 sm:w-full">
                <h3 className="subtitle-section mb-2">About us</h3>
                <h2 className="title-section mb-8">
                  <span className="text-primary">Ко</span>ротко про наше кафе
                </h2>
                <p className="paragraph-section mb-6">
                  Бункер кафе у Фастові – це місце, де все по-справжньому! Твій
                  локальний бар, де ігри, живі розмови та сміливий дизайн
                  створюють атмосферу, що чіпляє з перших секунд. "Бункер" – це
                  не просто назва: вона про твій простір для відпочинку і про
                  стіни, що дарували захист у найважчі періоди, і вистояли попри
                  складнощі . Ми сильніші, ніж будь-коли, і готові стати твоєю
                  новою точкою збору. Приєднуйся до руху!
                </p>
                <ul className="flex flex-col gap-6 mb-8 ml-[10px]">
                  <li className="list-['\2713'] pl-[10px]">
                    Драйв, ігри, справжні розмови
                  </li>
                  <li className="list-['\2713'] pl-[10px]">Своя атмосфера</li>
                  <li className="list-['\2713'] pl-[10px]">
                    Смачна і зрозуміла їжа
                  </li>
                  <li className="list-['\2713'] pl-[10px]">
                    Фірмові настоянки
                  </li>
                  <li className="list-['\2713'] pl-[10px]">
                    Історія, яку ти твориш
                  </li>
                </ul>
                <Link href="/about" className="btn-primary w-[190px] sm:w-full">
                  Читати більше
                </Link>
              </div>

              <div className="grid grid-cols-2 grid-rows-[auto,minmax(0,auto)] gap-4 w-1/2 sm:w-full">
                <Image
                  className="col-span-2 rounded-md h-[330px] object-cover object-bottom sm:h-auto"
                  src={About1Img}
                  alt=""
                  placeholder="blur"
                />
                <Image
                  className="row-start-2 rounded-md h-[195px] object-cover object-bottom sm:h-full"
                  src={About2Img}
                  alt=""
                  placeholder="blur"
                />
                <Image
                  className="row-start-2 rounded-md h-[195px] object-cover object-bottom sm:h-full"
                  src={About3Img}
                  alt=""
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-[70px] sm:py-[50px]">
          <div className="container">
            <div className="flex flex-col">
              <h3 className="subtitle-section mb-2 text-center">Gallery</h3>
              <h2 className="title-section mb-[56px] text-center sm:mb-8">
                <span className="text-primary">Фо</span>тогалерея закладу
              </h2>
              <CategorySlider />
              <Link
                href="/gallery"
                className="btn-primary max-w-max mx-auto mt-10 sm:mt-7 sm:max-w-full"
              >
                Дивитись всю галерею
              </Link>
            </div>
          </div>
        </section>

        {/* <section className="py-[70px] sm:py-[50px]">
          <div className="container">
            <div className="flex items-center gap-[100px] md:flex-col md:gap-[50px]">
              <div className="w-1/2 md:w-full md:mx-auto">
                <Image
                  className="w-full"
                  src={ChooseImg}
                  alt=""
                  placeholder="blur"
                />
              </div>

              <div className="flex flex-col w-1/2 md:w-full">
                <h3 className="subtitle-section mb-2">Business lunch</h3>
                <h2 className="title-section mb-8">
                  <span className="text-primary">За</span>мовте собі бізнес-ланч
                </h2>
                <p className="paragraph-section mb-8">
                  У нашому кафе "Bunker" ви маєте чудову можливість
                  насолодитися смачним та ситним бізнес-ланчем. Ми пропонуємо
                  різноманітні страви, щоб задовольнити ваші гастрономічні
                  уподобання. Наші бізнес-ланчі включають в себе вишукані
                  страви, виготовлені з найсвіжіших продуктів. Приходьте, або
                  замовляйте та насолоджуйтеся обідом у "Bunker" — смачно,
                  вишукано, затишно.
                </p>
                <div className="flex gap-8 mb-8 sm:gap-5">
                  <div className="flex flex-col items-center sm:w-1/3">
                    <div className="flex items-center justify-center rounded-md bg-primary w-[100px] h-[100px] duration-300 mb-2 hover:bg-[#be5737] hover:scale-105 sm:w-full sm:h-[90px]">
                      <MdOutlineFreeBreakfast className="text-[56px]" />
                    </div>
                    <span className="font-inter text-lg">Сніданок </span>
                  </div>
                  <div className="flex flex-col items-center sm:w-1/3">
                    <div className="flex items-center justify-center rounded-md bg-primary w-[100px] h-[100px] duration-300 mb-2 hover:bg-[#be5737] hover:scale-105 sm:w-full sm:h-[90px]">
                      <MdOutlineDinnerDining className="text-[56px]" />
                    </div>
                    <span className="font-inter text-lg">Обід</span>
                  </div>
                  <div className="flex flex-col items-center sm:w-1/3">
                    <div className="flex items-center justify-center rounded-md bg-primary w-[100px] h-[100px] duration-300 mb-2 hover:bg-[#be5737] hover:scale-105 sm:w-full sm:h-[90px]">
                      <LuBeef className="text-[56px]" />
                    </div>
                    <span className="font-inter text-lg">Вечеря</span>
                  </div>
                </div>

                <div className="relative overflow-hidden inline-flex items-center gap-[47px] bg-white py-[17px] px-[45px] rounded-md max-w-[375px]">
                  <div className="absolute left-0 top-0 h-full bg-primary w-[10px]"></div>
                  <span className="text-[48px] leading-[56px] font-bold text-primary">
                    50+
                  </span>
                  <div className="flex flex-col text-dark">
                    <h5 className="text-xl font-inter">Різноманітних</h5>
                    <h6 className="text-2xl font-bold">Страв</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-[70px] sm:py-[50px]">
          <div
            className="py-[110px] bg-no-repeat bg-center bg-cover bg-blend-multiply bg-[#0D0D0D]/80 md:py-[70px]"
            style={{ backgroundImage: `url(${StockBgImg.src})` }}
          >
            <div className="container">
              <div className="flex justify-between items-start gap-[100px] lg:gap-5 md:flex-wrap md:gap-x-5 md:gap-y-10">
                <div className="flex flex-col items-center md:w-[calc(50%_-_10px)]">
                  <Image
                    className="w-[120px] mb-6 lg:w-[80px] md:mb-5"
                    src={Stock3Img}
                    alt="Bunker cafe - Твій простір"
                    placeholder="blur"
                  />
                  <h4 className="text-xl font-bold mb-6 text-center lg:text-xl md:mb-5 sm:mb-2">
                    Твій простір
                  </h4>
                  {/* <h5 className="text-[40px] leading-[48px] font-bold lg:text-3xl">
                  420
                </h5> */}
                </div>
                <div className="flex flex-col items-center md:w-[calc(50%_-_10px)]">
                  <Image
                    className="w-[120px] mb-6 lg:w-[80px] md:mb-5"
                    src={Stock2Img}
                    alt="Bunker cafe - Завжди по-справжньому"
                    placeholder="blur"
                  />
                  <h4 className="text-xl font-bold mb-6 text-center lg:text-xl md:mb-5 sm:mb-2">
                    Завжди по-справжньому
                  </h4>
                  {/* <h5 className="text-[40px] leading-[48px] font-bold lg:text-3xl">
                  320
                </h5> */}
                </div>
                <div className="flex flex-col items-center md:w-[calc(50%_-_10px)]">
                  <Image
                    className="w-[120px] mb-6 lg:w-[80px] md:mb-5"
                    src={Stock1Img}
                    alt="Bunker cafe - Ігри, Розмови, Вайб"
                    placeholder="blur"
                  />
                  <h4 className="text-xl font-bold mb-6 text-center lg:text-xl md:mb-5 sm:mb-2">
                    Ігри, Розмови, Вайб
                  </h4>
                  {/* <h5 className="text-[40px] leading-[48px] font-bold lg:text-3xl">
                  30+
                </h5> */}
                </div>
                <div className="flex flex-col items-center md:w-[calc(50%_-_10px)]">
                  <Image
                    className="w-[120px] mb-6 lg:w-[80px] md:mb-5"
                    src={Stock4Img}
                    alt="Bunker cafe - Стіни, що пам'ятають"
                    placeholder="blur"
                  />
                  <h4 className="text-xl font-bold mb-6 text-center lg:text-xl md:mb-5 sm:mb-2">
                    Стіни, що пам'ятають
                  </h4>
                  {/* <h5 className="text-[40px] leading-[48px] font-bold lg:text-3xl">
                  220
                </h5> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-[70px] sm:py-[50px]">
          <div className="container">
            <div className="flex flex-col">
              <h3 className="subtitle-section mb-2 text-center">
                New menu items
              </h3>
              <h2 className="title-section mb-[56px] text-center sm:mb-8">
                <span className="text-primary">Но</span>винки меню
              </h2>
              <NewMenuItems />
            </div>
          </div>
        </section>

        <section className="relative py-[70px] sm:py-[50px]">
          <img
            className="absolute left-0 top-0"
            src={CommentFlowerImg.src}
            alt="Відгуки Bunker cafe"
          />
          <div className="container">
            <div className="flex flex-col">
              <h3 className="subtitle-section mb-2 text-center">
                Testimonials
              </h3>
              <h2 className="title-section mb-[56px] text-center sm:mb-8">
                <span className="text-primary">Що</span> кажуть наші гості
              </h2>
              <CommentSlider />
            </div>
          </div>
        </section>

        <section className="relative py-[70px] sm:py-[50px]">
          <div className="container">
            <div className="flex items-start justify-between gap-10 md:flex-col">
              <div className="flex flex-col">
                <h2 className="title-section mb-[56px] sm:mb-8">
                  <span className="text-primary">Ко</span>нтакти
                </h2>

                <div className="flex flex-col gap-5">
                  {contacts.map((item, index) => (
                    <a
                      key={item.title + index}
                      href={item.link}
                      target={item.target}
                      className="flex items-center gap-2 text-xl sm:text-base"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  ))}
                  <h6 className="text-xl sm:text-base">
                    Графік роботи:
                    <span className="text-primary ml-2">
                      Пн-Нд: 11:00 — 23:00
                    </span>
                  </h6>
                </div>
              </div>

              <div className="h-[300px] w-1/2 overflow-hidden rounded-md md:w-full">
                <MapBox />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
