export const reviews = [
  {
    id: "1",
    productId: "101",
    productName: "Wireless Headphones",
    productImage: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
    username: "Alice",
    rating: 5,
    comment: "Absolutely loved these headphones! Sound quality is top-notch.",
    createdAt: "2025-08-06T10:00:00.000Z"
  },
  {
    id: "2",
    productId: "102",
    productName: "Smartwatch Pro",
    productImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    username: "Bob",
    rating: 4,
    comment: "Great features, but the battery could last a bit longer.",
    createdAt: "2025-08-05T15:30:00.000Z"
  },
  {
    id: "3",
    productId: "103",
    productName: "Gaming Keyboard",
    productImage: "https://images.unsplash.com/photo-1587202372775-e229f172b197",
    username: "Charlie",
    rating: 5,
    comment: "Perfect for gaming! The RGB lights are amazing.",
    createdAt: "2025-08-04T18:45:00.000Z"
  }
];
import Image from "next/image";


export default function ProductReviewsPage({ params }: { params: { productId: string } }) {
  const productReviews = reviews.filter(r => r.productId === params.productId);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Reviews</h1>
      {productReviews.length === 0 && <p>No reviews yet for this product.</p>}

      {productReviews.map((review) => (
        <div
          key={review.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "15px"
          }}
        >
          <Image
            src={review.productImage}
            alt={review.productName}
            width={100}
            height={100}
            style={{ borderRadius: "8px" }}
          />
          <div>
            <h2>{review.productName}</h2>
            <p>
              <strong>{review.username}</strong> – ⭐ {review.rating}/5
            </p>
            <p>{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
