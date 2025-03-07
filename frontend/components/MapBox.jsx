"use client";
import React from "react";
import Image from "next/image";
import Map, { Marker } from "react-map-gl";

import MarkerImg from "@/assets/img/pin.png";

import "mapbox-gl/dist/mapbox-gl.css";

const MapBox = () => {
  const [showMap, setShowMap] = React.useState(false);

  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoieHh0ZW50YW1ha3NvbmUiLCJhIjoiY2w5aW1hNjB6MnI5dTN2cXRhbXl4Y2kxNyJ9.eMG7018vW2EpKxzDBaFeyg"
      initialViewState={{
        longitude: 29.907804239636587,
        latitude: 50.083989889106135,
        zoom: 13,
      }}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      className="w-full visible"
    >
      <Marker
        longitude={29.907804239636587}
        latitude={50.083989889106135}
        anchor="bottom"
      >
        <div className="relative block w-[150px] h-[50px] cursor-pointer">
          <a
            href="https://www.google.com/maps/dir//VALHALLA,+%D0%BF%D1%80%D0%BE%D0%B2%D1%83%D0%BB%D0%BE%D0%BA+%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%B0+%D0%9C%D1%83%D0%B4%D1%80%D0%BE%D0%B3%D0%BE,+41+%D0%90,+%D0%A4%D0%B0%D1%81%D1%82%D1%96%D0%B2,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB.,+08500/@50.0839138,29.8665405,13z/data=!4m17!1m7!3m6!1s0x40d355818ad2e4c9:0xe9a9d7ec0b9b1215!2sVALHALLA!8m2!3d50.083866!4d29.9078257!16s%2Fg%2F11vhh7v83t!4m8!1m0!1m5!1m1!1s0x40d355818ad2e4c9:0xe9a9d7ec0b9b1215!2m2!1d29.9078257!2d50.083866!3e2?entry=ttu"
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
            alt="Valhalla Cafe Фастів"
            onClick={() => setShowMap(!showMap)}
          />
        </div>
      </Marker>
    </Map>
  );
};

export default MapBox;
