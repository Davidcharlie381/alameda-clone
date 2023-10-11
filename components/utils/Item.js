import Image from "next/image";
import image from "../../public/assets/linen-tunic.jpg";
import Link from "next/link";

// const props = { name, image, path, price, sale, discount };

const Item = () => {
  const price = 123.5;

  return (
    <div>
      <Link href="#">
        <Image
          src={image}
          alt="Image text"
          className="w-full h-[570px] lg:h-[410px]"
        />
        <h2 className="text-[22px] md:text-[26px] font-medium font-roboto leading-8 md:leading-9">
          Lounge tuni
        </h2>
        <div className="flex justify-between items-center space-y-5">
          <div className="flex gap-2 text-base leading-4">
            <p>${price.toFixed(2)}</p>
            <p>${price.toFixed(2) + 220}</p>
          </div>
          <div className="text-base leading-4 text-[#a8a6a1] font-bold">
            SALE
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
