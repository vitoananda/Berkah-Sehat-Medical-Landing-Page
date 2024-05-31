import Image from 'next/image';
import React from 'react';

import type { Product } from '@/types/type';

interface ModalProps {
  product: Product;
  handleCloseModal: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
}

const Modal: React.FC<ModalProps> = ({ product, handleCloseModal, modalRef }) => (
    <div
      className="fixed left-0 top-0 z-50 flex size-full items-center justify-center bg-gray-700 bg-opacity-50"
      style={{ zIndex: 9999 }}
    >
      <div
        ref={modalRef}
        className="max-h-[90vh] overflow-y-auto rounded-lg bg-white p-8 shadow-md"
        style={{ maxWidth: '60vw', width: '100%' }}
      >
        <button className="absolute right-4 top-4" onClick={handleCloseModal}>
          &times;
        </button>
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <div className="w-full pr-4 sm:w-1/2">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={400}
              height={300}
              className="mobileImage size-full object-cover"
            />
          </div>
          <div className="mt-4 w-full text-center sm:mt-0 sm:w-1/2">
            <h2 className="mb-2 text-xl font-semibold">{product.title}</h2>
            <p className="mobileText text-justify text-sm">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
);

export default Modal;
