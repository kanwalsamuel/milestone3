


// // // // "use client";

// // // // import Image from "next/image";
// // // // import {
// // // //   FaSearch,
// // // //   FaShoppingCart,
// // // //   FaHeart,
// // // //   FaUser,
// // // //   FaBars,
// // // //   FaTimes,
// // // // } from "react-icons/fa";
// // // // import Link from "next/link";
// // // // import { useCart } from "../context/CartContext";
// // // // import { useWishlist } from "../context/WishlistContext";
// // // // import { useAuth } from "../context/AuthContext";
// // // // import { useState, useEffect } from "react";
// // // // import occasionsData from "../../public/data/occasions.json";

// // // // const Header: React.FC = () => {
// // // //   const { cart } = useCart();
// // // //   const { wishlist } = useWishlist();
// // // //   const { isLoggedIn, logout } = useAuth();

// // // //   const [category, setCategory] = useState<string>(""); // Selected occasion
// // // //   const [searchQuery, setSearchQuery] = useState<string>(""); // Search query
// // // //   const [filteredProducts, setFilteredProducts] = useState<any[]>([]); // Filtered products
// // // //   const [menuOpen, setMenuOpen] = useState<boolean>(false); // Menu state
// // // //   const [searchOpen, setSearchOpen] = useState<boolean>(false); // Search bar toggle (for mobile)

// // // //   // Function to filter products based on search query and selected category
// // // //   useEffect(() => {
// // // //     let allProducts = occasionsData.flatMap((occasion) => occasion.products);

// // // //     // Filter by search query
// // // //     allProducts = allProducts.filter((product) =>
// // // //       product.name.toLowerCase().includes(searchQuery.toLowerCase())
// // // //     );

// // // //     // If category is selected, filter by occasion
// // // //     if (category) {
// // // //       allProducts = allProducts.filter((product) => product.occasion === category);
// // // //     }

// // // //     setFilteredProducts(allProducts); // Set filtered products
// // // //   }, [searchQuery, category]);

// // // //   const handleSearch = () => {
// // // //     console.log("Searching for:", searchQuery, "in occasion:", category);
// // // //   };

// // // //   const closeMenu = () => setMenuOpen(false);

// // // //   const toggleSearch = () => setSearchOpen((prev) => !prev);

// // // //   return (
// // // //     <header className="bg-white shadow-md sticky top-0 z-50">
// // // //       {/* Top Section */}
// // // //       <div className="flex justify-between items-center p-4 border-b">
// // // //         {/* Logo Section */}
// // // //         <div className="flex items-center gap-4">
// // // //           <Image
// // // //             src="/images/treasure.jpg"
// // // //             alt="Wife's Treasure Logo"
// // // //             width={60}
// // // //             height={60}
// // // //             className="rounded-full object-cover"
// // // //           />
// // // //           <div className="font-clash">
// // // //             <span className="font-extrabold text-xl sm:text-2xl text-gray-900">
// // // //               &apos;Wife&apos;s Treasure&apos;
// // // //             </span>
// // // //             <div className="text-sm text-gray-500 hidden sm:block">
// // // //               We Deliver... with Love
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Hamburger Menu with Icons for Mobile */}
// // // //         <div className="flex items-center gap-4 sm:hidden">
// // // //           <button onClick={toggleSearch} className="text-black">
// // // //             <FaSearch size={18} />
// // // //           </button>
// // // //           <Link
// // // //             href="/cart"
// // // //             className="relative text-gray-700 hover:text-orange-500"
// // // //           >
// // // //             <FaShoppingCart size={18} />
// // // //             {cart?.length > 0 && (
// // // //               <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
// // // //                 {cart.length}
// // // //               </span>
// // // //             )}
// // // //           </Link>
// // // //           <button
// // // //             onClick={() => setMenuOpen(!menuOpen)}
// // // //             className="text-black"
// // // //           >
// // // //             {menuOpen ? <FaTimes size={24} /> : <FaBars size={20} />}
// // // //           </button>
// // // //         </div>

