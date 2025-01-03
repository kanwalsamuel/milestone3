import Image from "next/image";
import { useEffect, useState } from "react";

const OccasionPage = ({ occasion }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (occasion) { // Ensure `occasion` is defined
      // Fetch the data from the static file in the public directory
      fetch("/data/occasions.json")
        .then((res) => res.json())
        .then((data) => {
          // Ensure `occasion` is not undefined before calling `toLowerCase()`
          const occasionData = data.find(
            (item) => item.occasion && item.occasion.toLowerCase() === occasion.toLowerCase()
          );
          setProducts(occasionData?.products || []);
        })
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [occasion]);

  if (!occasion) {
    return <p>Occasion not found.</p>; // Handle the case when occasion is undefined
  }

  return (
    <div>
      <h1>{occasion} Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.length === 0 ? (
          <p>No products found for {occasion}.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="border p-4 rounded-md">
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <Image src={product.image} alt={product.name} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OccasionPage;
