import Layout from "../components/Layout";
import { Section } from "../layout/Section";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { products } from "@/data/productData";
import { Product } from "@/types/type";

const Products = () => {
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

    // Check if any word in the product title matches any word in the search term
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
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg border-4 border-[#F6F7FC] p-2 transform transition duration-500 hover:scale-105 cursor-pointer"
                onClick={() => handleClick(product)}
              >
                <div className="flex justify-center items-center w-full h-g4 shadow-md overflow-hidden rounded-md">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 py-4 text-center">
                  <div className="font-semibold text-md mb-2 ">
                    {product.title}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Section>
      {/* Modal */}
      {showModal && selectedProduct && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50"
          style={{ zIndex: 9999 }}
        >
          <div
            ref={modalRef}
            className="bg-white p-8 rounded-lg shadow-md max-h-[90vh] overflow-y-auto"
            style={{ maxWidth: "60vw", width: "100%" }}
          >
            <button
              className="absolute top-4 right-4"
              onClick={handleCloseModal}
            ></button>
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <div className="w-full sm:w-1/2 pr-4">
                <Image
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover mobileImage"
                />
              </div>
              <div className="w-full sm:w-1/2 text-center mt-4 sm:mt-0">
                <h2 className="text-xl font-semibold mb-2">
                  {selectedProduct.title}
                </h2>
                <p className="mobileText text-justify text-sm">
                  {selectedProduct.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Products;
