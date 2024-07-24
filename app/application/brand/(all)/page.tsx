"use client";

import { useRouter } from 'next/navigation';
import BrandTable from './_components/brandTable';
import { Button } from '@nextui-org/react';

export const runtime = "edge";

function BrandPage() {
  const router = useRouter()

  return (
    <div className="flex gap-3 flex-col h-full">
      <div className="flex justify-between items-end">
        <h2 className='text-2xl'>Brand</h2>
        <Button
          className='bg-primary-orange rounded px-6'
          onClick={() => router.push('/application/brand/add', { scroll: false })}>
          Add Brand
        </Button>
      </div>
      <div className="flex-1">
        <BrandTable />
      </div>
    </div>
  )
}

export default BrandPage;