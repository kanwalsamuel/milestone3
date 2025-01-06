



// "use client"; // Ensure the component is rendered on the client side
// import Image from "next/image";
// import { useRouter } from "next/navigation"; // Import useRouter


// const OccasionComponent: React.FC = () => {
//   const router = useRouter(); // Initialize the useRouter hook

//   // Handle navigation to the Occasion page
//   const navigateToOccasionPage = () => {
//     router.push('/occasions'); // Navigate to the occasion selection page
//   };

//   // Handle navigation to Combo Gifts page
//   const navigateToComboGiftsPage = () => {
//     router.push('/products/combo-gifts'); // Navigate to the combo gifts page
//   };

//   return (
//     <div className="flex flex-col items-center p-4 text-white">
//       {/* Section: Occasion Gifts Card with Images */}
//       <div className="flex flex-col gap-4 p-6">
//         {/* Top Images Row */}
//         <div className="flex justify-center gap-4">
//           {/* First Center Image (Occasion Gifts) */}
//           <div className="relative cursor-pointer" onClick={navigateToOccasionPage}>
//             <Image
//               src="/images/ocas2.jpeg" // Replace with your image path
//               alt="Occasion Gifts 1"
//               width={800}
//               height={400}
//               className="object-cover rounded-lg"
//             />
//             <h3
//               className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl font-bold text-yellow-400 bg-black bg-opacity-50 px-4 py-2 rounded-md hover:text-orange-600 transition-all duration-300"
//             >
//               Occasions Gifts
//             </h3>
//           </div>

//           {/* Second Center Image (Combo Gifts) */}
//           <div
//             className="relative cursor-pointer"
//             onClick={navigateToComboGiftsPage}
//           >
//             <Image
//               src="/images/ocas3.jpg" // Replace with your image path
//               alt="Occasion Gifts 2"
//               width={800}
//               height={400}
//               className="object-cover rounded-lg"
//             />
//             <h3
//               className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl font-bold text-yellow-400 bg-black bg-opacity-50 px-4 py-2 rounded-md hover:text-orange-400 transition-all duration-300"
//             >
//               Combo Gifts
//             </h3>
//           </div>
//         </div>
//       </div>

//       {/* Additional Images Section */}
//       <div className="flex flex-col gap-6 p-6">
//         {/* First Row: Two Images */}
//         <div className="flex justify-center gap-4">
//           <div
//             className="relative cursor-pointer"
//             onClick={() => router.push('/products/birthday')}
//           >
//             <Image
//               src="/images/Birthday-Gifts.jpg" // Replace with your image path
//               alt="Birthday Gifts"
//               width={600}
//               height={400}
//               className="object-cover rounded-lg"
//             />
//           </div>

//           <div
//             className="relative cursor-pointer"
//             onClick={() => router.push('/products/new-year')}
//           >
//             <Image
//               src="/images/Gifts-for.jpg" // Replace with your image path
//               alt="New Year Gifts"
//               width={600}
//               height={400}
//               className="object-cover rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Second Row: Two Images */}
//         <div className="flex justify-center gap-4">
//           <div
//             className="relative cursor-pointer"
//             onClick={() => router.push('/products/eid')}
//           >
//             <Image
//               src="/images/eid2.jpg" // Replace with your image path
//               alt="Eid Day Gifts"
//               width={600}
//               height={400}
//               className="object-cover rounded-lg"
//             />
//           </div>

//           <div
//             className="relative cursor-pointer"
//             onClick={() => router.push('/products/anniversary')}
//           >
//             <Image
//               src="/images/eid.jpeg" // Replace with your image path
//               alt=" Gifts"
//               width={600}
//               height={800}
//               className="object-cover rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OccasionComponent;










// "use client"; // Ensure the component is rendered on the client side
// import Image from "next/image";
// import { useRouter } from "next/navigation"; // Import useRouter

// const OccasionComponent: React.FC = () => {
//   const router = useRouter(); // Initialize the useRouter hook

//   // Handle navigation to the Occasion page
//   const navigateToOccasionPage = () => {
//     router.push('/occasions'); // Navigate to the occasion selection page
//   };

//   // Handle navigation to Combo Gifts page
//   const navigateToComboGiftsPage = () => {
//     router.push('/products/combo-gifts'); // Navigate to the combo gifts page
//   };

//   return (
//     <div className="flex flex-col items-center p-4 text-white">
//       {/* Section: Occasion Gifts Card with Images */}
//       <div className="flex flex-col gap-4 p-6">
//         {/* Top Images Row */}
//         <div className="flex justify-center gap-4">
//           {/* First Center Image (Occasion Gifts) */}
//           <div className="relative cursor-pointer group" onClick={navigateToOccasionPage}>
//             <Image
//               src="/images/ocas2.jpeg" // Replace with your image path
//               alt="Occasion Gifts 1"
//               width={800}
//               height={400}
//               className="object-cover rounded-lg transition-transform duration-300 transform group-hover:translate-y-4"
//             />
//             <h3
//               className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl font-bold text-yellow-400 bg-black bg-opacity-50 px-4 py-2 rounded-md hover:text-orange-600 transition-all duration-300"
//             >
//               Occasions Gifts
//             </h3>
//           </div>

//           {/* Second Center Image (Combo Gifts) */}
//           <div className="relative cursor-pointer group" onClick={navigateToComboGiftsPage}>
//             <Image
//               src="/images/ocas3.jpg" // Replace with your image path
//               alt="Occasion Gifts 2"
//               width={800}
//               height={400}
//               className="object-cover rounded-lg transition-transform duration-300 transform group-hover:translate-y-4"
//             />
//             <h3
//               className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl font-bold text-yellow-400 bg-black bg-opacity-50 px-4 py-2 rounded-md hover:text-orange-400 transition-all duration-300"
//             >
//               Combo Gifts
//             </h3>
//           </div>
//         </div>
//       </div>

