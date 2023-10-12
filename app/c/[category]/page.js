import Item from "@/components/utils/Item";
import Link from "next/link";

import {notFound} from "next/navigation";

import { categories } from "@/constants";

const Category = ({ params }) => {
  const { category } = params;
  const expected = ["tops", "bottoms", "sale"];
  const [tops, bottoms, sale] = categories;

  if (!expected.includes(category)) {
    notFound();
  }

  let items;

  switch (category) {
    case "tops":
      items = tops.items;
      break;
    case "bottoms":
      items = bottoms.items;
      break;
    case "sale":
      items = sale.items;
      break;
    default:
      break;
  }

  return (
    <main className="container pb-20">
      <section className="pt-14">
        <div className="flex gap-2 items-center min-[575px]:justify-center min-[575px]:mt-12">
          <Link href="/" className="text-base font-light">
            All / 
          </Link>
        </div>
        <div className="h-[.3px] hidden min-[575px]:block w-full bg-black/50 mt-12" />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {items.map(({ name, slug, price, images, discount, sale }) => (
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

export default Category;
