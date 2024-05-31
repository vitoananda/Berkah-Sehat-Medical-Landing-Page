import Image from 'next/image';
import React, { memo } from 'react';

import type { Product } from '@/types/type';

interface ProductCardProps {
  product: Product;
  handleClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, handleClick }) => (
    <div
      className="cursor-pointer overflow-hidden rounded-lg border-4 border-[#F6F7FC] bg-white p-2 shadow-lg transition duration-500 hover:scale-105"
      onClick={() => handleClick(product)}
    >
      <div className="flex h-64 w-full items-center justify-center overflow-hidden rounded-md shadow-md">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={400}
          height={300}
          className="size-full object-cover"
        />
      </div>
      <div className="px-6 py-4 text-center">
        <div className="text-md mb-2 font-semibold">{product.title}</div>
      </div>
    </div>
);

export default memo(ProductCard);
