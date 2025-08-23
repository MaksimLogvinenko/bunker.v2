import React from "react";
import { contacts } from "@/helpers/variebles";
//components
import MapBox from "@/components/MapBox";
import ContactForm from "@/components/ContactForm";
//img
import MainBgImg from "@/assets/img/contacts/main-bg.jpg";

export const metadata = {
  title: "Кафе Bunker - Фастів | Контакти",
  description:
    "Кафе Bunker місто Фастів, Кафе Bunker з дружньою атмосферою розташоване недалеко від центра міста. Ми завжди радіємо нашим гостям. Тут Ви можете скуштувати різноманітну кухню від українського борщика до американського бургера. Це місце в якому можна гарно відпочити, зустрітися з друзями, та відволіктися від буденних справ. Ти точно захочеш сюди повернутися.",
};

const Contacts = () => {
  return (
    <>
      <main
        className="flex flex-col justify-center min-h-[400px] h-full bg-no-repeat bg-cover bg-center pt-[120px] pb-10 bg-blend-multiply bg-dark/90"
        style={{ backgroundImage: `url(${MainBgImg.src})` }}
      >
        <div className="container">
          <div className="relative flex justify-center items-center md:flex-col md:items-start">
            <div className="flex flex-col text-center">
              <h3 className="subtitle-section">Contacts</h3>
              <h1 className="text-white text-[60px] leading-[68px] font-bold mb-8 sm:text-4xl sm:mb-5">
                <span className="text-primary">См</span>акуйте найкраще разом з
                нами
              </h1>
            </div>
          </div>
        </div>
      </main>

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
                  <span className="text-primary ml-2">Пн-Нд: 11:00 — 23:00</span>
                </h6>
              </div>
            </div>

            <div className="h-[300px] w-1/2 overflow-hidden rounded-md md:w-full">
              <MapBox />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-[70px] sm:py-[50px]">
        <div className="container">
          <h3 className="subtitle-section mb-2 text-center">Review</h3>
          <h2 className="title-section mb-[56px] text-center max-w-[600px] mx-auto sm:mb-8">
            <span className="text-primary">За</span>лиште свій коментар про наш
            заклад
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contacts;
