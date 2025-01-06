





// "use client"; // Ensure client-side rendering
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// const OccasionPage = () => {
//   const { occasion } = useParams(); // Extract occasion from the URL
//   const router = useRouter();
//   const [products, setProducts] = useState<any[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
//   const [sortOrder, setSortOrder] = useState<string>(""); // Track sorting order

//   // Fetch occasion products data
//   useEffect(() => {
//     if (occasion) {
//       fetch("/data/occasions.json")
//         .then((res) => res.json())
//         .then((data) => {
//           const selectedOccasion = data.find(
//             (item: { occasion: string }) =>
//               item.occasion.toLowerCase() === occasion.toLowerCase()
//           );
//           if (selectedOccasion) {
//             setProducts(selectedOccasion.products);
//             setFilteredProducts(selectedOccasion.products);
//           }
//         })
//         .catch((err) => console.error("Error fetching occasion data:", err));
//     }
//   }, [occasion]);

//   // Capitalize occasion name
//   const formattedOccasion =
//     occasion && occasion.charAt(0).toUpperCase() + occasion.slice(1).toLowerCase();

//   // Sort products by price
//   const handleSort = (order: string) => {
//     setSortOrder(order);
//     const sorted = [...filteredProducts].sort((a, b) => {
//       if (order === "low-to-high") return a.price - b.price;
//       if (order === "high-to-low") return b.price - a.price;
//       return 0;
//     });
//     setFilteredProducts(sorted);
//   };

//   if (!products.length) return <p>Loading products...</p>;

//   return (
//     <div className="p-6">
//       {/* Main Heading */}
//       <h1 className="text-4xl font-extrabold mb-6 text-center font-clash text-gray-800">
//         Explore {formattedOccasion} Products
//       </h1>

//       {/* Subheading */}
//       <p className="text-lg text-center text-gray-600 mb-10 border-b border-gray-300 pb-4">
//         Discover the best gifts and products specially curated for {formattedOccasion} celebrations!  
//         From thoughtful keepsakes to premium items,<br /> find everything you need to make your moments  
//         unforgettable. Explore now and bring joy to your <br />loved ones with unique offerings tailored  
//         just for this special occasion!
//       </p>

//       {/* Filters & Product Count */}
//       <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
//         <div className="flex-1">
//           <label className="block font-semibold text-gray-700 mb-1">Sort by Price</label>
//           <select
//             value={sortOrder}
//             onChange={(e) => handleSort(e.target.value)}
//             className="border rounded-md p-2 w-full sm:w-auto text-gray-500"
//           >
//             <option value="">Select</option>
//             <option value="low-to-high">Low to High</option>
//             <option value="high-to-low">High to Low</option>
//           </select>
//         </div>
//         <div className="text-sm text-gray-500">
//           Showing {filteredProducts.length}/{products.length} products
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="rounded-md cursor-pointer shadow-xl p-4 bg-white hover:shadow-2xl transition-shadow"
//             onClick={() => router.push(`/product/${product.id}`)}
//           >
//             <Image
//               src={product.image || "/images/default-image.jpg"}
//               alt={product.name}
//               width={400}
//               height={400}
//               className="rounded-md shadow-lg w-full object-cover animate-shutter-down"
//             />
//             <h2 className="text-lg font-bold mt-3 text-center text-gray-700">
//               {product.name}
//             </h2>
//             <p className="text-center text-gray-600 border-b-2 pb-2">RS {product.price}</p>
//           </div>
//         ))}
//       </div>

//       {/* Footer Section */}
//       <div className="mt-10 text-center">
//         <p className="text-gray-500">
//           Looking for more? Check out our <span className="font-semibold">top picks</span> for other occasions!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OccasionPage;



"use client"; // Ensure client-side rendering
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const OccasionPage = () => {
  const { occasion } = useParams(); // Extract occasion from the URL
  const router = useRouter();
  const [products, setProducts] = useState<any[]>([]); // Store all products
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]); // Filtered products for sorting
  const [sortOrder, setSortOrder] = useState<string>(""); // Track sorting order

  // Fetch occasion products data
  useEffect(() => {
    if (occasion) {
      fetch("/data/occasions.json")
        .then((res) => res.json())
        .then((data) => {
          // Ensure occasion is treated as a string before calling toLowerCase()
          const occasionString = Array.isArray(occasion) ? occasion[0] : occasion;

          const selectedOccasion = data.find(
            (item: { occasion: string }) =>
              item.occasion.toLowerCase() === occasionString.toLowerCase()
          );

          if (selectedOccasion) {
            setProducts(selectedOccasion.products);
            setFilteredProducts(selectedOccasion.products);
          }
        })
        .catch((err) => console.error("Error fetching occasion data:", err));
    }
  }, [occasion]);

  // Capitalize occasion name
  const formattedOccasion = 
    typeof occasion === "string"
      ? occasion.charAt(0).toUpperCase() + occasion.slice(1).toLowerCase()
      : ""; // Only capitalize if it's a string

  // Sort products by price
  const handleSort = (order: string) => {
    setSortOrder(order);
    const sorted = [...filteredProducts].sort((a, b) => {
      if (order === "low-to-high") return a.price - b.price;
      if (order === "high-to-low") return b.price - a.price;
      return 0;
    });
    setFilteredProducts(sorted);
  };

  if (!products.length) return <p>Loading products...</p>;

  return (
    <div className="p-6">
      {/* Main Heading */}
      <h1 className="text-4xl font-extrabold mb-6 text-center font-clash text-gray-800">
        Explore {formattedOccasion} Products
      </h1>

      {/* Subheading */}
      <p className="text-lg text-center text-gray-600 mb-10 border-b border-gray-300 pb-4">
        Discover the best gifts and products specially curated for {formattedOccasion} celebrations!  
        From thoughtful keepsakes to premium items,<br /> find everything you need to make your moments  
        unforgettable. Explore now and bring joy to your <br />loved ones with unique offerings tailored  
        just for this special occasion!
      </p>

      {/* Filters & Product Count */}
      <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
        <div className="flex-1">
          <label className="block font-semibold text-gray-700 mb-1">Sort by Price</label>
          <select
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
            className="border rounded-md p-2 w-full sm:w-auto text-gray-500"
          >
            <option value="">Select</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
        <div className="text-sm text-gray-500">
          Showing {filteredProducts.length}/{products.length} products
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-md cursor-pointer shadow-xl p-4 bg-white hover:shadow-2xl transition-shadow"
            onClick={() => router.push(`/product/${product.id}`)}
          >
            <Image
              src={product.image || "/images/default-image.jpg"}
              alt={product.name}
              width={400}
              height={400}
              className="rounded-md shadow-lg w-full object-cover animate-shutter-down"
            />
            <h2 className="text-lg font-bold mt-3 text-center text-gray-700">
              {product.name}
            </h2>
            <p className="text-center text-gray-600 border-b-2 pb-2">RS {product.price}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-10 text-center">
        <p className="text-gray-500">
          Looking for more? Check out our <span className="font-semibold">top picks</span> for other occasions!
        </p>
      </div>
    </div>
  );
};

export default OccasionPage;



