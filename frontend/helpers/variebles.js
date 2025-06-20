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
      "Дуже круте атмосферне кафе, в якому хочеться залишитися, пограти у футбол, гарно поїсти та випити запашної кави і в якому хочеться залишитися. Молодці 👍",
    author: "Владислав М.",
  },
  {
    star: 5,
    comment:
      "Дуже приємне місце, рівень обслуговування на вищому рівні, їжа реально смачна, і ціни такі, що можна їсти 3 рази на день, і вдома ні чого не готувати) Раджу всім посітіть це місце!",
    author: "Сергій К.",
  },
  {
    star: 5,
    comment:
      "Прекрасне місце. Відпочивали з сім'єю, ціни адекватні, персонал ввічливий, їжа дуже смачна, настійно рекомендуємо всією сім'єю, ви найкращі!",
    author: "Микола О.",
  },
  {
    star: 5,
    comment:
      "Найкласніше кафе в моєму житті, де можна неймовірно класно відпочити з дітьми і друзями. Безумовно ставлю тверду 5)",
    author: "Ірина Б.",
  },
  {
    star: 4,
    comment: "Дуже приємно було відпочити, меню дуже сподобалася",
    author: "Сергій Б.",
  },
  {
    star: 5,
    comment: "Посиділи з компанією, все дуже сподобалося👍👌✌️😊",
    author: "Вікторія С.",
  },
  {
    star: 5,
    comment:
      "Прекрасне і унікальне кафе для нашого міста, зачаровує атмосфера, яка не залишає нікого байдужим. Дуже смачна кухня, а також привітний персонал) Обов'язково рекомендую до відвідування",
    author: "Денис Л.",
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
    link: "mailto:dimafastov55@gmail.com",
    title: "dimafastov55@gmail.com",
    target: "_self",
  },
  {
    icon: IoLocationOutline,
    link: "https://www.google.com/maps/place/Bunker+Cafe/@50.0821347,29.9207861,17z/data=!3m1!4b1!4m6!3m5!1s0x40d355fae3efc45d:0x1e311dbccb6104d4!8m2!3d50.0821347!4d29.9233664!16s%2Fg%2F11qy71g3y5?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D",
    title: "Україна, м.Фастів, вулиця Івана Ступака, 23",
    target: "_blank",
  },
];