// // // //         {/* Right Section for Larger Screens */}
// // // //         <nav className="hidden sm:flex gap-6 items-center">
// // // //           <Link href="/" className="hover:text-orange-500 text-gray-700">
// // // //             Home
// // // //           </Link>
// // // //           <Link
// // // //             href="/cart"
// // // //             className="relative hover:text-orange-500 text-gray-700"
// // // //           >
// // // //             <FaShoppingCart size={18} />
// // // //             {cart?.length > 0 && (
// // // //               <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
// // // //                 {cart.length}
// // // //               </span>
// // // //             )}
// // // //           </Link>
// // // //           <Link
// // // //             href="/wishlist"
// // // //             className="relative hover:text-orange-500 text-gray-700"
// // // //           >
// // // //             <FaHeart size={18} />
// // // //             {wishlist?.length > 0 && (
// // // //               <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
// // // //                 {wishlist.length}
// // // //               </span>
// // // //             )}
// // // //           </Link>
// // // //           {isLoggedIn ? (
// // // //             <button
// // // //               onClick={logout}
// // // //               className="hover:text-orange-500 flex items-center gap-1 text-gray-700"
// // // //             >
// // // //               <FaUser /> Logout
// // // //             </button>
// // // //           ) : (
// // // //             <>
// // // //               <Link href="/login" className="hover:text-orange-500 text-gray-700">
// // // //                 Login
// // // //               </Link>
// // // //               <Link
// // // //                 href="/signup"
// // // //                 className="hover:text-orange-500 text-gray-700"
// // // //               >
// // // //                 Register
// // // //               </Link>
// // // //             </>
// // // //           )}
// // // //         </nav>
// // // //       </div>

// // // //       {/* Search Section for Large Screens */}
// // // //       <div className="hidden sm:flex items-center gap-4 p-4 bg-gray-50">
// // // //         <select
// // // //           value={category}
// // // //           onChange={(e) => setCategory(e.target.value)}
// // // //           className="p-2 border rounded-md text-gray-700"
// // // //         >
// // // //           <option value="">Select Occasion</option>
// // // //           <option value="Birthday">Birthday</option>
// // // //           <option value="Anniversary">Anniversary</option>
// // // //           <option value="Surprises">Surprises</option>
// // // //           <option value="NewYear">NewYear</option>
// // // //           <option value="Combo-Gifts">Combo-Gifts</option>
// // // //           <option value="Eid">Eid</option>
// // // //           <option value="Valentine">Valentines</option>
// // // //           {/* Add more occasions as needed */}
// // // //         </select>
// // // //         <input
// // // //           type="text"
// // // //           value={searchQuery}
// // // //           onChange={(e) => setSearchQuery(e.target.value)}
// // // //           placeholder="Search for products..."
// // // //           className="p-2 border rounded-md flex-grow max-w-md text-gray-700"
// // // //         />
// // // //         <button
// // // //           onClick={handleSearch}
// // // //           className="p-2 bg-orange-500 text-white rounded-md"
// // // //         >
// // // //           <FaSearch />
// // // //         </button>
// // // //       </div>

// // // //       {/* Mobile Search Section */}
// // // //       {searchOpen && (
// // // //         <div className="sm:hidden p-4 bg-gray-50 border-t border-b">
// // // //           <div className="flex flex-col gap-4">
// // // //             <select
// // // //               value={category}
// // // //               onChange={(e) => setCategory(e.target.value)}
// // // //               className="p-2 border rounded-md text-gray-700"
// // // //             >
// // // //               <option value="">Select Occasion</option>
// // // //               <option value="Birthday">Birthday</option>
// // // //               <option value="Anniversary">Anniversary</option>
// // // //               {/* Add more occasions as needed */}
// // // //             </select>
// // // //             <input
// // // //               type="text"
// // // //               value={searchQuery}
// // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // //               placeholder="Search for products..."
// // // //               className="p-2 border rounded-md text-gray-700"
// // // //             />
// // // //             <button
// // // //               onClick={handleSearch}
// // // //               className="p-2 bg-blue-500 text-white rounded-md"
// // // //             >
// // // //               <FaSearch />
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* Suggestions Section */}
// // // //       {searchQuery && filteredProducts.length > 0 && (
// // // //         <div className="absolute bg-white shadow-md max-h-60 overflow-auto mt-2 w-full z-10">
// // // //           {filteredProducts.map((product) => (
// // // //             <Link
// // // //               key={product.id}
// // // //               href={`/product/${product.id}`}
// // // //               className="block p-2 text-gray-700 hover:bg-gray-200"
// // // //             >
// // // //               <div className="flex items-center">
// // // //                 <Image
// // // //                   src={product.image}
// // // //                   alt={product.name}
// // // //                   width={40}
// // // //                   height={40}
// // // //                   className="rounded-sm"
// // // //                 />
// // // //                 <div className="ml-2">{product.name}</div>
// // // //               </div>
// // // //             </Link>
// // // //           ))}
// // // //         </div>
// // // //       )}

// // // //       {/* No Products Found Message */}
// // // //       {searchQuery && filteredProducts.length === 0 && (
// // // //         <div className="absolute bg-white shadow-md max-h-60 overflow-auto mt-2 w-full z-10 p-4 text-center text-gray-500">
// // // //           No products found
// // // //         </div>
// // // //       )}

