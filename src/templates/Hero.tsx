import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Background } from "../background/Background";
import { Button } from "../button/Button";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const locations: string[] = [
  "Wahana Pondok Gede blok L1 nomor 12, Jatiranggon, Jatisampurna, Kota Bekasi, Jawa Barat 17432",
  "Jl. Anggrek nomor 10, Petukangan Utara RT06 RW05, Kec Pesanggrahan, Jakarta Selatan, Daerah Khusus Ibukota Jakarta",
  "Jl. Hj. Saidi nomor 53, Grogol Selatan, Kec Kebayoran Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12210",
];

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleLocationClick = (location: string | undefined) => {
    if (location) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo />}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Products">Product</Link>
          </li>
          <li>
            <button onClick={() => handleLocationClick(locations[0])}>
              Location
            </button>
          </li>
          <li>
            <a
              href="https://wa.me/6288211163207"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <div className="mx-1">
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <path
                      d="M2.965 6.0925C4.045 8.215 5.785 9.9475 7.9075 11.035L9.5575 9.385C9.76 9.1825 10.06 9.115 10.3225 9.205C11.1625 9.4825 12.07 9.6325 13 9.6325C13.4125 9.6325 13.75 9.97 13.75 10.3825V13C13.75 13.4125 13.4125 13.75 13 13.75C5.9575 13.75 0.25 8.0425 0.25 1C0.25 0.5875 0.5875 0.25 1 0.25H3.625C4.0375 0.25 4.375 0.5875 4.375 1C4.375 1.9375 4.525 2.8375 4.8025 3.6775C4.885 3.94 4.825 4.2325 4.615 4.4425L2.965 6.0925Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="mx-2">Contact</div>
              </Button>
            </a>
          </li>
        </NavbarTwoColumns>
      </Section>

      {/* Modal */}
      {showModal && (
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
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">
                Lokasi Berkah Sehat Medical
              </h2>
              <ul>
                {locations.map((location, index) => (
                  <li className="mb-4" key={index}>
                    {index + 1}. {location}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Background>
  );
};

export { Hero };
