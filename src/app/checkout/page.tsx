

// // // // // "use client";

// // // // // import { useCart } from "@/context/CartContext";
// // // // // import { useState } from "react";
// // // // // import { useRouter } from "next/navigation";

// // // // // const CheckoutPage = () => {
// // // // //   const { cart, clearCart } = useCart();
// // // // //   const router = useRouter();
// // // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // // //   const [customerDetails, setCustomerDetails] = useState({
// // // // //     name: '',
// // // // //     email: '',
// // // // //     address: '',
// // // // //     phone: '',
// // // // //   });

// // // // //   const totalPrice = cart.reduce(
// // // // //     (acc, item) => acc + item.price * item.quantity,
// // // // //     0
// // // // //   );

// // // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // // // //     const { name, value } = e.target;
// // // // //     setCustomerDetails({
// // // // //       ...customerDetails,
// // // // //       [name]: value,
// // // // //     });
// // // // //   };

// // // // //   const handleCheckout = async () => {
// // // // //     setIsSubmitting(true);
// // // // //     localStorage.setItem("orderDetails", JSON.stringify({
// // // // //       totalPrice,
// // // // //       cart,
// // // // //       customerDetails,
// // // // //     }));
// // // // //     clearCart();
// // // // //     router.push("/order-confirmation");
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
// // // // //       <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
// // // // //         <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Checkout</h1>

// // // // //         {/* Cart Details */}
// // // // //         <div className="space-y-6 mb-6">
// // // // //           <div className="flex justify-between border-b pb-4">
// // // // //             <div>
// // // // //               <h2 className="font-medium text-lg text-gray-700">Cart Summary</h2>
// // // // //             </div>
// // // // //             <div className="text-lg text-gray-600">Total Price: RS {totalPrice}</div>
// // // // //           </div>
// // // // //           {cart.map((product) => (
// // // // //             <div key={product.id} className="flex justify-between items-center py-4 border-b">
// // // // //               <div>
// // // // //                 <h2 className="font-medium text-gray-700">{product.name}</h2>
// // // // //                 <p className="text-sm text-gray-500">Price: RS {product.price}</p>
// // // // //               </div>
// // // // //               <p className="text-gray-600">Quantity: {product.quantity}</p>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Customer Details Form */}
// // // // //         <div className="mb-6 space-y-4">
// // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // // //             <input
// // // // //               type="text"
// // // // //               name="name"
// // // // //               placeholder="Enter your name"
// // // // //               value={customerDetails.name}
// // // // //               onChange={handleChange}
// // // // //               className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // //             />
// // // // //             <input
// // // // //               type="email"
// // // // //               name="email"
// // // // //               placeholder="Enter your email"
// // // // //               value={customerDetails.email}
// // // // //               onChange={handleChange}
// // // // //               className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // //             />
// // // // //           </div>
// // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // // //             <input
// // // // //               type="tel"
// // // // //               name="phone"
// // // // //               placeholder="Enter your phone number"
// // // // //               value={customerDetails.phone}
// // // // //               onChange={handleChange}
// // // // //               className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // //             />
// // // // //             <textarea
// // // // //               name="address"
// // // // //               placeholder="Enter your delivery address"
// // // // //               value={customerDetails.address}
// // // // //               onChange={handleChange}
// // // // //               className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // //             />
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Checkout Button */}
// // // // //         <div className="flex justify-center mt-6">
// // // // //           <button
// // // // //             onClick={handleCheckout}
// // // // //             disabled={isSubmitting || !customerDetails.name || !customerDetails.email || !customerDetails.address || !customerDetails.phone}
// // // // //             className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg focus:outline-none hover:bg-blue-600 disabled:opacity-50"
// // // // //           >
// // // // //             {isSubmitting ? "Processing..." : "Proceed to Checkout"}
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CheckoutPage;








// // // // "use client";

// // // // import { useCart } from "@/context/CartContext";
// // // // import { useState } from "react";
// // // // import { useRouter } from "next/navigation";

// // // // const CheckoutPage = () => {
// // // //   const { cart, clearCart } = useCart();
// // // //   const router = useRouter();
// // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // //   const [customerDetails, setCustomerDetails] = useState({
// // // //     name: '',
// // // //     email: '',
// // // //     address: '',
// // // //     phone: '',
// // // //   });

// // // //   const totalPrice = cart.reduce(
// // // //     (acc, item) => acc + item.price * item.quantity,
// // // //     0
// // // //   );

// // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // // //     const { name, value } = e.target;
// // // //     setCustomerDetails({
// // // //       ...customerDetails,
// // // //       [name]: value,
// // // //     });
// // // //   };

// // // //   const handleCheckout = async () => {
// // // //     setIsSubmitting(true);
// // // //     localStorage.setItem("orderDetails", JSON.stringify({
// // // //       totalPrice,
// // // //       cart,
// // // //       customerDetails,
// // // //     }));
// // // //     clearCart();
// // // //     router.push("/order-confirmation");
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-12 px-6 sm:px-8 lg:px-12">
// // // //       <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl shadow-blue-500/30">
// // // //         <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Checkout</h1>