// // // //       {/* Mobile Navigation Menu */}
// // // //       {menuOpen && (
// // // //         <div className="bg-white shadow-md absolute top-16 left-0 right-0 z-50">
// // // //           <nav className="flex flex-col gap-4 p-4">
// // // //             <Link href="/" onClick={closeMenu} className="hover:text-orange-500 text-gray-700">
// // // //               Home
// // // //             </Link>
// // // //             <Link href="/cart" onClick={closeMenu} className="hover:text-orange-500 text-gray-700">
// // // //               Cart
// // // //             </Link>
// // // //             <Link href="/wishlist" onClick={closeMenu} className="hover:text-orange-500 text-gray-700">
// // // //               Wishlist
// // // //             </Link>
// // // //             {isLoggedIn ? (
// // // //               <button
// // // //                 onClick={() => {
// // // //                   logout();
// // // //                   closeMenu();
// // // //                 }}
// // // //                 className="hover:text-blue-500 text-gray-700 flex items-center gap-1"
// // // //               >
// // // //                 <FaUser /> Logout
// // // //               </button>
// // // //             ) : (
// // // //               <>
// // // //                 <Link href="/login" onClick={closeMenu} className="hover:text-orange-500 text-gray-700">
// // // //                   Login
// // // //                 </Link>
// // // //                 <Link
// // // //                   href="/signup"
// // // //                   onClick={closeMenu}
// // // //                   className="hover:text-blue-500 text-gray-700"
// // // //                 >
// // // //                   Register
// // // //                 </Link>
// // // //               </>
// // // //             )}
// // // //           </nav>
// // // //         </div>
// // // //       )}
// // // //     </header>
// // // //   );
// // // // };

// // // // export default Header;



// // // "use client";
// // // import React, { useState, useEffect } from "react";
// // // import Image from "next/image";
// // // import {
// // //   FaSearch,
// // //   FaShoppingCart,
// // //   FaHeart,
// // //   FaUser,
// // //   FaBars,
// // //   FaTimes,
// // // } from "react-icons/fa";
// // // import Link from "next/link";
// // // import { useCart } from "../context/CartContext";
// // // import { useWishlist } from "../context/WishlistContext";
// // // import { useAuth } from "../context/AuthContext";
// // // import occasionsData from "../../public/data/occasions.json";

// // // const Header: React.FC = () => {
// // //   const { cart } = useCart();
// // //   const { wishlist } = useWishlist();
// // //   const { isLoggedIn, logout } = useAuth();

// // //   const [category, setCategory] = useState<string>("");
// // //   const [searchQuery, setSearchQuery] = useState<string>("");
// // //   const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
// // //   const [menuOpen, setMenuOpen] = useState<boolean>(false);
// // //   const [searchOpen, setSearchOpen] = useState<boolean>(false);

// // //   // Filtering products based on search query and category
// // //   useEffect(() => {
// // //     let allProducts = occasionsData.flatMap((occasion) => occasion.products);

// // //     // Filter by search query
// // //     if (searchQuery) {
// // //       allProducts = allProducts.filter((product) =>
// // //         product.name.toLowerCase().includes(searchQuery.toLowerCase())
// // //       );
// // //     }

// // //     // Filter by category
// // //     if (category) {
// // //       allProducts = allProducts.filter(
// // //         (product) => product.occasion === category
// // //       );
// // //     }

// // //     setFilteredProducts(allProducts);
// // //   }, [searchQuery, category]);

// // //   const handleSearch = () => {
// // //     console.log("Searching for:", searchQuery, "in category:", category);
// // //     setSearchOpen(false); // Close search bar on mobile
// // //     setSearchQuery(""); // Clear search input
// // //   };

// // //   const closeSearchOnSelect = () => {
// // //     setSearchOpen(false);
// // //     setSearchQuery("");
// // //   };

// // //   const closeMenu = () => setMenuOpen(false);

// // //   const toggleSearch = () => {
// // //     if (searchOpen) {
// // //       setSearchQuery(""); // Clear the search query
// // //     }
// // //     setSearchOpen((prev) => !prev);
// // //   };

