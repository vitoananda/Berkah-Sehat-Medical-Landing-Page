import Image from "next/image";
import { Section } from "@/layout/Section";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Bed Pasien",
    imageUrl: "/assets/images/kategori/bed.svg",
  },
  {
    id: 2,
    title: "Kursi Roda",
    imageUrl: "/assets/images/kategori/kursi-roda.svg",
  },
  {
    id: 3,
    title: "Meja Makan Pasien",
    imageUrl: "/assets/images/kategori/meja-makan-pasien.svg",
  },
  {
    id: 4,
    title: "Nebulizer",
    imageUrl: "/assets/images/kategori/nebulizer.svg",
  },
  {
    id: 5,
    title: "Tabung Oksigen",
    imageUrl: "/assets/images/kategori/tabung-oksigen.svg",
  },
  {
    id: 6,
    title: "Tandu",
    imageUrl: "/assets/images/kategori/tandu.svg",
  },
  {
    id: 7,
    title: "Toilet Chair",
    imageUrl: "/assets/images/kategori/toilet-chair.svg",
  },
  {
    id: 8,
    title: "Tongkat Kruk",
    imageUrl: "/assets/images/kategori/tongkat-kruk.svg",
  },
  {
    id: 9,
    title: "Walker",
    imageUrl: "/assets/images/kategori/walker.svg",
  },
];

const Category = () => (
  <Section title="Kategori Produk">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((category) => (
        <Link key={category.id} href={`/Products?category=${category.title}`}>
          <div
            className="bg-white rounded-lg overflow-hidden shadow-lg border-4 border-[#F6F7FC] p-2 transform transition duration-500 hover:scale-105 cursor-pointer"
          >
            <div className="flex justify-center items-center w-full h-44 shadow-md overflow-hidden rounded-md">
              <Image
                src={category.imageUrl}
                alt={category.title}
                width={50}
                height={50}
                className="w-40 h-40 object-cover"
              />
            </div>
            <div className="px-6 py-4 text-center"> 
              <div className="font-semibold text-md mb-1">{category.title}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </Section>
);

export {Category};
