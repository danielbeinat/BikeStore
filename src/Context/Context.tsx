import { createContext, useState } from "react";
import { AllProducts, Product } from "../assets/AllProducts/AllProducts";

export interface ContextValue {
  AllProducts: Product[];
  cart: { [key: number]: number };
  setcart: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  getTotalcartItems: () => number;
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
  console.log(cart);

  const addToCart = (itemId: number) => {
    setcart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setcart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
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

  const contextvalue: ContextValue = {
    AllProducts,
    cart,
    setcart,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalcartItems,
  };

  return (
    <>
      <Context.Provider value={contextvalue}>{props.children}</Context.Provider>
    </>
  );
};