// // //   return (
// // //     <header className="bg-white shadow-md sticky top-0 z-50 an">
// // //       {/* Top Section */}
// // //       <div className="flex justify-between items-center p-4 border-b">
// // //         {/* Logo Section */}
// // //         <div className="flex items-center gap-4">
// // //           <Image
// // //             src="/images/treasure.jpg"
// // //             alt="Wife's Treasure Logo"
// // //             width={60}
// // //             height={60}
// // //             className="rounded-full object-cover"
// // //           />
// // //           <div>
// // //             <h1 className="font-extrabold text-xl sm:text-2xl text-gray-900">
// // //               Wife's Treasure
// // //             </h1>
// // //             <p className="text-sm text-gray-500 hidden sm:block">
// // //               We Deliver... with Love
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* Mobile Hamburger Menu */}
// // //         <div className="flex items-center gap-4 sm:hidden">
// // //           <button onClick={toggleSearch} className="text-black">
// // //             <FaSearch size={18} />
// // //           </button>
// // //           <Link
// // //             href="/cart"
// // //             className="relative text-gray-700 hover:text-orange-500"
// // //           >
// // //             <FaShoppingCart size={18} />
// // //             {cart?.length > 0 && (
// // //               <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
// // //                 {cart.length}
// // //               </span>
// // //             )}
// // //           </Link>
// // //           <button
// // //             onClick={() => setMenuOpen((prev) => !prev)}
// // //             className="text-black"
// // //           >
// // //             {menuOpen ? <FaTimes size={24} /> : <FaBars size={20} />}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Search Bar (Desktop) */}
// // //       <div className="hidden sm:flex items-center gap-4 p-4 bg-gray-50">
// // //         <select
// // //           value={category}
// // //           onChange={(e) => setCategory(e.target.value)}
// // //           className="p-2 border rounded-md text-gray-700"
// // //         >
// // //           <option value="">Select Occasion</option>
// // //           <option value="Birthday">Birthday</option>
// // //           <option value="Anniversary">Anniversary</option>
// // //           {/* Add other categories */}
// // //         </select>
// // //         <input
// // //           type="text"
// // //           value={searchQuery}
// // //           onChange={(e) => setSearchQuery(e.target.value)}
// // //           placeholder="Search for products..."
// // //           className="p-2 border rounded-md flex-grow max-w-md text-gray-700"
// // //         />
// // //         <button
// // //           onClick={handleSearch}
// // //           className="p-2 bg-orange-500 text-white rounded-md"
// // //         >
// // //           <FaSearch />
// // //         </button>
// // //       </div>

// // //       {/* Search Bar (Mobile) */}
// // //       {searchOpen && (
// // //         <div className="sm:hidden p-4 bg-gray-50 border-t border-b">
// // //           <input
// // //             type="text"
// // //             value={searchQuery}
// // //             onChange={(e) => setSearchQuery(e.target.value)}
// // //             placeholder="Search..."
// // //             className="p-2 border rounded-md text-gray-700 w-full"
// // //           />
// // //           <button
// // //             onClick={handleSearch}
// // //             className="mt-2 p-2 bg-blue-500 text-white rounded-md w-full"
// // //           >
// // //             Search
// // //           </button>
// // //         </div>
// // //       )}

// // //       {/* Filtered Products */}
// // //       {searchQuery && filteredProducts.length > 0 && (
// // //         <div className="absolute bg-white shadow-md max-h-60 overflow-auto mt-2 w-full z-10">
// // //           {filteredProducts.map((product) => (
// // //             <Link
// // //               key={product.id}
// // //               href={`/product/${product.id}`}
// // //               onClick={closeSearchOnSelect}
// // //               className="block p-2 text-gray-700 hover:bg-gray-200"
// // //             >
// // //               {product.name}
// // //             </Link>
// // //           ))}
// // //         </div>
// // //       )}

// // //       {/* Mobile Navigation */}
// // //       {menuOpen && (
// // //         <div className="bg-white shadow-md absolute top-16 left-0 right-0 z-50">
// // //           <nav className="flex flex-col gap-4 p-4">
// // //             <Link
// // //               href="/"
// // //               onClick={closeMenu}
// // //               className="hover:text-orange-500 text-gray-700"
// // //             >
// // //               Home
// // //             </Link>
// // //             <Link
// // //               href="/cart"
// // //               onClick={closeMenu}
// // //               className="hover:text-orange-500 text-gray-700"
// // //             >
// // //               Cart
// // //             </Link>
// // //             <Link
// // //               href="/wishlist"
// // //               onClick={closeMenu}
// // //               className="hover:text-orange-500 text-gray-700"
// // //             >
// // //               Wishlist
// // //             </Link>
// // //             {isLoggedIn ? (
// // //               <button
// // //                 onClick={() => {
// // //                   logout();
// // //                   closeMenu();
// // //                 }}
// // //                 className="hover:text-blue-500 text-gray-700 flex items-center gap-1"
// // //               >
// // //                 <FaUser /> Logout
// // //               </button>
// // //             ) : (
// // //               <>
// // //                 <Link
// // //                   href="/login"
// // //                   onClick={closeMenu}
// // //                   className="hover:text-orange-500 text-gray-700"
// // //                 >
// // //                   Login
// // //                 </Link>
// // //                 <Link
// // //                   href="/signup"
// // //                   onClick={closeMenu}
// // //                   className="hover:text-blue-500 text-gray-700"
// // //                 >
// // //                   Register
// // //                 </Link>
// // //               </>
// // //             )}
// // //           </nav>
// // //         </div>
// // //       )}
// // //     </header>
// // //   );
// // // };

