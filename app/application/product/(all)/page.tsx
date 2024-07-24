"use client";

import { useRouter } from 'next/navigation';
import ProductTable from './_components/productTable';
import { Button } from '@nextui-org/react';

export const runtime = "edge";

function ProductPage() {

  const router = useRouter()

  return (
    <div className="flex gap-3 flex-col h-full">
      <div className="flex justify-between items-end">
        <h2 className='text-2xl'>Product</h2>
        <Button
          className='bg-primary-orange rounded px-6'
          onClick={() => router.push('/application/product/add', { scroll: false })}>
          Add Product
        </Button>
      </div>
      <div className="flex-1">
        <ProductTable />
      </div>
    </div>
  )
}

export default ProductPage;