import { createContext, useState } from "react";
import { AllProducts, Product } from "../assets/AllProducts/AllProducts";

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
  children: React.ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = (props) => {
  const [cart, setcart] = useState<{ [key: number]: number }>(getDefaultCart());
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cartModalOpen, setCartModalOpen] = useState<boolean>(false);

  const addToCart = (itemId: number, quantity: number = 1) => {
    setcart((prev) => ({ ...prev, [itemId]: prev[itemId] + quantity }));
    setCartModalOpen(true);
  };

  const removeFromCart = (itemId: number) => {
    setcart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const addToWishlist = (itemId: number) => {
    setWishlist((prev) => {
      if (prev.includes(itemId)) {
        return prev;
      }
      return [...prev, itemId];
    });
  };

  const removeFromWishlist = (itemId: number) => {
    setWishlist((prev) => prev.filter((id) => id !== itemId));
  };

  const isInWishlist = (itemId: number) => {
    return wishlist.includes(itemId);
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = AllProducts.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          total += cart[item] * itemInfo.price;
        }
      }
    }
    return total;
  };

  const getTotalcartItems = () => {
    let total = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        total += cart[item];
      }
    }
    return total;
  };

  const getTotalWishlistItems = () => {
    return wishlist.length;
  };

  const contextvalue: ContextValue = {
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
  };

  return (
    <>
      <Context.Provider value={contextvalue}>{props.children}</Context.Provider>
    </>
  );
};
