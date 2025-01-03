// 









// pages/occasions/[occasion].tsx
"use client"; // Ensures the component runs on the client-side

import { useRouter } from "next/navigation"; // Use the `useRouter` hook from Next.js
import { useEffect, useState } from "react"; // For managing state and side-effects

const OccasionPage = () => {
  const router = useRouter(); // Initialize the router hook
  const { occasion } = router.query; // Get the dynamic "occasion" from the URL

  const [products, setProducts] = useState([]); // Store the products in state

  useEffect(() => {
    if (occasion) {
      // Fetch data from the JSON file
      fetch(`/data/occasions.json`)
        .then((res) => res.json())
        .then((data) => {
          const occasionData = data.find(
            (item: { occasion: string }) => item.occasion === occasion // Filter by occasion name
          );
          setProducts(occasionData?.products || []); // Set the products based on the occasion
        })
        .catch((err) => console.error("Error fetching data:", err)); // Handle any fetch errors
    }
  }, [occasion]); // Re-fetch when `occasion` changes

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{occasion} Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product: any) => (
          <div key={product.id} className="border p-4 rounded-md">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-lg">${product.price}</p>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OccasionPage;


