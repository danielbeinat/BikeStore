import { createContext, useState } from "react";
import { AllProducts } from "../assets/AllProducts/AllProducts.js";

export const Context = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < AllProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ContextProvider = (props) => {
  const [cart, setcart] = useState(getDefaultCart());
  console.log(cart);

  const addToCart = (itemId) => {
    setcart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setcart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = AllProducts.find(
          (product) => product.id === Number(item)
        );
        total += cart[item] * itemInfo.price;
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
  const contextvalue = {
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
