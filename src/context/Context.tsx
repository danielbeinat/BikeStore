"use client";

import { createContext, useState, ReactNode, useMemo, useCallback } from "react";
import { AllProducts, Product } from "@/src/assets/AllProducts/AllProducts";

export interface ContextValue {
  AllProducts: Product[];
  cart: { [key: number]: number };
  setcart: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
  addToCart: (itemId: number, quantity?: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  getTotalcartItems: () => number;
  wishlist: number[];
  addToWishlist: (itemId: number) => void;
  removeFromWishlist: (itemId: number) => void;
  isInWishlist: (itemId: number) => boolean;
  getTotalWishlistItems: () => number;
  cartModalOpen: boolean;
  setCartModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ContextValue | null>(null);

const getDefaultCart = () => {
  let cart: { [key: number]: number } = {};
  for (let i = 0; i < AllProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = (props: ContextProviderProps) => {
  const [cart, setcart] = useState<{ [key: number]: number }>(getDefaultCart());
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cartModalOpen, setCartModalOpen] = useState<boolean>(false);

  const addToCart = useCallback((itemId: number, quantity: number = 1) => {
    setcart((prev) => ({ ...prev, [itemId]: prev[itemId] + quantity }));
    setCartModalOpen(true);
  }, []);

  const removeFromCart = useCallback((itemId: number) => {
    setcart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }, []);

  const addToWishlist = useCallback((itemId: number) => {
    setWishlist((prev) => {
      if (prev.includes(itemId)) {
        return prev;
      }
      return [...prev, itemId];
    });
  }, []);

  const removeFromWishlist = useCallback((itemId: number) => {
    setWishlist((prev) => prev.filter((id) => id !== itemId));
  }, []);

  const isInWishlist = useCallback((itemId: number) => {
    return wishlist.includes(itemId);
  }, [wishlist]);

  const getTotalCartAmount = useCallback(() => {
    let total = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = AllProducts.find(
          (product) => product.id === Number(item),
        );
        if (itemInfo) {
          total += cart[item] * itemInfo.price;
        }
      }
    }
    return total;
  }, [cart]);

  const getTotalcartItems = useCallback(() => {
    let total = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        total += cart[item];
      }
    }
    return total;
  }, [cart]);

  const getTotalWishlistItems = useCallback(() => {
    return wishlist.length;
  }, [wishlist]);

  const contextvalue: ContextValue = useMemo(
    () => ({
      AllProducts,
      cart,
      setcart,
      addToCart,
      removeFromCart,
      getTotalCartAmount,
      getTotalcartItems,
      wishlist,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      getTotalWishlistItems,
      cartModalOpen,
      setCartModalOpen,
    }),
    [
      cart,
      wishlist,
      cartModalOpen,
      addToCart,
      removeFromCart,
      getTotalCartAmount,
      getTotalcartItems,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      getTotalWishlistItems,
    ],
  );

  return (
    <Context.Provider value={contextvalue}>{props.children}</Context.Provider>
  );
};
