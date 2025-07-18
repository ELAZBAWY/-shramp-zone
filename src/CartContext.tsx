import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

// Cart item type definition
export interface CartItem {
  image: string | undefined;
  id: number;
  title: string;
  price: number;
  quantity: number;
}

// Cart context type definition
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

// Create the cart context
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

// CartProvider component to wrap app and provide cart state
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add item to cart
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart by id
  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  // Increase quantity of a specific item
  const increaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  };

  // Decrease quantity of a specific item (minimum 1)
  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(i.quantity - 1, 1) } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