//       {/* Additional Images Section */}
//       <div className="flex flex-col gap-6 p-6">
//         {/* First Row: Two Images */}
//         <div className="flex justify-center gap-4">
//           <div
//             className="relative cursor-pointer group"
//             onClick={() => router.push('/products/birthday')}
//           >
//             <Image
//               src="/images/Birthday-Gifts.jpg" // Replace with your image path
//               alt="Birthday Gifts"
//               width={600}
//               height={400}
//               className="object-cover rounded-lg transition-transform duration-300 transform group-hover:translate-y-4"
//             />
//           </div>

//           <div
//             className="relative cursor-pointer group"
//             onClick={() => router.push('/products/new-year')}
//           >
//             <Image
//               src="/images/Gifts-for.jpg" // Replace with your image path
//               alt="New Year Gifts"
//               width={600}
//               height={400}
//               className="object-cover rounded-lg transition-transform duration-300 transform group-hover:translate-y-4"
//             />
//           </div>
//         </div>

//         {/* Second Row: Two Images */}
//         <div className="flex justify-center gap-4">
//           <div
//             className="relative cursor-pointer group"
//             onClick={() => router.push('/products/eid')}
//           >
//             <Image
//               src="/images/eid2.jpg" // Replace with your image path
//               alt="Eid Day Gifts"
//               width={600}
//               height={400}
//               className="object-cover rounded-lg transition-transform duration-300 transform group-hover:translate-y-4"
//             />
//           </div>

//           <div
//             className="relative cursor-pointer group"
//             onClick={() => router.push('/products/anniversary')}
//           >
//             <Image
//               src="/images/eid.jpeg" // Replace with your image path
//               alt=" Gifts"
//               width={600}
//               height={800}
//               className="object-cover rounded-lg transition-transform duration-300 transform group-hover:translate-y-4"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OccasionComponent;



"use client"; // Ensure the component is rendered on the client side
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter

const OccasionComponent: React.FC = () => {
  const router = useRouter(); // Initialize the useRouter hook

  // Handle navigation to the Occasion page
  const navigateToOccasionPage = () => {
    router.push('/occasions'); // Navigate to the occasion selection page
  };

  // Handle navigation to Combo Gifts page
  const navigateToComboGiftsPage = () => {
    router.push('/products/combo-gifts'); // Navigate to the combo gifts page
  };

  return (
    <div className="flex flex-col items-center p-4 text-white">
      {/* Section: Occasion Gifts Card with Images */}
      <div className="flex flex-col gap-4 p-6">
        {/* Top Images Row */}
        <div className="flex justify-center gap-4">
          {/* First Center Image (Occasion Gifts) */}
          <div className="relative cursor-pointer group" onClick={navigateToOccasionPage}>
            <Image
              src="/images/ocas2.jpeg" // Replace with your image path
              alt="Occasion Gifts 1"
              width={800}
              height={400}
              className="object-cover rounded-lg transition-transform duration-500 group-hover:animate-shutter-down"
            />
            <h3
              className="absolute top-3 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-yellow-400 bg-black bg-opacity-40 px-4 py-2 rounded-md hover:text-orange-600 transition-all duration-300"
            >
              Occasions Gifts
            </h3>
          </div>

          {/* Second Center Image (Combo Gifts) */}
          <div className="relative cursor-pointer group" onClick={navigateToComboGiftsPage}>
            <Image
              src="/images/ocas3.jpg" // Replace with your image path
              alt="Occasion Gifts 2"
              width={800}
              height={400}
              className="object-cover rounded-lg transition-transform duration-500 group-hover:animate-shutter-down"
            />
            <h3
              className="absolute top-3 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-yellow-400 bg-black bg-opacity-40 px-4 py-2 rounded-md hover:text-orange-400 transition-all duration-300"
            >
              Combo Gifts
            </h3>
          </div>
        </div>
      </div>

      {/* Additional Images Section */}
      <div className="flex flex-col gap-6 p-6">
        {/* First Row: Two Images */}
        <div className="flex justify-center gap-4">
          <div
            className="relative cursor-pointer group"
            onClick={() => router.push('/products/birthday')}
          >
            <Image
              src="/images/Birthday-Gifts.jpg" // Replace with your image path
              alt="Birthday Gifts"
              width={600}
              height={400}
              className="object-cover rounded-lg transition-transform duration-500 group-hover:animate-shutter-down"
            />
          </div>

          <div
            className="relative cursor-pointer group"
            onClick={() => router.push('/products/new-year')}
          >
            <Image
              src="/images/Gifts-for.jpg" // Replace with your image path
              alt="New Year Gifts"
              width={600}
              height={400}
              className="object-cover rounded-lg transition-transform duration-500 group-hover:animate-shutter-down"
            />
          </div>
        </div>

        {/* Second Row: Two Images */}
        <div className="flex justify-center gap-4">
          <div
            className="relative cursor-pointer group"
            onClick={() => router.push('/products/eid')}
          >
            <Image
              src="/images/eid2.jpg" // Replace with your image path
              alt="Eid Day Gifts"
              width={600}
              height={400}
              className="object-cover rounded-lg transition-transform duration-500 group-hover:animate-shutter-down"
            />
          </div>

          <div
            className="relative cursor-pointer group"
            onClick={() => router.push('/products/anniversary')}
          >
            <Image
              src="/images/eid.jpeg" // Replace with your image path
              alt=" Gifts"
              width={600}
              height={800}
              className="object-cover rounded-lg transition-transform duration-500 group-hover:animate-shutter-down"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccasionComponent;
