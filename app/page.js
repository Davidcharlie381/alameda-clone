import Item from "@/components/utils/Item";
import { getItems } from "@/helpers";
import Link from "next/link";

export const metadata = {
  title: "Alameda Clone",
  description: "A clone of squarespace template | Alameda",
};

export default function Home() {
  const items = getItems();

  return (
    <main className="container pb-20">
      <section className="pt-14">
        <div className="flex gap-2 items-center min-[575px]:justify-center min-[575px]:mt-12">
          <Link href="/c/tops" className="text-base font-light">
            Tops
          </Link>
          |<Link href="/c/bottoms">Bottoms</Link>|
          <Link href="/c/sale" className="text-base font-light">
            Sale
          </Link>
        </div>
        <div className="h-[.3px] hidden min-[575px]:block w-full bg-black/50 mt-12" />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 gap-y-20">
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
}
