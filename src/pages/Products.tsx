import Layout from "../components/Layout";
import { Section } from "../layout/Section";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Bed Pasien Crank 1",
    description:
      "Menggunakan penggerak manual (Puter) untuk menaik dan menurunkan bagian kepala, tempat tidur ini menggunkan 85% besi dan 15 Plastik ABS dimana memiliki kekuatan yang luar biasa dimana tempat tidur rumah sakit ini dapat menopang sampai 180kg. Tempat tidur ini juga dilengkapi ban yang dapat di kunci jadi membuat tempat tidur ini apabila di letakan dikamar tidak jalan-jalan.",
    category: "Bed Pasien",
    imageUrl: "/assets/images/produk/Bed Pasien Crank 1.jpg",
  },
  {
    id: 2,
    title: "Bed Pasien Crank 2",
    description:
      "Menggunakan penggerak manual (Puter) untuk menaik dan menurunkan bagian kepala dan kaki (2 engkol), tempat tidur ini menggunkan 85% besi dan 15 Plastik ABS dimana memiliki kekuatan yang luar biasa dimana tempat tidur rumah sakit ini dapat menopang sampai 180kg. Tempat tidur ini juga dilengkapi ban yang dapat di kunci jadi membuat tempat tidur ini apabila di letakan dikamar tidak jalan-jalan.",
    category: "Bed Pasien",
    imageUrl: "/assets/images/produk/Bed Pasien Crank 2.jpg",
  },
  {
    id: 3,
    title: "Bed Pasien Crank 3",
    description:
      "Memiliki 3 fungsi penggerak yang di oprasionalkan dengan cara di putar (manual ). Bagian yang dapat di naik dan turunkan bagian kepala, kaki, dan badan keseruhan.",
    category: "Bed Pasien",
    imageUrl: "/assets/images/produk/Bed Pasien Crank 3.jpg",
  },
  {
    id: 4,
    title: "Bed Pasien Elektrik ABS",
    description:
      "Memiliki 3 fungsi penggerak yang di oprasionalkan dengan cara di pencet dengan remote. Bagian yang dapat di naik dan turunkan bagian kepala, kaki, dan badan keseruhan.",
    category: "Bed Pasien",
    imageUrl: "/assets/images/produk/Bed Pasien Elektrik ABS.PNG",
  },
  {
    id: 5,
    title: "Kursi Roda Elektrik",
    description:
      'Merupakan kursi roda yang memiliki rangka baja berkualitas tinggi. Selain itu, kursi roda elektrik ini juga dilengkapi dengan remote yang mempermudah aktivitas pasien dalam melakukan kegiatan sehari-hari. Keunggulan dari kursi roda elektrik ini antara lain: bantalan kain aman, nyaman, dan mudah digunakan; kastor 8" lebih tebal, roda belakang PU 12" dengan aluminium yang tahan karat; pegangan mudah digenggam dan mudah dilipat; mudah dikendalikan dengan kontroler pada genggaman; kecepatan dapat diatur (1-6 KM/jam); motor 250W yang hemat energi, dilengkapi dengan rem, dan baterai tahan lama; serta kuat di tanjakan.',
    category: "Kursi Roda",
    imageUrl: "/assets/images/produk/Kursi Roda Elektrik.jpg",
  },
  {
    id: 6,
    title: "Kursi Roda Reclining",
    description:
      "Merupakan kursi roda yang memiliki fungsi lengkap dimana kursi roda pada bagian kaki dan kepala dapat dinaik dan turunkan dan di rebahkan 180°, Kursi Roda 3in1 meggunakan bahan kulit sintetis membuat kursi roda ini terlihat bagus dan nyaman digunakan, kursi roda ini terdapat bantalan kepala dan bantalan kaki membuat pasien lebih nyaman pada saat menggunakan, tidak hanya itu saja Kursi Roda 3in1 dilengkapi oleh tempat untuk BAB.",
    category: "Kursi Roda",
    imageUrl: "/assets/images/produk/Kursi Roda Reclining.jpg",
  },
  {
    id: 7,
    title: "Kursi Roda Semi Travel LAJ 1",
    description:
      "Merupakan kursi roda yang dapat digunakan bagi pasien bertubuh tanggung/sedikit besar. Dengan kursi roda travel LAJ, pasien dapat berpergian dengan nyaman, kursi roda travel ini dibuat dengan lebih mudah dibawa-bawa sehingga kursi roda ini sangat cocok untuk traveling atau berpindah pindah tempat.",
    category: "Kursi Roda",
    imageUrl: "/assets/images/produk/Kursi Roda Semi Travel LAJ 1.jpg",
  },
  {
    id: 8,
    title: "Kursi Roda Semi Travel LAJ",
    description:
      "merupakan kursi roda yang dapat digunakan bagi pasien bertubuh tanggung/sedikit besar. Dengan kursi roda travel LAJ, pasien dapat berpergian dengan nyaman, kursi roda travel ini dibuat dengan lebih mudah dibawa-bawa sehingga kursi roda ini sangat cocok untuk traveling atau berpindah pindah tempat.",
    category: "Kursi Roda",
    imageUrl: "/assets/images/produk/Kursi Roda Semi Travel LAJ.jpg",
  },
  {
    id: 9,
    title: "Kursi Roda Semi Travel LB 1",
    description:
      "merupakan kursi roda dengan ban kecil yang dapat membantu pasien dalam berpindah tempat dan lebih praktis karena ukurannya yang lebih kecil namun kekurangannya kursi roda ini tidak bisa digunakan untuk pasien yang memiliki berat badan yang besar karena hanya memiliki roda yang kecil. ",
    category: "Kursi Roda",
    imageUrl: "/assets/images/produk/Kursi Roda Semi Travel LB 1.jpg",
  },
  {
    id: 10,
    title: "Kursi Roda Semi Travel LB",
    description:
      "merupakan kursi roda dengan ban kecil yang dapat membantu pasien dalam berpindah tempat dan lebih praktis karena ukurannya yang lebih kecil namun kekurangannya kursi roda ini tidak bisa digunakan untuk pasien yang memiliki berat badan yang besar karena hanya memiliki roda yang kecil. ",
    category: "Kursi Roda",
    imageUrl: "/assets/images/produk/Kursi Roda Semi Travel LB.jpg",
  },
  {
    id: 11,
    title: "Kursi Roda Standar",
    description:
      "merupakan solusi pasien yang memiliki berat badan lebih. Kontruksi kursi roda XL ini sangat kokoh, memiliki lebar jok paling besar dari pada kursi roda lainnya. Material dalam jok menggunakan catton sintetis membuat penggunanya nyaman untuk duduk di kursi roda standar XL.",
    category: "Kursi Roda",
    imageUrl: "/assets/images/produk/Kursi Roda Standar.jpg",
  },
  {
    id: 12,
    title: "Kursi Roda Travel",
    description:
      "dapat digunakan untuk pasien yang membutuhkan kursi roda untuk travelling karena kursi roda ini dapat masuk dalam kabin pesawat. Kursi Roda Travel juga dapat digunakan pada anak-anak maupun dewasa dengan tubuh kecil.",
    category: "Kursi Roda",
    imageUrl: "/assets/images/produk/Kursi Roda Travel.jpg",
  },
  {
    id: 13,
    title: "Matras Decubitus",
    description:
      "Merupakan kasur khusus yang berfungsi untuk meminimalisir, mencegah, dan membantu pemulihan pasien yang mengalami penyakit decubitus. Kasur ini didesain dengan bentuk bergelombang yang berisi udara sehingga dapat disesuaikan dengan bidang tubuh pasien, berat pasien, hingga posisi pasien.",
    category: "Bed Pasien",
    imageUrl: "/assets/images/produk/Matras Decubitus.jpg",
  },
  {
    id: 14,
    title: "Meja Makan Pasien",
    description:
      "Alat kesehatan yang berfungsi untuk memudahkan dalam makan di atas ranjang atau Kasur karena memiliki roda yang dapat di dorong kemanapun dan dapat diubah tinggi rendah meja makan mengikuti tinggi rendah tempat tidur yang sedang digunakan oleh pasien.",
    category: "Meja Makan Pasien",
    imageUrl: "/assets/images/produk/Meja Makan Pasien.jpg",
  },
  {
    id: 15,
    title: "Nebulizer",
    description:
      "Dapat membantu menyalurkan obat dengan mengubah cairan menjadi uap dan dihirup. Dengan nubulizer anak anak akan lebih mudah mendapatkan pengobatan. Begitu juga orang dewasa yang sulit mengonsumsi obat.",
    category: "Nebulizer",
    imageUrl: "/assets/images/produk/Nebulizer.jpg",
  },
  {
    id: 16,
    title: "Suction Pump",
    description:
      "Berfungsi untuk menyedot cairan yang biasa keluar dari bagian tubuh ketika tindakan atau operasil. Menyediakan alat suction pump untuk kebutuhan darurat. Suction Pump ini digunakan untuk menyedot dahak atau lendir pada bagian mulut dan tengorokan secara otomatis.",
    category: "Nebulizer",
    imageUrl: "/assets/images/produk/Suction.jpg",
  },
  {
    id: 17,
    title: "Tabung Oksigen 1M Kubik",
    description:
      "Memiliki daya simpan oksigen lebih banyak. Penggunaan dapat lebih lama. Calmo menyediakan penyewaan tabung oksigen 1mᶟ bisa diantar. Biaya sewa sudah termasuk : Tabung Oksigen, Ragulator, Troli, Isi awal (bonus), siap pakai. Rekomendasi : tabung oksigen ini cocok digunakan untuk pasien yang memerlukan asupan oksigen nonstop selama 2 jam.",
    category: "Tabung Oksigen",
    imageUrl: "/assets/images/produk/Tabung Oksigen 1M Kubik.jpg",
  },
  {
    id: 18,
    title: "Tabung Oksigen 6M Kubik",
    description:
      "Memiliki daya simpan oksigen lebih banyak. Penggunaan dapat lebih lama. Menyediakan penyewaan tabung oksigen besar 6mᶟ bisa diantar. Biaya sewa sudah termasuk : Tabung Oksigen, Ragulator, Troli, Isi awal (bonus), siap pakai. Rekomendasi : tabung oksigen ini cocok digunakan untuk pasien yang memerlukan asupan oksigen nonstop 24 jam.",
    category: "Tabung Oksigen",
    imageUrl: "/assets/images/produk/Tabung Oksigen 6M Kubik.jpg",
  },
  {
    id: 19,
    title: "Tandu Aluminium",
    description:
      "Dengan kerangka yang terbuat dari bahan aluminium ringan, tandu ini berfungsi untuk mengurangi gerakan ke tulang belakang leher dan mengurangi risiko cedera lebih lanjut selama evakuasi. Tandu ini dirancang agar bisa dipisah sehingga saat korban dievakuasi tandu dapat dipasang dari bawah tubuh pasien dan pasien tidak perlu diangkat.",
    category: "Tandu",
    imageUrl: "/assets/images/produk/Tandu Aluminium.jpg",
  },
  {
    id: 20,
    title: "Tandu Kanvas",
    description:
      "Merupakan alat evakuasi yang terbuat dari bahan aluminium berkualitas serta dilengkapi dengan alas kanvas atau kain yang mudah dibersihkan. Tandu lipat ini bisa dilipat dengan mudah dan bisa dibawa kemana saja karna dilengkapi dengan tas penyimpanan yang praktis. Memiliki kekuatan tinggi dapat menahan beban berat maksimal 160kg.",
    category: "Tandu",
    imageUrl: "/assets/images/produk/Tandu Kanvas.jpg",
  },
  {
    id: 21,
    title: "Toilet Chair",
    description:
      "Salah satu alat kesehatan yang berfungsi dalam memudahkan pasien dalam BAB tanpa harus berpindah tempat untuk ke kamar mandi.",
    category: "Toilet Chair",
    imageUrl: "/assets/images/produk/Toilet Chair.jpg",
  },
  {
    id: 22,
    title: "Tongkat Kaki Empat",
    description:
      "adalah tongkat alat bantu jalan yang memiliki model 4 kaki, dengan tiang dan penyangga untuk ketiak. Ukuran tongkat ini tidak terlalu besar sehingga memudahkan pasien untuk membawa tongkat kaki empat ini untuk berpindah tempat",
    category: "Tongkat Kaki",
    imageUrl: "/assets/images/produk/Tongkat Kaki 4.jpg",
  },
  {
    id: 23,
    title: "Tongkat Kaki Tiga",
    description: "-",
    category: "Tongkat Kaki",
    imageUrl: "/assets/images/produk/Tongkat Kaki 3.jpg",
  },
  {
    id: 24,
    title: "Tongkat Kruk",
    description:
      "Adalah tongkat alat bantu jalan yang memiliki model satu tiang pada kaki dan dua tiang pada area penyangga di ketiak serta pergelangan tangan. Selain itu tongkat kruk ini tersedia dengan 3 ukuran yaitu Small (S), Medium (M), Large (L) yang dapat disesuaikan dengan tinngi pasien yang akan menggunakan alat bantu tongakat kruk ini.",
    category: "Tongkat Kruk",
    imageUrl: "/assets/images/produk/Tongkat Kruk.jpeg",
  },
  {
    id: 25,
    title: "Walker Non Roda",
    description:
      "Adalah tongkat alat bantu jalan yang modelnya mirip dengan jemuran, memiliki 4 kaki dan dapat dilipat. Membantu pasien yang memiliki kesulitan bergerak menggunakan kedua kakinya, karena tongkat ini memiliki 4 kaki yang dapat di pegang dengan kedua tangan bersamaan.",
    category: "Walker",
    imageUrl: "/assets/images/produk/Walker Non Roda.jpg",
  },
  {
    id: 26,
    title: "Walker Roda",
    description:
      "Adalah tongkat alat bantu jalan yang modelnya mirip dengan jemuran, walker ini dapat dilipat dan memiliki 4 kaki yang dimana 2 kaki bagian depan memiliki roda. Membantu pasien yang memiliki kesulitan bergerak menggunakan kedua kakinya dengan",
    category: "Walker",
    imageUrl: "/assets/images/produk/Walker Roda.jpg",
  },
];

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
    return (
      (selectedCategory === "Semua" || product.category === selectedCategory) &&
      (searchTerm === "" ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()))
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
                Produk tidak ditemukan
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
