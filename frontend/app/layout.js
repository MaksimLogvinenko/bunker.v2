"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import { menuList } from "@/helpers/variebles";
import { Providers } from "./providers";
//components
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import Footer from "@/components/Footer";
//styles
import "react-toastify/dist/ReactToastify.css";
import "@/assets/css/fonts.css";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <html lang="uk">
      <body className="relative">
        <Providers>
          <ToastContainer theme="dark" />
          <Header menuList={menuList} setShowMenu={setShowMenu} />
          <HeaderMobile
            menuList={menuList}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