// // // export default Header;


















// // "use client";
// // import React, { useState, useEffect } from "react";
// // import Image from "next/image";
// // import {
// //   FaSearch,
// //   FaShoppingCart,
// //   FaHeart,
// //   FaUser,
// //   FaBars,
// //   FaTimes,
// // } from "react-icons/fa";
// // import Link from "next/link";
// // import { useCart } from "../context/CartContext";
// // import { useWishlist } from "../context/WishlistContext";
// // import { useAuth } from "../context/AuthContext";
// // import occasionsData from "../../public/data/occasions.json";

// // const Header: React.FC = () => {
// //   const { cart } = useCart();
// //   const { wishlist } = useWishlist();
// //   const { isLoggedIn, logout } = useAuth();

// //   const [category, setCategory] = useState<string>("");
// //   const [searchQuery, setSearchQuery] = useState<string>("");
// //   const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
// //   const [menuOpen, setMenuOpen] = useState<boolean>(false);
// //   const [searchOpen, setSearchOpen] = useState<boolean>(false);

// //   // Filtering products based on search query and category
// //   useEffect(() => {
// //     let allProducts = occasionsData.flatMap((occasion) => occasion.products);

// //     // Filter by search query
// //     if (searchQuery) {
// //       allProducts = allProducts.filter((product) =>
// //         product.name.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //     }

// //     // Filter by category
// //     if (category) {
// //       allProducts = allProducts.filter(
// //         (product) => product.occasion === category
// //       );
// //     }

// //     setFilteredProducts(allProducts);
// //   }, [searchQuery, category]);

// //   const handleSearch = () => {
// //     console.log("Searching for:", searchQuery, "in category:", category);
// //     setSearchOpen(false); // Close search bar on mobile
// //   };

// //   const closeSearchOnSelect = () => {
// //     setSearchOpen(false);
// //     setSearchQuery("");
// //   };

// //   const closeMenu = () => setMenuOpen(false);

// //   const toggleSearch = () => {
// //     if (searchOpen) {
// //       setSearchQuery(""); // Clear the search query
// //     }
// //     setSearchOpen((prev) => !prev);
// //   };

// //   return (
// //     <header className="bg-white shadow-md sticky top-0 z-50 animate-slide-down">
// //       {/* Top Section */}
// //       <div className="flex justify-between items-center p-4 border-b">
// //         {/* Logo Section */}
// //         <div className="flex items-center gap-4">
// //           <Image
// //             src="/images/treasure.jpg"
// //             alt="Wife's Treasure Logo"
// //             width={60}
// //             height={60}
// //             className="rounded-full object-cover"
// //           />
// //           <div>
// //             <h1 className="font-extrabold text-xl sm:text-2xl text-gray-900">
// //               Wife's Treasure
// //             </h1>
// //             <p className="text-sm text-gray-500 hidden sm:block">
// //               We Deliver... with Love
// //             </p>
// //           </div>
// //         </div>

// //         {/* Mobile Hamburger Menu */}
// //         <div className="flex items-center gap-4 sm:hidden">
// //           <button onClick={toggleSearch} className="text-black">
// //             <FaSearch size={18} />
// //           </button>
// //           <Link
// //             href="/cart"
// //             className="relative text-gray-700 hover:text-orange-500"
// //           >
// //             <FaShoppingCart size={18} />
// //             {cart?.length > 0 && (
// //               <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
// //                 {cart.length}
// //               </span>
// //             )}
// //           </Link>
// //           <button
// //             onClick={() => setMenuOpen((prev) => !prev)}
// //             className="text-black"
// //           >
// //             {menuOpen ? <FaTimes size={24} /> : <FaBars size={20} />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Search Bar (Desktop) */}
// //       <div className="hidden sm:flex items-center gap-4 p-4 bg-gray-50">
// //         <select
// //           value={category}
// //           onChange={(e) => setCategory(e.target.value)}
// //           className="p-2 border rounded-md text-gray-700"
// //         >
// //           <option value="">Select Occasion</option>
// //           <option value="Birthday">Birthday</option>
// //           <option value="Anniversary">Anniversary</option>
// //           <option value="Surprises">Surprises</option>
// //           <option value="NewYear">New Year</option>
// //           <option value="Eid">Eid</option>
// //           <option value="Valentine">Valentine</option>
// //         </select>
// //         <input
// //           type="text"
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //           placeholder="Search for products..."
// //           className="p-2 border rounded-md flex-grow max-w-md text-gray-700"
// //         />
// //         <button
// //           onClick={handleSearch}
// //           className="p-2 bg-orange-500 text-white rounded-md"
// //         >
// //           <FaSearch />
// //         </button>
// //       </div>

