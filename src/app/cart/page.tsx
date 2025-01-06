



"use client";
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter

const CartPage = () => {
  const { cart, removeFromCart, updateItemQuantity } = useCart();
  const router = useRouter(); // Initialize router

  const handleRemoveItem = (id: string) => {
    console.log("Removing item from cart with ID:", id);
    removeFromCart(id);
  };

  const handleIncreaseQuantity = (id: string) => {
    console.log("Increasing quantity for item ID:", id);
    updateItemQuantity(id, 1); // Increase by 1
  };

  const handleDecreaseQuantity = (id: string) => {
    console.log("Decreasing quantity for item ID:", id);
    updateItemQuantity(id, -1); // Decrease by 1
  };

  const handleCheckout = () => {
    router.push('/checkout'); // Redirect to the checkout page
  };

  if (cart.length === 0) {
    return (
      <div className="p-6 text-black font-santhoshi">
        <p>Your cart is empty. <Link href="/">Go back to shopping</Link></p>
      </div>
    );
  }

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
          onClick={() => router.push("/occasions/birthday")}
        >
          Birthday Gifts
        </span>{" "}
        &gt; <span className="font-semibold text-gray-800">Your Cart</span>
      </nav>

      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {cart.map((product, index) => (
          <div key={`${product.id}-${index}`} className="border p-4 rounded-md shadow-md">
            <div className="flex items-center gap-4">
              <Image
                src={product.image}
                alt={product.name}
                width={80}
                height={80}
                className="object-cover rounded-md"
              />
              <div>
                <h2 className="font-bold text-gray-600">{product.name}</h2>
                <p className='font-bold text-gray-600'>RS {product.price} x {product.quantity}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleDecreaseQuantity(product.id)}
                    className="text-red-500 hover:text-red-700 transition text-lg p-2"
                    disabled={product.quantity === 1}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(product.id)}
                    className="text-green-500 hover:text-green-700 transition text-lg p-2"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(product.id)}
                  className="mt-2 text-red-500 hover:text-red-700 transition text-lg"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-600">
          Total: RS {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        </h2>
        <button 
          onClick={handleCheckout} // On click, navigate to checkout
          className="mt-4 bg-purple-500  px-6 py-2 rounded-md hover:bg-blue-600 transition text-white"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
