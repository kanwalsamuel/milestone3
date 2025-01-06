



// src/app/order-confirmation/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const OrderConfirmationPage = () => {
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const storedOrder = localStorage.getItem("orderDetails");
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
      localStorage.removeItem("orderDetails"); // Clean up after displaying
    } else {
      router.push("/"); // Redirect if no order found
    }
  }, [router]);

  return (
    <div className="p-6 text-gray-500">
      <h1 className="text-2xl font-bold mb-4 text-gray-500">Order Confirmation</h1>
      {orderDetails ? (
        <div>
          <h2>Thank you for your order!</h2>
          <p>Your order has been placed successfully.</p>
          <div className="mt-6 text-gray-600">
            <h3 className="font-medium text-gray-700">Order Summary</h3>
            <ul>
              {orderDetails.cart.map((item: any) => (
                <li key={item.id}>{item.name} x {item.quantity}</li>
              ))}
            </ul>
            <p className="mt-2 font-bold text-gray-700">Total: RS {orderDetails.totalPrice}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OrderConfirmationPage;