// //       {/* Search Bar (Mobile) */}
// //       {searchOpen && (
// //         <div className="sm:hidden p-4 bg-gray-50 border-t border-b">
// //           <input
// //             type="text"
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)}
// //             placeholder="Search..."
// //             className="p-2 border rounded-md text-gray-700 w-full"
// //           />
// //           <button
// //             onClick={handleSearch}
// //             className="mt-2 p-2 bg-blue-500 text-white rounded-md w-full"
// //           >
// //             Search
// //           </button>
// //         </div>
// //       )}

      

// //       {/* Filtered Products */}
// //       {searchQuery && filteredProducts.length > 0 && (
// //         <div className="absolute bg-white shadow-md max-h-60 overflow-auto mt-2 w-full z-10">
// //           {filteredProducts.map((product) => (
// //             <Link
// //               key={product.id}
// //               href={`/product/${product.id}`}
// //               onClick={closeSearchOnSelect}
// //               className="block p-2 text-gray-700 hover:bg-gray-200"
// //             >
// //               {product.name}
// //             </Link>
// //           ))}
// //         </div>
// //       )}

// //       {/* Mobile Navigation */}
// //       {menuOpen && (
// //         <div className="bg-white shadow-md absolute top-16 left-0 right-0 z-50">
// //           <nav className="flex flex-col gap-4 p-4">
// //             <Link
// //               href="/"
// //               onClick={closeMenu}
// //               className="hover:text-orange-500 text-gray-700"
// //             >
// //               Home
// //             </Link>
// //             <Link
// //               href="/cart"
// //               onClick={closeMenu}
// //               className="hover:text-orange-500 text-gray-700"
// //             >
// //               Cart
// //             </Link>
// //             <Link
// //               href="/wishlist"
// //               onClick={closeMenu}
// //               className="hover:text-orange-500 text-gray-700"
// //             >
// //               Wishlist
// //             </Link>
// //             {isLoggedIn ? (
// //               <button
// //                 onClick={() => {
// //                   logout();
// //                   closeMenu();
// //                 }}
// //                 className="hover:text-blue-500 text-gray-700 flex items-center gap-1"
// //               >
// //                 <FaUser /> Logout
// //               </button>
// //             ) : (
// //               <>
// //                 <Link
// //                   href="/login"
// //                   onClick={closeMenu}
// //                   className="hover:text-orange-500 text-gray-700"
// //                 >
// //                   Login
// //                 </Link>
// //                 <Link
// //                   href="/signup"
// //                   onClick={closeMenu}
// //                   className="hover:text-blue-500 text-gray-700"
// //                 >
// //                   Register
// //                 </Link>
// //               </>
// //             )}
// //           </nav>
// //         </div>
// //       )}
// //     </header>
// //   );
// // };

// // export default Header;







// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import {
//   FaSearch,
//   FaShoppingCart,
//   FaHeart,
//   FaUser,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import Link from "next/link";
// import { useCart } from "../context/CartContext";
// import { useWishlist } from "../context/WishlistContext";
// import { useAuth } from "../context/AuthContext";
// import occasionsData from "../../public/data/occasions.json";

// const Header: React.FC = () => {
//   const { cart } = useCart();
//   const { wishlist } = useWishlist();
//   const { isLoggedIn, logout } = useAuth();

//   const [category, setCategory] = useState<string>("");
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
//   const [menuOpen, setMenuOpen] = useState<boolean>(false);
//   const [searchOpen, setSearchOpen] = useState<boolean>(false);

//   // Filtering products based on search query and category
//   useEffect(() => {
//     let allProducts = occasionsData.flatMap((occasion) => occasion.products);

//     // Filter by search query
//     if (searchQuery) {
//       allProducts = allProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Filter by category
//     if (category) {
//       allProducts = allProducts.filter(
//         (product) => product.occasion === category
//       );
//     }

//     setFilteredProducts(allProducts);
//   }, [searchQuery, category]);

//   const handleSearch = () => {
//     console.log("Searching for:", searchQuery, "in category:", category);
//     setSearchOpen(false); // Close search bar on mobile
//   };

//   const closeSearchOnSelect = () => {
//     setSearchOpen(false);
//     setSearchQuery("");
//   };

//   const closeMenu = () => setMenuOpen(false);

