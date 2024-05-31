import React, { memo } from 'react';
import Image from 'next/image';
import { Product } from '@/types/type';

interface ProductCardProps {
  product: Product;
  handleClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, handleClick }) => {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg border-4 border-[#F6F7FC] p-2 transform transition duration-500 hover:scale-105 cursor-pointer"
      onClick={() => handleClick(product)}
    >
      <div className="flex justify-center items-center w-full h-64 shadow-md overflow-hidden rounded-md">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-6 py-4 text-center">
        <div className="font-semibold text-md mb-2">{product.title}</div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
