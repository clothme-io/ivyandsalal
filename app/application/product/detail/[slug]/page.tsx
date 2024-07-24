"use client";

export const runtime = "edge";

import { useRouter } from "next/navigation"
import { Button } from "antd";

function ProductDetailPage({ params }: { params: { slug: string } }) {

    const router = useRouter()

    return (
        <div className="grid grid-cols-6 px-10 py-10 h-full">
            <div className="col-start-1 col-end-5">
                <div>
                    <Button onClick={() => router.back()}>Go Back</Button>
                </div>
                <div className="py-8">
                    <h2>{params.slug}</h2>
                </div>
            </div>
        </div>

    )
}

export default ProductDetailPage;