//   const toggleSearch = () => {
//     if (searchOpen) {
//       setSearchQuery(""); // Clear the search query
//     }
//     setSearchOpen((prev) => !prev);
//   };

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50 animate-slide-down">
//       {/* Top Section */}
//       <div className="flex justify-between items-center p-4 border-b">
//         {/* Logo Section */}
//         <div className="flex items-center gap-4">
//           <Image
//             src="/images/treasure.jpg"
//             alt="Wife's Treasure Logo"
//             width={60}
//             height={60}
//             className="rounded-full object-cover"
//           />
//           <div>
//             <h1 className="font-extrabold text-xl sm:text-2xl text-gray-900">
//               Wife's Treasure
//             </h1>
//             <p className="text-sm text-gray-500 hidden sm:block">
//               We Deliver... with Love
//             </p>
//           </div>
//         </div>

//         {/* Mobile Hamburger Menu */}
//         <div className="flex items-center gap-4 sm:hidden">
//           <button onClick={toggleSearch} className="text-black">
//             <FaSearch size={18} />
//           </button>
//           <Link
//             href="/cart"
//             className="relative text-gray-700 hover:text-orange-500"
//           >
//             <FaShoppingCart size={18} />
//             {cart?.length > 0 && (
//               <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
//                 {cart.length}
//               </span>
//             )}
//           </Link>
//           <button
//             onClick={() => setMenuOpen((prev) => !prev)}
//             className="text-black"
//           >
//             {menuOpen ? <FaTimes size={24} /> : <FaBars size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Search Bar (Desktop) */}
//       <div className="hidden sm:flex items-center gap-4 p-4 bg-gray-50">
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="p-2 border rounded-md text-gray-700"
//         >
//           <option value="">Select Occasion</option>
//           <option value="Birthday">Birthday</option>
//           <option value="Anniversary">Anniversary</option>
//           <option value="Surprises">Surprises</option>
//           <option value="NewYear">New Year</option>
//           <option value="Eid">Eid</option>
//           <option value="Valentine">Valentine</option>
//         </select>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search for products..."
//           className="p-2 border rounded-md flex-grow max-w-md text-gray-700"
//         />
//         <button
//           onClick={handleSearch}
//           className="p-2 bg-orange-500 text-white rounded-md"
//         >
//           <FaSearch />
//         </button>
//       </div>

//       {/* Search Bar (Mobile) */}
//       {searchOpen && (
//         <div className="sm:hidden p-4 bg-gray-50 border-t border-b">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search..."
//             className="p-2 border rounded-md text-gray-700 w-full"
//           />
//           <button
//             onClick={handleSearch}
//             className="mt-2 p-2 bg-blue-500 text-white rounded-md w-full"
//           >
//             Search
//           </button>
//         </div>
//       )}

//       {/* Filtered Products */}
//       {searchQuery && filteredProducts.length > 0 && (
//         <div className="absolute bg-white shadow-md max-h-60 overflow-auto mt-2 w-full z-10">
//           {filteredProducts.map((product) => (
//             <Link
//               key={product.id}
//               href={`/product/${product.id}`}
//               onClick={closeSearchOnSelect}
//               className="block p-2 text-gray-700 hover:bg-gray-200"
//             >
//               {product.name}
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* Mobile Navigation */}
//       {menuOpen && (
//         <div className="bg-white shadow-md absolute top-16 left-0 right-0 z-50">
//           <nav className="flex flex-col gap-4 p-4">
//             <Link
//               href="/"
//               onClick={closeMenu}
//               className="hover:text-orange-500 text-gray-700"
//             >
//               Home
//             </Link>
//             <Link
//               href="/cart"
//               onClick={closeMenu}
//               className="hover:text-orange-500 text-gray-700"
//             >
//               Cart
//             </Link>
//             <Link
//               href="/wishlist"
//               onClick={closeMenu}
//               className="hover:text-orange-500 text-gray-700"
//             >
//               Wishlist
//             </Link>
//             {isLoggedIn ? (
//               <button
//                 onClick={() => {
//                   logout();
//                   closeMenu();
//                 }}
//                 className="hover:text-blue-500 text-gray-700 flex items-center gap-1"
//               >
//                 <FaUser /> Logout
//               </button>
//             ) : (
//               <>
//                 <Link
//                   href="/login"
//                   onClick={closeMenu}
//                   className="hover:text-orange-500 text-gray-700"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   href="/signup"
//                   onClick={closeMenu}
//                   className="hover:text-blue-500 text-gray-700"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;



"use client"
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
import { useState, useEffect } from "react";
import occasionsData from "../../public/data/occasions.json";

