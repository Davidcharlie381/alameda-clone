import Item from "@/components/utils/Item";
import Link from "next/link";



const Category = ({ params }) => {
  const { category } = params;

  return (
    <main className="container pb-20">
      <section className="pt-14">
        <div className="flex gap-2 items-center min-[575px]:justify-center min-[575px]:mt-12">
          <Link href="/" className="text-base font-light">
            All / {category}
          </Link>
          
        </div>
        <div className="h-[.3px] hidden min-[575px]:block w-full bg-black/50 mt-12" />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <Item />
          <Item />
          <Item />
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

export default Category;