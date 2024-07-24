"use client";

import { useRouter } from 'next/navigation';
import { Button } from "antd";
import OrderTable from "./_components/orderTable";

export const runtime = "edge";

function AllOrder() {
  const router = useRouter()

  return (
    <div className="grid grid-cols-6 px-10 py-10 h-full">
      <div className="col-start-1 col-end-5">
        <div className="">
          {/* <Button onClick={() => router.push('/application/brand/add', { scroll: false })}>
              Add Brand
            </Button> */}
        </div>
        <div className="py-8">
          <OrderTable />
        </div>
      </div>
    </div>
  )
}

export default AllOrder;