"use client"

import Image from "next/image";
import PageContainer from "../containers/PageContainer";

const DetailClient = ({ product }: { product: any }) => {
  console.log("product:", product);

  return (
    <div className="my-10">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[400px] w-[400px] ">
            <Image
              src={product?.image || "/memo.webp"}
              fill
              alt={product?.title || "Product image"}
              className="object-contain"
            />
          </div>
          <div className="w-1/2 space-y-3">
          <div className="text-xl-md:text-2xl">{product?.name}</div>
          <div className="text-slate-5">{product?.description}</div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
