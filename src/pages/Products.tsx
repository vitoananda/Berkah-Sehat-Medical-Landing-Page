import Layout from "../components/Layout";
import { Section } from "../layout/Section";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Product } from "@/types/type";
import { products as productData } from "@/data/productData";
import dynamic from "next/dynamic";
import ProductCard from "../components/productCards";

const Modal = dynamic(() => import("../components/Modal"), { ssr: false });

export const getStaticProps = async () => {
  return {
    props: {
      products: productData,
    },
  };
};

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const router = useRouter();
  const { category: queryCategory } = router.query;

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [showNotFound, setShowNotFound] = useState<boolean>(false);

  useEffect(() => {
    const categoryFromQuery = queryCategory as string;
    if (categoryFromQuery) {
      setSelectedCategory(categoryFromQuery);
    } else {
      setSelectedCategory("Semua");
    }
  }, [queryCategory]);

  const filteredProducts = products.filter((product) => {
    const productTitleWords = product.title.toLowerCase().split(" ");
    const searchTermWords = searchTerm.toLowerCase().split(" ");

    const matchesSearchTerm = searchTermWords.every((word) =>
      productTitleWords.some((productWord) => productWord.includes(word))
    );

    return (
      (selectedCategory === "Semua" || product.category === selectedCategory) &&
      (searchTerm === "" || matchesSearchTerm)
    );
  });

  const handleClick = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    setShowNotFound(filteredProducts.length === 0);
  }, [filteredProducts]);

  const handleModalClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false);
      setSelectedProduct(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleModalClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleModalClickOutside);
    };
  }, []);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );
  categories.unshift("Semua");

  return (
    <Layout>
      <Section yPadding="py-16">
        <div className="mb-4 flex items-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Cari produk..."
              className="w-full p-2 border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M3.5 11a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
                />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.length === 0 && showNotFound ? (
            <div className="col-span-3 flex justify-center items-center">
              <div className="text-center text-gray-500 text-lg h-72 flex flex-col justify-center">
                {selectedCategory === "Semua" ? (
                  <span>Produk tidak ditemukan</span>
                ) : (
                  <span>
                    Produk tidak ditemukan dalam kategori "{selectedCategory}"
                  </span>
                )}
              </div>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleClick={handleClick}
              />
            ))
          )}
        </div>
      </Section>
      {showModal && selectedProduct && (
        <Modal
          product={selectedProduct}
          handleCloseModal={handleCloseModal}
          modalRef={modalRef}
        />
      )}
    </Layout>
  );
};

export default Products;
