import Image from "next/image";
import { Section } from "@/layout/Section";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Bed Pasien",
    imageUrl: "/assets/images/kategori/bed.png",
  },
  {
    id: 2,
    title: "Kursi Roda",
    imageUrl: "/assets/images/kategori/kursi-roda.png",
  },
  {
    id: 3,
    title: "Meja Makan Pasien",
    imageUrl: "/assets/images/kategori/meja-makan-pasien.png",
  },
  {
    id: 4,
    title: "Nebulizer",
    imageUrl: "/assets/images/kategori/nebulizer.png",
  },
  {
    id: 5,
    title: "Suction",
    imageUrl: "/assets/images/kategori/suction.png",
  },
  {
    id: 6,
    title: "Tabung Oksigen",
    imageUrl: "/assets/images/kategori/tabung-oksigen.png",
  },
  {
    id: 7,
    title: "Tandu",
    imageUrl: "/assets/images/kategori/tandu.png",
  },
  {
    id: 8,
    title: "Toilet Chair",
    imageUrl: "/assets/images/kategori/toilet-chair.png",
  },
  {
    id: 9,
    title: "Tongkat",
    imageUrl: "/assets/images/kategori/tongkat-kruk.png",
  },
  {
    id: 10,
    title: "Walker",
    imageUrl: "/assets/images/kategori/walker.png",
  },
];

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
