"use client";

import { useContext } from "react";
import { Context, ContextValue } from "@/src/context/Context";

export const useShopContext = () => {
  const context = useContext(Context) as ContextValue;
  if (!context) {
    throw new Error("useShopContext debe usarse dentro de ContextProvider");
  }
  return context;
};
