










"use client"; // Ensure the component is rendered on the client side
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter


const OccasionComponent: React.FC = () => {
  const router = useRouter(); // Initialize the useRouter hook

  // Handle navigation to the Occasion page
  const navigateToOccasionPage = () => {
    router.push('products/occasion'); // Navigate to the occasion selection page
  };

  // Handle navigation to Combo Gifts page
  const navigateToComboGiftsPage = () => {
    router.push('/occasions/combo-gifts'); // Navigate to the combo gifts page
  };

  // Handle navigation to Birthday Gifts page
  const navigateToBirthdayGiftsPage = () => {
    router.push('/occasions/birthday'); // Navigate to the birthday gifts page
  };
 

  // Handle navigation to New Year Gifts page
  const navigateToNewYearGiftsPage = () => {
    router.push('/occasions/gifts'); // Navigate to the new year gifts page
  };

  // Handle navigation to Eid Gifts page
  const navigateToEidGiftsPage = () => {
    router.push('/occasions/eid'); // Navigate to the Eid gifts page
  };

  // Handle navigation to Anniversary Gifts page
  const navigateToAnniversaryGiftsPage = () => {
    router.push('/occasions/anniversary'); // Navigate to the anniversary gifts page
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
            onClick={navigateToBirthdayGiftsPage}
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
            onClick={navigateToNewYearGiftsPage}
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
            onClick={navigateToEidGiftsPage}
          >
            <Image
              src="/images/eid.jpeg" // Replace with your image path
              alt="Eid Gifts"
              width={600}
              height={400}
              className="object-cover rounded-lg transition-transform duration-500 group-hover:animate-shutter-down"
            />
              <h3
              className="absolute top-3 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-yellow-400 bg-black bg-opacity-40 px-4 py-2 rounded-md hover:text-orange-400 transition-all duration-300"
            >
              Eid Gifts
            </h3>
          </div>

          <div
            className="relative cursor-pointer group"
            onClick={navigateToAnniversaryGiftsPage}
          >
           



<Image
  src="/images/bg wife.jpg" // Updated file name for consistency
  alt="Eid Gifts"
  width={600}
  height={400}
  className="object-cover h-[340px] w-[600px] rounded-lg transition-transform duration-500 group-hover:animate-shutter-down"
/>
<h3
              className="absolute top-3 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-yellow-400 bg-black bg-opacity-40 px-4 py-2 rounded-md hover:text-orange-400 transition-all duration-300"
            >
              Anniversary Gifts
            </h3>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OccasionComponent;
