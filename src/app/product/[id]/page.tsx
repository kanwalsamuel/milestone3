


"use client"; // Ensure client-side rendering
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import occasionsData from "../../../../public/data/occasions.json";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext"; // Import the cart context
import { useWishlist } from "@/context/WishlistContext"; // Import the wishlist context

const ProductDetailPage = () => {
  const { id } = useParams(); // Extract product ID from URL
  const router = useRouter(); // Router for navigation
  const [product, setProduct] = useState<any | null>(null);

  const { addToCart } = useCart(); // Use the cart context to add items
  const { addToWishlist } = useWishlist(); // Use the wishlist context to add items

  // Fetch product details based on ID
  useEffect(() => {
    const fetchData = async () => {
      const selectedProduct = occasionsData
        .flatMap((occasion) => occasion.products)
        .find((product) => product.id === id);

      if (selectedProduct) {
        setProduct(selectedProduct);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
  };

  const handleAddToWishlist = () => {
    addToWishlist(product); // Add the product to the wishlist
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-gray-600 mb-4">
        <span
          className="cursor-pointer hover:underline"
          onClick={() => router.push("/")}
        >
          Home
        </span>{" "}
        &gt;{" "}
        <span
          className="cursor-pointer hover:underline"
          onClick={() => router.push("/occasions")}
        >
          Occasion Gifts
        </span>{" "}
        &gt;{" "}
        <span
          className="cursor-pointer hover:underline"
          onClick={() => router.push(`/occasions/${product.occasion}`)}
        >
          {product.occasion} Gifts
        </span>{" "}
        &gt; <span className="font-semibold text-gray-800">{product.name}</span>
      </nav>

      {/* Product Details Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center animate-shutter-down">
          <Image
            src={product.image || "/default-image.jpg"}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-md shadow-md object-cover"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>

          {/* Category Display */}
          <p className="text-2xl font-semibold text-blue-600 mb-4">Price: RS {product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={handleAddToWishlist}
              className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Add to Wishlist
            </button>
{/* 
            <button
              onClick={() => router.push(`/occasions/${product.occasion}`)}
              className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
            >
              Back to {product.occasion}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
