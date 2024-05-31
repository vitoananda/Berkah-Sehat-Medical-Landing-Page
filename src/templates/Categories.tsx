import Image from 'next/image';
import Link from 'next/link';

import { categories } from '@/data/categoryData';
import { Section } from '@/layout/Section';

const Category = () => (
  <Section title="Kategori Produk">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
      {categories.map((category) => (
        <Link key={category.id} href={`/Products?category=${category.title}`}>
          <div className="h-64 cursor-pointer overflow-hidden rounded-lg border-4 border-[#F6F7FC] bg-white p-2 shadow-lg transition duration-500 hover:scale-105">
            <div className="flex h-44 w-full items-center justify-center overflow-hidden rounded-md shadow-md">
              <Image
                src={category.imageUrl}
                alt={category.title}
                width={50}
                height={50}
                className="size-40 object-cover"
              />
            </div>
            <div className="flex h-20 items-center justify-center">
              <div className="mb-1 text-center text-xs font-semibold text-[#295A8D]">
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
