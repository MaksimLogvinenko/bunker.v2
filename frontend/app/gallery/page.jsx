import React from "react";
//components
import GalleryPhotos from "@/components/GalleryPhotos";
//img
import MainBgImg from "@/assets/img/gallery/main-bg.jpg";

export const metadata = {
  title: "Кафе Bunker - Фастів | Галерея",
  description:
    "Кафе Bunker місто Фастів, Кафе Bunker з дружньою атмосферою розташоване недалеко від центра міста. Ми завжди радіємо нашим гостям. Тут Ви можете скуштувати різноманітну кухню від українського борщика до американського бургера. Це місце в якому можна гарно відпочити, зустрітися з друзями, та відволіктися від буденних справ. Ти точно захочеш сюди повернутися.",
};

const Gallery = () => {
  return (
    <>
      <main
        className="flex flex-col justify-center min-h-[400px] h-full bg-no-repeat bg-cover bg-center pt-[120px] pb-10 bg-blend-multiply bg-dark/90"
        style={{ backgroundImage: `url(${MainBgImg.src})` }}
      >
        <div className="container">
          <div className="relative flex justify-center items-center md:flex-col md:items-start">
            <div className="flex flex-col text-center">
              <h3 className="subtitle-section">Gallery</h3>
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
          <GalleryPhotos />
        </div>
      </section>
    </>
  );
};

export default Gallery;