const Header: React.FC = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { isLoggedIn, logout } = useAuth();

  const [category, setCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  // Filtering products based on search query and category
  useEffect(() => {
    let allProducts = occasionsData.flatMap((occasion) => occasion.products);

    // Filter by search query
    if (searchQuery) {
      allProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (category) {
      allProducts = allProducts.filter(
        (product) => product.occasion === category
      );
    }

    setFilteredProducts(allProducts);
  }, [searchQuery, category]);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery, "in category:", category);
    setSearchOpen(false); // Close search bar on mobile
    setSearchQuery(""); // Clear search input
  };

  const closeSearchOnSelect = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const closeMenu = () => setMenuOpen(false);

  const toggleSearch = () => {
    if (searchOpen) {
      setSearchQuery(""); // Clear the search query
    }
    setSearchOpen((prev) => !prev);
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
            width={40}
            height={40}
            className="rounded-full object-cover lg:w-[60px] h-[60px]"
            quality={100} // Optional: Set higher quality if necessary
          />
          <div>
            <h1 className="font-extrabold text-xl sm:text-[14px] font-clash lg:text-2xl text-yellow-600">
              Wife&apos;s Treasure
            </h1>
            <p className="text-sm text-gray-500 hidden sm:block font-santhoshi">
              We Deliver.....with Love
            </p>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex items-center gap-4 sm:hidden">
          <button onClick={toggleSearch} className="text-black">
            <FaSearch size={18} />
          </button>
          <Link
            href="/cart"
            className="relative text-gray-700 hover:text-orange-500"
          >
            <FaShoppingCart size={18} />
            {cart?.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
                {cart.length}
              </span>
            )}
          </Link>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-black"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6 items-center">
          <Link href="/" className="hover:text-orange-500 text-gray-700">
            Home
          </Link>
          <Link
            href="/cart"
            className="relative hover:text-orange-500 text-gray-700"
          >
            <FaShoppingCart size={18} />
            {cart?.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
                {cart.length}
              </span>
            )}
          </Link>
          <Link
            href="/wishlist"
            className="relative hover:text-orange-500 text-gray-700"
          >
            <FaHeart size={18} />
            {wishlist?.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
                {wishlist.length}
              </span>
            )}
          </Link>
          {isLoggedIn ? (
            <button
              onClick={logout}
              className="hover:text-orange-500 flex items-center gap-1 text-gray-700"
            >
              <FaUser /> Logout
            </button>
          ) : (
            <>
              <Link href="/login" className="hover:text-orange-500 text-gray-700">
                Login
              </Link>
              <Link
                href="/signup"
                className="hover:text-orange-500 text-gray-700"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* Search Bar (Desktop) */}
      <div className="hidden sm:flex items-center gap-4 p-4 bg-gray-50">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-md text-gray-700"
        >
          <option value="">Select Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          {/* Add other categories */}
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
          className="p-2 bg-orange-500 text-white rounded-md"
        >
          <FaSearch />
        </button>
      </div>

      {/* Search Bar (Mobile) */}
      {searchOpen && (
        <div className="sm:hidden p-4 bg-gray-50 border-t border-b">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="p-2 border rounded-md text-gray-700 w-full"
          />
          <button
            onClick={handleSearch}
            className="mt-2 p-2 bg-blue-500 text-white rounded-md w-full"
          >
            Search
          </button>
        </div>
      )}

      {/* Filtered Products */}
      {searchQuery && filteredProducts.length > 0 && (
        <div className="absolute bg-white shadow-md max-h-60 overflow-auto mt-2 w-full z-10">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              onClick={closeSearchOnSelect}
              className="block p-2 text-gray-700 hover:bg-gray-200"
            >
              {product.name}
            </Link>
          ))}
        </div>
      )}

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="bg-white shadow-md absolute top-16 left-0 right-0 z-50">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="hover:text-orange-500 text-gray-700"
            >
              Home
            </Link>
            <Link
              href="/cart"
              onClick={closeMenu}
              className="relative hover:text-orange-500 text-gray-700"
            >
              <FaShoppingCart size={18} />
              {cart?.length > 0 && (
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
                  {cart.length}
                </span>
              )}
            </Link>
            <Link
              href="/wishlist"
              onClick={closeMenu}
              className="relative hover:text-orange-500 text-gray-700"
            >
              <FaHeart size={18} />
              {wishlist?.length > 0 && (
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
                  {wishlist.length}
                </span>
              )}
            </Link>
            {isLoggedIn ? (
              <button
                onClick={logout}
                className="hover:text-orange-500 flex items-center gap-1 text-gray-700"
              >
                <FaUser /> Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="hover:text-orange-500 text-gray-700"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={closeMenu}
                  className="hover:text-orange-500 text-gray-700"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;


