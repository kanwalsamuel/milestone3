


import React from "react";
import OccasionComponent from "@/components/ocasions"; // Adjust this import if necessary


    export default function NewYearGifts() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-yellow-600">New Year Gifts</h1>
      <p className="mb-6 text-black">
        Celebrate special day&apos;s with thoughtful and personalized gifts for your loved ones.
      </p>
   

      {/* Include OccasionComponent */}
      <OccasionComponent />
    </div>
  );
};
