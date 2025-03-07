import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

export const menuList = [
  {
    title: "Головна",
    url: "/",
  },
  {
    title: "Про нас",
    url: "/about",
  },
  {
    title: "Меню",
    url: "/menu",
  },
  {
    title: "Галерея",
    url: "/gallery",
  },
  {
    title: "Контакти",
    url: "/contacts",
  },
];

export const commentsList = [
  {
    star: 5,
    comment:
      "Найкращий сервіс, привітний персонал, та дуже смачна кухня, задоволений на всі сто відсотків!!! Рекомендую",
    author: "Владислав К.",
  },
  {
    star: 4,
    comment:
      "Завітали до закладу у суботу, не дивлячись на повну посадку, все було дуже якісно швидко та смачно, найкращий заклад в місті!",
    author: "Марія К.",
  },
  {
    star: 5,
    comment:
      "Рекомендую данний заклад! Круте поєднання різної кухні та затишна атмосфера!",
    author: "Михайло З.",
  },
];

export const social = {
  instagram: "https://instagram.com/valhalla._cafe?igshid=YzAwZjE1ZTI0Zg==",
  viber: "viber://chat?number=%2B380930051243",
  facebook:
    "https://www.facebook.com/people/Valhalla-Valhalla/pfbid02fBW1xTEVZbjYbgDzwXiHPLmmHgtWoe318WRzRTDrKuTD1UKJp8ZLBgCUyhpjEwtBl/",
};

export const contacts = [
  {
    icon: AiOutlinePhone,
    link: "tel:380930051243",
    title: "+38(093) 005 12 43",
    target: "_self",
  },
  {
    icon: AiOutlineMail,
    link: "mailto:valhallav65@gmail.com",
    title: "valhallav65@gmail.com",
    target: "_self",
  },
  {
    icon: IoLocationOutline,
    link: "https://www.google.com/maps/dir//VALHALLA,+%D0%BF%D1%80%D0%BE%D0%B2%D1%83%D0%BB%D0%BE%D0%BA+%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%B0+%D0%9C%D1%83%D0%B4%D1%80%D0%BE%D0%B3%D0%BE,+41+%D0%90,+%D0%A4%D0%B0%D1%81%D1%82%D1%96%D0%B2,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB.,+08500/@50.0839138,29.8665405,13z/data=!4m17!1m7!3m6!1s0x40d355818ad2e4c9:0xe9a9d7ec0b9b1215!2sVALHALLA!8m2!3d50.083866!4d29.9078257!16s%2Fg%2F11vhh7v83t!4m8!1m0!1m5!1m1!1s0x40d355818ad2e4c9:0xe9a9d7ec0b9b1215!2m2!1d29.9078257!2d50.083866!3e2?entry=ttu",
    title: "пр. Ярослава Мудрого, 41 А",
    target: "_blank",
  },
];
