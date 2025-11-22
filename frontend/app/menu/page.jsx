import React from "react";
//component
import Menu from "@/components/Menu";
//img
import MainBgImg from "@/assets/img/menu/main-bg.jpg";

export const metadata = {
  title: "Кафе Bunker - Фастів | Меню",
  description:
    "Бункер кафе у Фастові – це місце, де все по-справжньому! Твій локальний бар, де ігри, живі розмови та сміливий дизайн створюють атмосферу, що чіпляє з перших секунд. 'Бункер' – це не просто назва: вона про твій простір для відпочинку і про стіни, що дарували захист у найважчі періоди, і вистояли попри складнощі . Ми сильніші, ніж будь-коли, і готові стати твоєю новою точкою збору. Приєднуйся до руху!",
};

const page = () => {
  return (
    <>
      <main
        className="flex flex-col justify-center min-h-[400px] h-full bg-no-repeat bg-cover bg-center pt-[120px] pb-10 bg-blend-multiply bg-dark/90"
        style={{ backgroundImage: `url(${MainBgImg.src})` }}
      >
        <div className="container">
          <div className="relative flex justify-center items-center md:flex-col md:items-start">
            <div className="flex flex-col text-center">
              <h3 className="subtitle-section">Menu</h3>
              <h1 className="text-white text-[60px] leading-[68px] font-bold mb-8 sm:text-4xl sm:mb-5">
                <span className="text-primary">Об</span>ирай улюблений смаколик
              </h1>
            </div>
          </div>
        </div>
      </main>

      <section className="py-[70px] sm:py-[50px]">
        <div className="container">
          <Menu />
        </div>
      </section>
    </>
  );
};

export default page;
