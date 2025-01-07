


// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import OccasionComponent from "@/components/ocasions"; // Adjust this import if necessary

// const AnniversaryGifts = () => {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">Anniversary Gifts</h1>
//       <p className="mb-6">
//         Celebrate special anniversaries with thoughtful and personalized gifts for your loved ones.
//       </p>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {/* Anniversary Gift Set 1 */}
//         <div className="border rounded-lg overflow-hidden">
//           <Image
//             src="/images/Balloons-Combo.jpg"
//             alt="Anniversary Gift 1"
//             width={400}
//             height={300}
//             className="object-cover"
//           />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold">Romantic Gift Set</h3>
//             <p className="text-gray-500">A beautiful collection of gifts to express your love.</p>
//             <Link href="/cart">
//               <a className="mt-4 inline-block text-white bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
//                 Add to Cart
//               </a>
//             </Link>
//           </div>
//         </div>

//         {/* Anniversary Gift Set 2 */}
//         <div className="border rounded-lg overflow-hidden">
//           <Image
//             src="/images/anniversary-gift2.jpg"
//             alt="Anniversary Gift 2"
//             width={400}
//             height={300}
//             className="object-cover"
//           />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold">Elegant Jewelry Set</h3>
//             <p className="text-gray-500">A stunning jewelry set to mark this special occasion.</p>
//             <Link href="/cart">
//               <a className="mt-4 inline-block text-white bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
//                 Add to Cart
//               </a>
//             </Link>
//           </div>
//         </div>

//         {/* Anniversary Gift Set 3 */}
//         <div className="border rounded-lg overflow-hidden">
//           <Image
//             src="/images/anniversary-gift3.jpg"
//             alt="Anniversary Gift 3"
//             width={400}
//             height={300}
//             className="object-cover"
//           />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold">Luxury Spa Package</h3>
//             <p className="text-gray-500">Pamper your partner with a luxurious spa experience.</p>
//             <Link href="/cart">
//               <a className="mt-4 inline-block text-white bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
//                 Add to Cart
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Include OccasionComponent */}
//       <OccasionComponent />
//     </div>
//   );
// };

// export default AnniversaryGifts;
export default function ProductsPage() {
    return (
      <div>
        <h1>Products</h1>
        <p>Explore our wide range of products!</p>
      </div>
    );
  }
  