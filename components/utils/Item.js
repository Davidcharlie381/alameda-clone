import Image from "next/image";
import Link from "next/link";

const Item = ({ name, image, slug, price, sale, discount }) => {

  return (
    <div>
      <Link href={`/shop${slug}`}>
        <Image
          src={image}
          alt="Image text"
          className="w-full h-[480px] lg:h-[410px]"
        />
        <h2 className="text-[22px] mt-3 md:text-[26px] font-medium font-roboto leading-8 md:leading-9">
          {name}
        </h2>
        <div className="flex justify-between items-center space-y-5">
          <div className="flex gap-2 text-base leading-4">
            <p>${price.toFixed(2)}</p>
            {discount && (<p className="line-through">${discount.toFixed(2)}</p>)}
            
          </div>
          {sale && (
            <div className="text-base leading-4 text-[#a8a6a1] font-bold">
              SALE
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Item;
