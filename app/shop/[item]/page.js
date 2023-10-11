import Image from "next/image";
import image from "../../../public/assets/linen-tunic.jpg";
import Link from "next/link";
import Item from "../../../components/utils/Item";

export const generateStaticParams = () => {
  return [{ item: "page-one" }, { item: "page-two" }];
};

const ShopItem = ({ params }) => {
  const { item } = params;

  // const item = getItem(item) {
  // }

  return (
    <main className="container pt-14 md:pt-20 ">
      <div className="hidden md:block text-base font-poppins leading-4 font-light">
        <Link href="/">Shop</Link> / {item}
      </div>
      <section className="md:mt-14 grid md:grid-cols-7 gap-7 md:gap-12">
        <div className="md:col-span-4 mb-6 md:flex gap-5">
          <div className="hidden md:block h-[70px] w-[50px] bg-gray-300 cursor-pointer"></div>
          <Image
            src={image}
            alt="Image alt"
            className="h-[450px] md:h-[550px] lg:h-[600px] w-full"
          />
        </div>
        <div className="md:col-span-3">
          <h2 className="text-[32px] md:text-[38px] leading-[47px] md:leading-[53px] font-medium font-roboto mb-6">
            Product-name
          </h2>
          <p className="text-[22px] leading-[31px] md:text-[31px] md:leading-[33px] mb-6">
            $50.00
          </p>
          <div className="flex flex-col">
            <div className="md:order-2">
              <div className="mt-6 mb-10">
                <label
                  htmlFor="size"
                  className="block text-base font-poppins mb-2"
                >
                  Size:
                </label>
                <select
                  id="size"
                  className="block outline-0 focus:ring-2 ring-black ring-offset-2 px-5 font-poppins py-5 border-[1px] border-gray-300 w-full bg-transparent"
                >
                  <option>Select size</option>
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
                  value={1}
                  className="block outline-0 focus:ring-2 ring-black ring-offset-2 px-5 py-5 border-[1px] max-w-sm border-gray-300 w-2/5 bg-transparent"
                />
              </div>
              <button className="bg-black/40 w-full py-5 text-white font-poppins font-medium">
                Sign Up
              </button>
            </div>
            <div className="md:order-1 mb-10">
              <h2 className=" text-base font-mono leading-[29px] font-light py-4">
                DESCRIPTION
              </h2>
              <p className="text-base font-poppins leading-[29px] font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h2 className=" text-base font-mono leading-[29px] font-light py-4">
                DETAILS
              </h2>
              <ul className="list-disc space-y-3">
                <li className="ml-9">Jump wnd wash</li>
                <li className="ml-9">Use cold water only</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12 md:mt-20 mb-7">
        <h2 className="text-[32px] md:text-[38px] leading-[47px] md:leading-[53px] font-medium font-roboto mb-4">You Might Also Like</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 gap-y-20">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </section>
    </main>
  );
};

export default ShopItem;
