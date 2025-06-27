import DetailClient from '@/app/components/detail/DetailClient';
import React from 'react';
import { products } from '@/utils/Products';

export default function Page({ params }: { params: { productId: string } }) {
  const { productId } = params;

  const product = products.find((product) => product.id === productId);

  return (
    <div>
      <DetailClient product={product} />
    </div>
  );
}
