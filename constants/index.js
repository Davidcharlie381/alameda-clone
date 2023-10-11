import loungeTunic from "../public/assets/linen-tunic.jpg";
import loungeTunicL from "../public/assets/linen-tunic-L.jpg";

export const items = [
  {
    name: "Linen Tunic",
    slug: "/linen-tunic",
    category: "tops",
    price: 50,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["100% Cotton", "Machine wash cold", "Tumble dry low"],
    sizes: [0, 2, 4, 6, 8],
    images: [loungeTunic, loungeTunicL],
    sale: true,
  },
  {
    name: "Linen Tunic",
    slug: "/linen-tunic",
    category: "tops",
    price: 50,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["100% Cotton", "Machine wash cold", "Tumble dry low"],
    sizes: [0, 2, 4, 6, 8],
    images: [loungeTunic, loungeTunicL],
    sale: true,
  },
  {
    name: "Linen Tunic",
    slug: "/linen-tunic",
    category: "tops",
    price: 50,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["100% Cotton", "Machine wash cold", "Tumble dry low"],
    sizes: [0, 2, 4, 6, 8],
    images: [loungeTunic, loungeTunicL],
    sale: true,
  },
  {
    name: "Linen Tunic",
    slug: "/linen-tunic",
    category: "tops",
    price: 50,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["100% Cotton", "Machine wash cold", "Tumble dry low"],
    sizes: [0, 2, 4, 6, 8],
    images: [loungeTunic, loungeTunicL],
    sale: true,
  },
  {
    name: "Linen Tunic",
    slug: "/linen-tunic",
    category: "tops",
    price: 50,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["100% Cotton", "Machine wash cold", "Tumble dry low"],
    sizes: [0, 2, 4, 6, 8],
    images: [loungeTunic, loungeTunicL],
    sale: true,
  },
  
];

export const links = [
  { name: "Shop", path: "/" },
  { name: "Lookbook", path: "/lookbook" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const categories = [
  {
    name: "Tops",
    path: "/tops",
    items: items.filter((item) => item.category === "tops"),
  },
  {
    name: "Bottoms",
    path: "/bottoms",
    items: items.filter((item) => item.category === "bottoms"),
  },
  {
    name: "Sale",
    path: "/sale",
    items: items.filter((item) => item.category === "sale"),
  },
];
