
import blueLinenCropL from "../public/assets/blue-linen-crop-L.jpg";
import blueLinenL from "../public/assets/blue-linen-L.jpg";
import chefShirtL from "../public/assets/chef-shirt-L.jpg";
import cropTopL from "../public/assets/crop-top-L.jpg";
import linenTunicL from "../public/assets/linen-tunic-L.jpg";
import blueLinenCrop from "../public/assets/blue-linen-crop.jpg";
import blueLinen from "../public/assets/blue-linen.jpg";
import chefShirt from "../public/assets/chef-shirt.jpg";
import cropTop from "../public/assets/crop-top.jpg";
import linenTunic from "../public/assets/linen-tunic.jpg";

import kimemLong from "../public/assets/kimem-long.jpg";
import kimemRomy from "../public/assets/kimem-romy.jpg";
import naturalDress from "../public/assets/natural-dress.jpg";
import soniaSkirt from "../public/assets/sonia-skirt.jpg";
import widePant from "../public/assets/wide-pant.jpg";
import kimemLongL from "../public/assets/kimem-long-L.jpg";
import kimemRomyL from "../public/assets/kimem-romy-L.jpg";
import naturalDressL from "../public/assets/natural-dress-L.jpg";
import soniaSkirtL from "../public/assets/sonia-skirt-L.jpg";
import widePantL from "../public/assets/wide-pant-L.jpg";

export const items = [
  {
    name: "Blue Linen",
    slug: "/blue-line",
    category: "tops",
    price: 23.00,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["100% Cotton", "Machine wash cold", "Tumble dry low"],
    sizes: [0, 2, 4, 6, 8],
    images: [blueLinenL, blueLinen],
    discount: 123,
    sale: false,
  },
  {
    name: "Linen Tunic",
    slug: "/linen-tunic",
    category: "bottoms",
    price: 29.00,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["100% Cotton", "Machine wash cold", "Tumble dry low"],
    sizes: [0, 2, 4, 6, 8],
    images: [linenTunicL, linenTunic],
    discount: 123,
    sale: false,
  },
  {
    name: "Blue Linen Crop",
    slug: "/blue-line-crop",
    category: "tops",
    price: 50,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["100% Cotton", "Machine wash cold", "Tumble dry low"],
    sizes: [0, 2, 4, 6, 8],
    images: [blueLinenCropL, blueLinenCrop],
    discount: 123,
    sale: true,
  },
  {
    name: "Chef Shirt",
    slug: "/chef-shirt",
    category: "tops",
    price: 20,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["100% Cotton", "Machine wash cold", "Tumble dry low"],
    sizes: [0, 2, 4, 6, 8],
    images: [chefShirtL, chefShirt],
    discount: 123,
    sale: false,
  },
  {
    name: "Crop Top",
    slug: "/crop-top",
    category: "tops",
    price: 35.00,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["100% Cotton", "Machine wash cold", "Tumble dry low"],
    sizes: [0, 2, 4, 6, 8],
    images: [cropTopL, cropTop],
    discount: 123,
    sale: false,
  },
  {
    name: "Kimem Long",
    slug: "/kimem-long",
    category: "bottoms",
    price: 20,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["100% Cotton", "Machine wash cold", "Tumble dry low"],
    sizes: [0, 2, 4, 6, 8],
    images: [kimemLongL, kimemLong],
    discount: 123,
    sale: true,
  },
  
  {
    name: "Kimem Romy",
    slug: "/kimem-romy",
    category: "tops",
    price: 19.00,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["100% Cotton", "Machine wash cold", "Tumble dry low"],
    sizes: [0, 2, 4, 6, 8],
    images: [kimemRomyL, kimemRomy],
    discount: 123,
    sale: false,
  },
  {
    name: "Natural Dress",
    slug: "/natural-dress",
    category: "bottoms",
    price: 20,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["100% Cotton", "Machine wash cold", "Tumble dry low"],
    sizes: [0, 2, 4, 6, 8],
    images: [naturalDressL, naturalDress],
    discount: 123,
    sale: true,
  },
  {
    name: "Sonia Skirt",
    slug: "/sonia-skirt",
    category: "bottoms",
    price: 76.00,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["100% Cotton", "Machine wash cold", "Tumble dry low"],
    sizes: [0, 2, 4, 6, 8],
    images: [soniaSkirtL, soniaSkirt],
    discount: 123,
    sale: false,
  },
  {
    name: "Wide Pant",
    slug: "/wide-pant",
    category: "bottoms",
    price: 0,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: ["100% Cotton", "Machine wash cold", "Tumble dry low"],
    sizes: [0, 2, 4, 6, 8],
    images: [widePantL, widePant],
    discount: 123,
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
    items: items.filter((item) => item.sale),
  },
];
