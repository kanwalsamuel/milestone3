"use client"; // Ensure client-side rendering
import { useWishlist } from "@/context/WishlistContext"; // Import Wishlist context
import Image from "next/image";
import { useRouter } from "next/navigation";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist(); // Get wishlist data and remove function
  const router = useRouter(); // Router for navigation

  if (wishlist.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">Your Wishlist is Empty</h2>
        <p className="mt-4">Add items to your wishlist to see them here.</p>
      </div>
    );
  }

  const handleRemoveFromWishlist = (id: string) => {
    removeFromWishlist(id); // Call remove function to remove item from wishlist
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="border p-4 rounded-md shadow-md">
            <Image
              src={product.image || "/default-image.jpg"}
              alt={product.name}
              width={200}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <p className="text-sm mt-2">Price: RS {product.price}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => router.push(`/product/${product.id}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                View Product
              </button>
              <button
                onClick={() => handleRemoveFromWishlist(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
