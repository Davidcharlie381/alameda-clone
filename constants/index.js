import loungeTunic from "../public/assets/linen-tunic.jpg"
import loungeTunicL from "../public/assets/linen-tunic-L.jpg"

export const items = [
  { name: "Linen Tunic", sale: true, sizes: [""], images: [loungeTunic, loungeTunicL], slug: "/linen-tuni" },
  { name: "", sale: true, sizes: [""], images: [""], slug: "/", category: "" },
  { name: "", sale: true, sizes: [""], images: [""], slug: "/", category: "" },
  { name: "", sale: true, sizes: [""], images: [""], slug: "/", category: "" },
  { name: "", sale: true, sizes: [""], images: [""], slug: "/", category: "" },
  { name: "", sale: true, sizes: [""], images: [""], slug: "/", category: "" },
  { name: "", sale: true, sizes: [""], images: [""], slug: "/", category: "" },
  { name: "", sale: true, sizes: [""], images: [""], slug: "/", category: "" },
  { name: "", sale: true, sizes: [""], images: [""], slug: "/", category: "" },
  { name: "", sale: true, sizes: [""], images: [""], slug: "/", category: "" },
];

export const links = [
  { name: "Shop", path: "/" },
  { name: "Lookbook", path: "/lookbook" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const categories = [
  {name: "Tops", path: "/tops", items: items.filter((item) => item.category === "tops")},
  {name: "Bottoms", path: "/bottoms", items: items.filter((item) => item.category === "bottoms")},
  {name: "Sale", path: "/sale", items: items.filter((item) => item.category === "sale")}
]