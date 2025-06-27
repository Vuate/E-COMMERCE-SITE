import DetailClient from '@/app/components/detail/DetailClient';
import React from 'react';
import { products } from '@/utils/Products';

export default function Page(props: any) {
  const { params } = props as { params: { productId: string } };

  const product = products.find(product => product.id == params.productId);

  return (
    <div>
      <DetailClient product={product} />
    </div>
  );
}
