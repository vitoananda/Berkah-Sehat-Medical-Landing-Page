import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/type';

interface ModalProps {
  product: Product;
  handleCloseModal: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
}

const Modal: React.FC<ModalProps> = ({ product, handleCloseModal, modalRef }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50"
      style={{ zIndex: 9999 }}
    >
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg shadow-md max-h-[90vh] overflow-y-auto"
        style={{ maxWidth: "60vw", width: "100%" }}
      >
        <button className="absolute top-4 right-4" onClick={handleCloseModal}>
          &times;
        </button>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="w-full sm:w-1/2 pr-4">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={400}
              height={300}
              className="w-full h-full object-cover mobileImage"
            />
          </div>
          <div className="w-full sm:w-1/2 text-center mt-4 sm:mt-0">
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="mobileText text-justify text-sm">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
