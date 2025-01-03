
import Image from 'next/image';  // Import the Image component from Next.js
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa'; // Import icons for search, cart, wishlist, and login

const Header: React.FC = () => {
  return (
    <div>
      {/* Second Header Section */}
      <header className="bg-white text-black flex justify-between items-center p-6 shadow-md h-36">
        {/* Left Section - Store Name and Delivery Message */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/treasure.jpg"
            alt="Wife's Treasure Logo"
            width={180}  // Set an explicit width
            height={84}  // Set an explicit height to control the image size
            className="rounded-full"  // Optional: Round the image if desired
          />
          <div className="font-clash">
            <span className="font-extrabold text-3xl">Wife's Treasure</span>
            <div className="font-clash text-lg text-gray-600">We Deliver... with Love</div>
          </div>
        </div>

        {/* Center Section - Search Bar and Category Selector */}
        <div className="flex items-center w-1/2 gap-2">
          {/* Category Select */}
          <select className="p-2 rounded-l-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Category</option>
            <option value="chocolates">Chocolates</option>
            <option value="bangles">Bangles</option>
            <option value="flowers">Flowers</option>
            <option value="gifts">Gifts</option>
            {/* Add more categories as needed */}
          </select>

          {/* Search Bar */}
          <input
            type="text"
            className="w-full p-2 rounded-r-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for products..."
          />
          <button className="p-2  text-gray-600 rounded-r-md">
            <FaSearch />
          </button>
        </div>

        {/* Right Section - Cart, Wishlist, Login/Register */}
        <div className="flex gap-6">
          <a href="/cart" className="text-black flex items-center gap-1 hover:bg-gray-200 p-2 rounded">
            <FaShoppingCart /> Cart
          </a>
          <a href="/wishlist" className="text-black flex items-center gap-1 hover:bg-gray-200 p-2 rounded">
            <FaHeart /> Wishlist
          </a>
          <a href="/login" className="text-black flex items-center gap-1 hover:bg-gray-200 p-2 rounded">
            <FaUser /> Login/Register
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
