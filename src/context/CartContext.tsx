
// "use client"
// // src/context/CartContext.tsx
// import React, { createContext, useState, useContext, ReactNode } from 'react';

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
// }

// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: string) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prevCart) => prevCart.filter((product) => product.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };


// "use client";
// import React, { createContext, useState, useContext, ReactNode } from "react";

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
// }

// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: string) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     console.log("Adding product to cart:", product);  // Debugging log
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const removeFromCart = (id: string) => {
//     console.log("Removing product with id:", id);  // Debugging log
//     setCart((prevCart) => prevCart.filter((product) => product.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };



















// "use client";
// import React, { createContext, useState, useContext, ReactNode } from "react";

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;  // Add quantity to each product
// }

// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: string) => void;
//   updateItemQuantity: (id: string, delta: number) => void; // Add function for updating quantity
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     console.log("Adding product to cart:", product);  // Debugging log
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }]; // Add product with quantity 1 if it's new
//     });
//   };

//   const removeFromCart = (id: string) => {
//     console.log("Removing product with id:", id);  // Debugging log
//     setCart((prevCart) => prevCart.filter((product) => product.id !== id));
//   };

//   const updateItemQuantity = (id: string, delta: number) => {
//     setCart((prevCart) => {
//       return prevCart.map((product) =>
//         product.id === id
//           ? { ...product, quantity: Math.max(product.quantity + delta, 1) } // Ensure quantity doesn't go below 1
//           : product
//       );
//     });
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateItemQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };



"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateItemQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  checkout: () => void;  // Checkout function to handle order processing
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Add product to the cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove product from the cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  // Update item quantity in the cart
  const updateItemQuantity = (id: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(product.quantity + delta, 1) }
          : product
      );
    });
  };

  // Clear the cart (for checkout)
  const clearCart = () => {
    setCart([]);
  };

  // Get total price of cart items
  const getTotalPrice = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };

  // Checkout process (clear cart after order)
  const checkout = () => {
    if (cart.length === 0) {
      console.log("Cart is empty. Please add items before proceeding.");
      return; // Optionally show an alert for empty cart
    }

    const total = getTotalPrice();
    console.log(`Checkout successful! Total Price: RS ${total}`);
    clearCart(); // Clear the cart after successful checkout
    // Additional checkout logic can go here, such as redirecting to an order confirmation page or sending data to an API
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateItemQuantity, clearCart, getTotalPrice, checkout }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
