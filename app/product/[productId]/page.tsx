import DetailClient from '@/app/components/detail/DetailClient';
import React from 'react';
import { products } from '@/utils/Products';

type Props = {
  params: {
    productId: string;
  };
};


const Detail = async ({ params }: Props) => {
  const { productId } = params;

  const product = products.find(product => product.id == productId);

  return (
    <div>
      <DetailClient product={product} />
    </div>
  );
};

export default Detail;
