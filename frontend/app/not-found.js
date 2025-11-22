import React from "react";
import Link from "next/link";
//img
import NotFoundBgImg from "../assets/img/notfound/notfound-bg.jpg";

export const metadata = {
  title: "Кафе Bunker - Фастів | Сторінку не знайдено",
  description:
    "Бункер кафе у Фастові – це місце, де все по-справжньому! Твій локальний бар, де ігри, живі розмови та сміливий дизайн створюють атмосферу, що чіпляє з перших секунд. 'Бункер' – це не просто назва: вона про твій простір для відпочинку і про стіни, що дарували захист у найважчі періоди, і вистояли попри складнощі . Ми сильніші, ніж будь-коли, і готові стати твоєю новою точкою збору. Приєднуйся до руху!",
};

const NotFound = () => {
  return (
    <>
      <main
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
      </main>
    </>
  );
};

export default NotFound;
