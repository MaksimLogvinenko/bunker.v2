import React from "react";
import Link from "next/link";
//img
import NotFoundBgImg from "../assets/img/notfound/notfound-bg.jpg";

export const metadata = {
  title: "Кафе Bunker - Фастів | Сторінку не знайдено",
  description:
    "Кафе Bunker місто Фастів, Кафе Bunker з дружньою атмосферою розташоване недалеко від центра міста. Ми завжди радіємо нашим гостям. Тут Ви можете скуштувати різноманітну кухню від українського борщика до американського бургера. Це місце в якому можна гарно відпочити, зустрітися з друзями, та відволіктися від буденних справ. Ти точно захочеш сюди повернутися.",
};

const NotFound = () => {
  return (
    <section
      className="flex justify-center items-center h-[100dvh] bg-no-repeat bg-cover bg-center pt-[120px] pb-10 bg-blend-multiply bg-dark/90"
      style={{ backgroundImage: `url(${NotFoundBgImg.src})` }}
    >
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="uppercase text-[320px] leading-none font-bold sm:text-9xl">
            404
          </h2>
          <p className="text-4xl mb-10 sm:text-3xl">
            На жаль сторінку не знайдено
          </p>
          <Link className="btn-primary w-[220px] mx-auto" href="/">
            На головну
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
