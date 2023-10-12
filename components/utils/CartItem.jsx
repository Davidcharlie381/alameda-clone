

import { BsPlusLg, BsXLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

import Image from "next/image";
// import image from "../../public/assets/linen-tunic.jpg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeFromCart } from "@/redux/cartSlice";

const CartItem = ({item}) => {

  const dispatch = useDispatch();

  const { name, images, slug, price } = item;

  const itemExist = useSelector((state) => state.cart.find((item) => item.slug === slug));

  let {qty} = itemExist;

  let calculatedPrice = qty * price;

  return (
    <div className="mb-5 relative">
      <button className="absolute top-0 right-0 rounded-full h-8 w-8 hover:bg-gray-200 grid place-content-center" onClick={() => dispatch(removeFromCart(item))}>
        <BsXLg />
      </button>
      <div className="flex gap-5 mb-5">
        <div>
          <Image src={images[1]} className="h-28 w-24" alt="cart image" />
        </div>
        <div className="flex flex-col md:flex-row gap-10 w-[85%] justify-between">
          <div>
            <h3 className="font-roboto text-base font-base font-medium leading-[22px]">
              <Link href={`/shop${slug}`}>{name}</Link>
            </h3>
            <span className="text-sm font-poppins font-light">Size: 2</span>
          </div>
          <div className="flex justify-between md:justify-end gap-16 md:w-2/5">
            <div className="flex gap-3 ">
              <button className="rounded-full h-8 w-8 hover:bg-gray-200 grid place-content-center" onClick={() => dispatch(decrementQuantity(item))}>
                <AiOutlineMinus />
              </button>

              <span className="mt-1 block">{qty}</span>
              <button className="rounded-full h-8 w-8 hover:bg-gray-200 grid place-content-center" onClick={() => dispatch(incrementQuantity(item))}>
                <BsPlusLg />
              </button>
            </div>
            <div className="md:mt-1">${calculatedPrice.toFixed(2)}</div>
          </div>
        </div>
      </div>
      <span className="block bg-gray-300 h-[1px] w-full" />
    </div>
  );
};

export default CartItem;
