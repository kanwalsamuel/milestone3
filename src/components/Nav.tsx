"use client";

import Image from "next/image";
import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Header: React.FC = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { isLoggedIn, logout } = useAuth();

  const [category, setCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery, "in category:", category);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Section */}
      <div className="flex justify-between items-center p-4 border-b">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/treasure.jpg"
            alt="Wife's Treasure Logo"
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <div className="font-clash">
            <span className="font-extrabold text-xl sm:text-2xl text-gray-900">
             
             &apos;Wife&apos;s Treasure&apos;

            </span>
            <div className="text-sm text-gray-500 hidden sm:block">
              We Deliver... with Love
            </div>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black sm:hidden"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Right Section */}
        <nav className="hidden sm:flex gap-6 items-center">
          <Link href="/" className="hover:text-blue-500 text-gray-700">
            Home
          </Link>
          <Link
            href="/cart"
            className="relative hover:text-blue-500 text-gray-700"
          >
            <FaShoppingCart size={20} />
            {cart?.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
                {cart.length}
              </span>
            )}
          </Link>
          <Link
            href="/wishlist"
            className="relative hover:text-blue-500 text-gray-700"
          >
            <FaHeart size={20} />
            {wishlist?.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
                {wishlist.length}
              </span>
            )}
          </Link>
          {isLoggedIn ? (
            <button
              onClick={logout}
              className="hover:text-blue-500 flex items-center gap-1 text-gray-700"
            >
              <FaUser /> Logout
            </button>
          ) : (
            <>
              <Link href="/login" className="hover:text-blue-500 text-gray-700">
                Login
              </Link>
              <Link
                href="/signup"
                className="hover:text-blue-500 text-gray-700"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* Search and Category Section */}
      <div className="hidden sm:flex items-center gap-4 p-4 bg-gray-50">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-md text-gray-700"
        >
          <option value="">Select Category</option>
          <option value="chocolates">Eid</option>
          <option value="bangles">Birthday</option>
          <option value="flowers">Aniversary</option>
          <option value="gifts">Gifts</option>
        </select>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products..."
          className="p-2 border rounded-md flex-grow max-w-md text-gray-700"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 text-white rounded-md"
        >
          <FaSearch />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="sm:hidden bg-white shadow-md p-4 space-y-4">
          <div className="flex flex-col gap-4">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 border rounded-md text-gray-700"
            >
              <option value="">Select Category</option>
              <option value="chocolates">Chocolates</option>
              <option value="bangles">Bangles</option>
              <option value="flowers">Flowers</option>
              <option value="gifts">Gifts</option>
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="p-2 border rounded-md text-gray-700"
            />
            <button
              onClick={handleSearch}
              className="p-2 bg-blue-500 text-white rounded-md"
            >
              <FaSearch />
            </button>
          </div>
          <Link
            href="/"
            className="block py-2 hover:text-blue-500 text-gray-700"
          >
            Home
          </Link>
          <Link
            href="/cart"
            className="block py-2 hover:text-blue-500 text-gray-700"
          >
            <FaShoppingCart className="inline-block mr-2" />
            Cart
            {cart?.length > 0 && (
              <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2">
                {cart.length}
              </span>
            )}
          </Link>
          <Link
            href="/wishlist"
            className="block py-2 hover:text-blue-500 text-gray-700"
          >
            <FaHeart className="inline-block mr-2" />
            Wishlist
            {wishlist?.length > 0 && (
              <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2">
                {wishlist.length}
              </span>
            )}
          </Link>
          {isLoggedIn ? (
            <button
              onClick={logout}
              className="block py-2 hover:text-blue-500 text-gray-700"
            >
              <FaUser className="inline-block mr-2" /> Logout
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="block py-2 hover:text-blue-500 text-gray-700"
              >
                <FaUser className="inline-block mr-2" /> Login
              </Link>
              <Link
                href="/signup"
                className="block py-2 hover:text-blue-500 text-gray-700"
              >
                <FaUser className="inline-block mr-2" /> Register
              </Link>
            </>
          )}
          <div className="text-center text-gray-600 text-sm mt-4">
            We Deliver... with Love
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;















