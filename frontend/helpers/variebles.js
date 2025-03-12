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
    star: 5,
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
  instagram: "https://www.instagram.com/bunker_cafe_fastiv",
  viber: "viber://chat?number=%2B380933817902",
  facebook:
    "https://www.facebook.com/people/Bunker_Cafe_Fastiv/100063219220246",
};

export const contacts = [
  {
    icon: AiOutlinePhone,
    link: "tel:380933817902",
    title: "+38 (093) 381 7902",
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
    link: "https://www.google.com/maps/place/Bunker+Cafe/@50.0821347,29.9207861,17z/data=!3m1!4b1!4m6!3m5!1s0x40d355fae3efc45d:0x1e311dbccb6104d4!8m2!3d50.0821347!4d29.9233664!16s%2Fg%2F11qy71g3y5?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D",
    title: "Україна, м.Фастів, вулиця Івана Ступака, 23",
    target: "_blank",
  },
];
