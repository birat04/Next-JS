export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Product Details</h1>
      {/* Product details and actions can be added here */}
      {children}
    </div>
  );
}