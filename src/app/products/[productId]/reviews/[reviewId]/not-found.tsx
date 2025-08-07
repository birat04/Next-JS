"use client";
import { usePathname } from "next/navigation"
export default function NotFound(){
    const pathname = usePathname();
    const productId = pathname.split("/").slice(2);
    const reviewId = pathname.split("/").slice(4);
    return (
        <div>
            <h1>Review {reviewId} not found for Product {productId}</h1>
        </div>
    )
}