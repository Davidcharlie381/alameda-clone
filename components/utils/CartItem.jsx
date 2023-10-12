import { BsPlusLg, BsXLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

import Image from "next/image";
import image from "../../public/assets/linen-tunic.jpg";
import Link from "next/link";

const CartItem = () => {
  return (
    <div className="mb-5 relative">
      <button className="absolute top-0 right-0 rounded-full h-8 w-8 hover:bg-gray-200 grid place-content-center">
        <BsXLg />
      </button>
      <div className="flex gap-5 mb-5">
        <div>
          <Image src={image} className="h-28 w-24" alt="cart image" />
        </div>
        <div className="flex flex-col md:flex-row gap-10 w-[85%] justify-between">
          <div>
            <h3 className="font-roboto text-base font-base font-medium leading-[22px]">
              <Link href="#">Tunic fulen</Link>
            </h3>
            <span className="text-sm font-poppins font-light">Size: 2</span>
          </div>
          <div className="flex justify-between md:justify-end gap-16 md:w-2/5">
            <div className="flex gap-3 ">
              <button className="rounded-full h-8 w-8 hover:bg-gray-200 grid place-content-center">
                <AiOutlineMinus />
              </button>

              <span className="mt-1 block">2</span>
              <button className="rounded-full h-8 w-8 hover:bg-gray-200 grid place-content-center">
                <BsPlusLg />
              </button>
            </div>
            <div className="md:mt-1">$100.00</div>
          </div>
        </div>
      </div>
      <span className="block bg-gray-300 h-[1px] w-full" />
    </div>
  );
};

export default CartItem;
