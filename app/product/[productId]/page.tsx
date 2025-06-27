import DetailClient from '@/app/components/detail/DetailClient';
import React from 'react';
import { products } from '@/utils/Products';

interface PageProps {
  params: { productId: string };
}

export default async function Page({ params }: PageProps) {
  const { productId } = params;

  const product = products.find((product) => product.id == productId);

  return (
    <div>
      <DetailClient product={product} />
    </div>
  );
}
