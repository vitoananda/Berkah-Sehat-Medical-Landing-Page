import Image from "next/image";
import { Section } from "@/layout/Section";
import Link from "next/link";
import { categories } from "@/data/categoryData";

const Category = () => (
  <Section title="Kategori Produk">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
      {categories.map((category) => (
        <Link key={category.id} href={`/Products?category=${category.title}`}>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border-4 border-[#F6F7FC] p-2 transform transition duration-500 hover:scale-105 cursor-pointer h-64">
            <div className="flex justify-center items-center w-full h-44 shadow-md overflow-hidden rounded-md">
              <Image
                src={category.imageUrl}
                alt={category.title}
                width={50}
                height={50}
                className="w-40 h-40 object-cover"
              />
            </div>
            <div className="flex justify-center items-center h-20">
              <div className="font-semibold text-xs mb-1 text-center text-[#295A8D]">
                {category.title}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </Section>
);

export { Category };
