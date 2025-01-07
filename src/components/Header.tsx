



"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const TopHeader: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Adding scroll animation by toggling the state
    const interval = setInterval(() => {
      setScrolling((prev) => !prev);
    }, 5000); // Toggle every 5 seconds to scroll text

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-black text-white flex flex-wrap items-center justify-between p-4">
      {/* Links Section */}
      <div className="flex gap-2 items-center w-full sm:w-auto text-xs sm:text-[10px]">
        <Link
          href="tel:+1234567890"
          className="hover:bg-gray-700 p-2 rounded font-santhoshi transition-colors duration-300"
        >
          Call Us
        </Link>
        <Link
          href="https://wa.me/1234567890"
          className="hover:bg-gray-700 p-2 rounded font-santhoshi transition-colors duration-300"
        >
          WhatsApp
        </Link>
        <Link
          href="/account"
          className="hover:bg-gray-700 p-2 rounded font-santhoshi transition-colors duration-300"
        >
          My Account
        </Link>
        {/* <Link
          href="/cart"
          className="hover:bg-gray-700 p-2 rounded flex items-center font-santhoshi transition-colors duration-300"
        >
          <span role="img" aria-label="cart" className="mr-2">
            🛒
          </span>
          Cart
        </Link> */}
      </div>

      {/* Delivery Information Section */}
      <div className="flex flex-col items-center gap-2 mt-2 sm:mt-0 w-full sm:w-auto overflow-hidden">
        <div
          className={`flex items-center text-xs sm:text-sm font-santhoshi ${
            scrolling ? "animate-scroll" : ""
          }`}
        >
          <span role="img" aria-label="delivery car" className="mr-2">
            🚗
          </span>
          Midnight Delivery at 12:00 AM PST
        </div>
        <div
          className={`flex items-center text-xs sm:text-sm font-santhoshi ${
            scrolling ? "animate-scroll" : ""
          }`}
        >
          <span role="img" aria-label="delivery car" className="mr-2">
            🚗
          </span>
          Same Day Delivery Before 11:00 AM PST
        </div>
      </div>
    </header>
  );
};

export default TopHeader;





