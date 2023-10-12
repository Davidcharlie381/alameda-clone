"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Item from "../../../components/utils/Item";
import { categories } from "@/constants";
import { getItem, getItems } from "@/helpers";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import {useState} from "react";

// export const generateStaticParams = () => {
//   return [{ item: "page-one" }, { item: "page-two" }];
// };

export function generateMetaData({ params }) {
  const { item } = params;
  const currItem = getItems().find((item) => item.slug === "/" + item);
  return {
    title: "Item | " + currItem.name,
    description: currItem.desc,
  };
}

const ShopItem = ({ params }) => {
  const [qty, setQty] = useState(1);
  const [newSize, setNewSize] = useState(0)
  const [isAdding, setIsAdding] = useState(false);
  const [btnState, setBtnState] = useState("Add to cart");
  
  const dispatch = useDispatch();
  const { item } = params;

  let shopItemSlug = "/" + item;

  const expected = getItems().map((item) => item.slug);

  if (!expected.includes(("/" + item))) {
    notFound();
  }

  const shopItem = getItem(shopItemSlug);

  const dispatchAsync = (func) => {
    setIsAdding(true);
    setTimeout(() => {
      dispatch(func);
      setBtnState("Added!")
      setTimeout(() => {
        setBtnState("Add to cart");
      }, 1000);
      setIsAdding(false);
    }, 1000)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchAsync(addToCart(toBeAdded));
  }

  const [top, bottom, moreSale] = categories;

  const {
    name,
    slug,
    category,
    price,
    desc,
    details,
    sizes,
    images,
    discount,
    sale,
  } = shopItem;

  const toBeAdded = {
    name,
    slug,
    price,
    qty,
    images,
    newSize
  }

  return (
    <main className="container pt-14 md:pt-20 ">
      <div className="hidden md:block text-base font-poppins leading-4 font-light">
        <Link href="/">Shop</Link> / {item}
      </div>
      <section className="md:mt-14 grid md:grid-cols-7 gap-7 md:gap-12">
        <div className="md:col-span-4 mb-6 md:flex gap-5">
          <div className="hidden md:block h-[70px] w-[50px] bg-gray-300 cursor-pointer"></div>
          <Image
            src={images[1]}
            alt="Image alt"
            className="h-[450px] md:h-[550px] lg:h-[600px] w-full"
          />
        </div>
        <div className="md:col-span-3">
          <h2 className="text-[32px] md:text-[38px] leading-[47px] md:leading-[53px] font-medium font-robot mb-6">
            {name}
          </h2>
          <p className="text-[22px] leading-[31px] md:text-[31px] md:leading-[33px] mb-6">
            ${price.toFixed(2)}
          </p>
          <div className="flex flex-col">
            <div className="md:order-2">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mt-6 mb-10">
                <label
                  htmlFor="size"
                  className="block text-base font-poppins mb-2"
                >
                  Size:
                </label>
                  
                <select
                  id="size"
required
    onChange={(e) => setNewSize(e.target.value)}
                  className="block outline-0 focus:ring-2 ring-black ring-offset-2 px-5 font-poppins py-5 border-[1px] border-gray-300 w-full bg-transparent"
                >
                  <option>Select size</option>
                  {sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
              <div className="mb-10">
                <label
                  htmlFor="qty"
                  className="block text-base font-poppins mb-2"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  id="qty"
                  value={qty}
onChange={(e) => setQty(e.target.value)}
                  className="block outline-0 focus:ring-2 ring-black ring-offset-2 px-5 py-5 border-[1px] max-w-sm border-gray-300 w-2/5 bg-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-black/40 w-full py-5 text-white font-poppins font-medium"
              >
                  {isAdding ? "Adding..." : btnState}
              </button>
                </form>
            </div>
            <div className="md:order-1 mb-10">
              <h2 className=" text-base font-mono leading-[29px] font-light py-4">
                DESCRIPTION
              </h2>
              <p className="text-base font-poppins leading-[29px] font-light">
                {desc}
              </p>
              <h2 className=" text-base font-mono leading-[29px] font-light py-4">
                DETAILS
              </h2>
              <ul className="list-disc space-y-3">
                {details.map((detail, idx) => (
                  <li className="ml-9" key={idx}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12 md:mt-20 mb-7">
        <h2 className="text-[32px] md:text-[38px] leading-[47px] md:leading-[53px] font-medium font-roboto mb-4">
          You Might Also Like
        </h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 gap-y-20">
          {bottom.items.map(({ name, slug, price, images, discount, sale }) => (
            <Item
              name={name}
              image={images[1]}
              slug={slug}
              price={price}
              discount={discount}
              key={slug}
              sale={sale}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ShopItem;
