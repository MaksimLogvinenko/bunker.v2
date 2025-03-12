"use client";
import React from "react";
import Image from "next/image";
import Map, { Marker } from "react-map-gl";
//styles
import "mapbox-gl/dist/mapbox-gl.css";
//img
import MarkerImg from "@/assets/img/pin.png";

const MapBox = () => {
  const [showMap, setShowMap] = React.useState(false);

  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoieHh0ZW50YW1ha3NvbmUiLCJhIjoiY2w5aW1hNjB6MnI5dTN2cXRhbXl4Y2kxNyJ9.eMG7018vW2EpKxzDBaFeyg"
      initialViewState={{
        longitude: 29.92335914220719,
        latitude: 50.082168169079644,
        zoom: 13,
      }}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      className="w-full visible"
    >
      <Marker
        longitude={29.92335914220719}
        latitude={50.082168169079644}
        anchor="bottom"
      >
        <div className="relative block w-[150px] h-[50px] cursor-pointer">
          <a
            href="https://www.google.com/maps/dir//Bunker+Cafe,+%D0%BA%D0%B0%D1%84%D0%B5%22Bunker,+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%86%D0%B2%D0%B0%D0%BD%D0%B0+%D0%A1%D1%82%D1%83%D0%BF%D0%B0%D0%BA%D0%B0,+23,+%D0%9F%D0%BE%D0%B4%D0%B2%D0%B0%D0%BB,+%D0%A4%D0%B0%D1%81%D1%82%D1%96%D0%B2,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08500/@50.0821347,29.9233664,17z/data=!4m17!1m7!3m6!1s0x40d355fae3efc45d:0x1e311dbccb6104d4!2sBunker+Cafe!8m2!3d50.0821347!4d29.9233664!16s%2Fg%2F11qy71g3y5!4m8!1m0!1m5!1m1!1s0x40d355fae3efc45d:0x1e311dbccb6104d4!2m2!1d29.9233664!2d50.0821347!3e2?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className={`${
              showMap ? "opacity-1 visible" : "opacity-0 invisible"
            } absolute w-max left-1/2 -top-10 -translate-x-1/2 duration-300 p-2 rounded-md bg-darkLight`}
          >
            Прокласти шлях
          </a>
          <Image
            layout={"fill"}
            objectFit={"contain"}
            src={MarkerImg}
            alt="Bunker Cafe Фастів"
            onClick={() => setShowMap(!showMap)}
          />
        </div>
      </Marker>
    </Map>
  );
};

export default MapBox;
