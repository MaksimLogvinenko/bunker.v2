import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImSpoonKnife } from "react-icons/im";

import MainBgImg from "@/assets/img/about/main-bg.jpg";
import About1Img from "@/assets/img/home/about-1.jpg";
import About2Img from "@/assets/img/home/about-2.png";
import About3Img from "@/assets/img/home/about-3.png";
import DeliveryImg from "@/assets/img/about/delivery.png";

export const metadata = {
  title: "Valhalla cafe - Про нас",
  description:
    "В кафе «Valhalla» на вас чекає вишукана Європейська кухня, привітний персонал і приємна атмосфера. Швидка доставка та смачні, комплексні обіди по місту. Проведення банкетів, VIP-кімната та якісне обслуговування.",
};

const About = () => {
  return (
    <>
      <main
        className="flex flex-col justify-center min-h-[400px] h-full bg-no-repeat bg-cover bg-center pt-[120px] pb-10 bg-blend-multiply bg-dark/90"
        style={{ backgroundImage: `url(${MainBgImg.src})` }}
      >
        <div className="container">
          <div className="relative flex justify-center items-center md:flex-col md:items-start">
            <div className="flex flex-col text-center">
              <h3 className="subtitle-section">About us</h3>
              <h1 className="text-white text-[60px] leading-[68px] font-bold mb-8 sm:text-4xl sm:mb-5">
                <span className="text-primary">См</span>акуйте найкраще разом з
                нами
              </h1>
            </div>
          </div>
        </div>
      </main>

      <section className="py-[70px] sm:py-[50px]">
        <div className="container">
          <div className="flex items-start gap-[100px] md:gap-10 sm:flex-col">
            <div className="grid grid-cols-2 grid-rows-[auto,minmax(0,auto)] gap-4 w-1/2 sm:w-full">
              <Image
                className="w-full col-span-2 rounded-md h-[330px] object-cover object-center sm:h-auto"
                src={About1Img}
                alt=""
                placeholder="blur"
              />
              <Image
                className="w-full row-start-2 rounded-md h-[195px] object-cover object-center sm:h-auto"
                src={About2Img}
                alt=""
                placeholder="blur"
              />
              <Image
                className="w-full row-start-2 rounded-md h-[195px] object-cover object-center sm:h-auto"
                src={About3Img}
                alt=""
                placeholder="blur"
              />
            </div>

            <div className="flex flex-col w-1/2 sm:w-full">
              <h3 className="subtitle-section mb-2">About us</h3>
              <h2 className="title-section mb-8">
                <span className="text-primary">Пр</span>о наш заклад
              </h2>
              <p className="paragraph-section mb-6">
                В кафе "Valhalla" на вас чекає вишукана Європейська кухня, яка
                вражає різноманіттям смаків та вишуканістю страв. Наш привітний
                персонал завжди готовий зробити ваше відвідування приємним та
                комфортним, надаючи вам високий рівень обслуговування. У
                "Valhalla" ви можете також скористатися швидкою доставкою та
                насолоджуватися смачними, комплексними обідами прямо до вашого
                дому. Ми також пропонуємо проведення банкетів у нашому затишному
                закладі, VIP-кімнату для особливих подій та завжди гарантуємо
                якісне обслуговування на кожному етапі вашого перебування у
                "Valhalla".
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[70px] sm:py-[50px]">
        <div className="container">
          <div className="flex justify-center items-start gap-10 mb-5 md:gap-5 sm:flex-col">
            <Image
              className="w-[400px] h-auto md:w-1/2 sm:w-full"
              src={DeliveryImg}
              alt="Picture of the author"
            />

            <div className="flex flex-col w-[400px] md:w-1/2 sm:w-full">
              <div className="flex items-center gap-3 max-w-max p-2 rounded-md bg-[#f02326] mb-12 sm:mb-6">
                <ImSpoonKnife className="text-4xl" />
                <h5 className="text-xl uppercase">
                  Food <br />
                  Delivery
                </h5>
              </div>
              <p>
                У кафе "Valhalla" ми розуміємо, що іноді ви хочете насолодитися
                нашими вишуканими стравами прямо вдома. Тому ми з радістю
                пропонуємо послугу швидкої доставки до вашого дому, де ви
                зможете насолоджуватися смаком наших страв, не виходячи з
                затишку власного житла.
              </p>
            </div>
          </div>
          <Link
            href="/menu"
            className="btn-primary flex justify-center mx-auto w-[190px] sm:w-full"
          >
            Перейти до меню
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