// // // //         {/* Cart Details */}
// // // //         <div className="space-y-6 mb-8">
// // // //           <div className="flex justify-between items-center border-b pb-4">
// // // //             <h2 className="font-medium text-lg text-gray-700">Cart Summary</h2>
// // // //             <div className="text-lg font-semibold text-gray-800">Total Price: RS {totalPrice}</div>
// // // //           </div>
// // // //           {cart.map((product) => (
// // // //             <div key={product.id} className="flex justify-between items-center py-4 border-b">
// // // //               <div>
// // // //                 <h3 className="font-medium text-gray-700">{product.name}</h3>
// // // //                 <p className="text-sm text-gray-500">Price: RS {product.price}</p>
// // // //               </div>
// // // //               <p className="text-gray-600">Quantity: {product.quantity}</p>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Customer Details Form */}
// // // //         <div className="mb-6 space-y-4">
// // // //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // //             <input
// // // //               type="text"
// // // //               name="name"
// // // //               placeholder="Enter your name"
// // // //               value={customerDetails.name}
// // // //               onChange={handleChange}
// // // //               className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // //             />
// // // //             <input
// // // //               type="email"
// // // //               name="email"
// // // //               placeholder="Enter your email"
// // // //               value={customerDetails.email}
// // // //               onChange={handleChange}
// // // //               className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // //             />
// // // //           </div>
// // // //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // //             <input
// // // //               type="tel"
// // // //               name="phone"
// // // //               placeholder="Enter your phone number"
// // // //               value={customerDetails.phone}
// // // //               onChange={handleChange}
// // // //               className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // //             />
// // // //             <textarea
// // // //               name="address"
// // // //               placeholder="Enter your delivery address"
// // // //               value={customerDetails.address}
// // // //               onChange={handleChange}
// // // //               className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* Checkout Button */}
// // // //         <div className="flex justify-center mt-8">
// // // //           <button
// // // //             onClick={handleCheckout}
// // // //             disabled={isSubmitting || !customerDetails.name || !customerDetails.email || !customerDetails.address || !customerDetails.phone}
// // // //             className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 disabled:opacity-50 transition-all duration-300 transform hover:scale-105"
// // // //           >
// // // //             {isSubmitting ? "Processing..." : "Proceed to Checkout"}
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CheckoutPage;



"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Function to sanitize input data (removes unwanted characters)
const sanitizeInput = (input: string) => {
  return input.replace(/[^a-zA-Z0-9\s,.'-]/g, ''); // Keep alphanumeric characters and basic punctuation
};

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerDetails({
      ...customerDetails,
      [name]: sanitizeInput(value), // Sanitize the input value
    });
  };

  const handleCheckout = async () => {
    setIsSubmitting(true);
    localStorage.setItem("orderDetails", JSON.stringify({
      totalPrice,
      cart,
      customerDetails,
    }));
    clearCart();
    router.push("/order-confirmation");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-12 px-6 sm:px-8 lg:px-12">
      
      {/* Navigation Bar */}
      <div className="flex justify-center space-x-8 mb-8">
        <Link href="/" className="text-lg font-semibold text-blue-700 hover:text-blue-900 transition duration-300">Home</Link>
        <Link href="/occasion-gifts" className="text-lg font-semibold text-blue-700 hover:text-blue-900 transition duration-300">Occasion Gifts</Link>
       
       
      </div>

      {/* Checkout Form */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl shadow-blue-500/30">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Checkout</h1>

        {/* Cart Details */}
        <div className="space-y-6 mb-8">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="font-medium text-lg text-gray-700">Cart Summary</h2>
            <div className="text-lg font-semibold text-gray-800">Total Price: RS {totalPrice}</div>
          </div>
          {cart.map((product) => (
            <div key={product.id} className="flex justify-between items-center py-4 border-b">
              <div>
                <h3 className="font-medium text-gray-700">{product.name}</h3>
                <p className="text-sm text-gray-500">Price: RS {product.price}</p>
              </div>
              <p className="text-gray-600">Quantity: {product.quantity}</p>
            </div>
          ))}
        </div>

        {/* Customer Details Form */}
        <div className="mb-6 space-y-4 text-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={customerDetails.name}
              onChange={handleChange}
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={customerDetails.email}
              onChange={handleChange}
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={customerDetails.phone}
              onChange={handleChange}
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
            />
            <textarea
              name="address"
              placeholder="Enter your delivery address"
              value={customerDetails.address}
              onChange={handleChange}
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Checkout Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleCheckout}
            disabled={isSubmitting || !customerDetails.name || !customerDetails.email || !customerDetails.address || !customerDetails.phone}
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 disabled:opacity-50 transition-all duration-300 transform hover:scale-105"
          >
            {isSubmitting ? "Processing..." : "Proceed to Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;




