"use client"; // Ensure the component is rendered on the client side
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter

const Occasion: React.FC = () => {
  const router = useRouter(); // Initialize the useRouter hook

  // Occasion categories
  const occasions = [
    { name: "Birthday", image: "/images/birthdaybg.jpg" },
    { name: "Surprises", image: "/images/surprises.jpg" },
    { name: "Eid", image: "/images/eid.jpeg" },
    { name: "Anniversary", image: "/images/aniversary bg.jpg" }
  ];

  // Handle navigation to the Occasion page
  const navigateToOccasionPage = (occasionName: string) => {
    router.push(`/occasions/${occasionName.toLowerCase()}`); // Navigate to the selected occasion's page
  };

  return (
    <div className="flex flex-col items-center p-6 text-white bg-gray-800">
      {/* Section: Occasion Categories */}
      <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">Shop By Occasion</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {occasions.map((occasion) => (
          <div
            key={occasion.name}
            className="relative cursor-pointer group transform hover:scale-105 transition-transform duration-500 rounded-lg overflow-hidden shadow-lg"
            onClick={() => navigateToOccasionPage(occasion.name)}
          >
            <Image
              src={occasion.image}
              alt={`${occasion.name} Gifts`}
              className="object-cover w-full h-full transition-all duration-300 group-hover:opacity-70"
              width={450}
              height={250}
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-xl font-bold">{occasion.name} Gifts</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Occasion;
