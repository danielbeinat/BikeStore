"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import { Context, ContextValue } from "@/src/context/Context";
import ProductDisplay from "@/src/components/ProductDisplay/ProductDisplay";
import { sanitizeProductId } from "@/src/utils/sanitization";
import { Product } from "@/src/assets/AllProducts/AllProducts";
import { notFound } from "next/navigation";

export default function ProductPage() {
  const { AllProducts } = useContext(Context) as ContextValue;
  const { id: productId } = useParams() as { id?: string };

  // Sanitize and validate product ID
  const sanitizedId = sanitizeProductId(productId);

  if (!sanitizedId) {
    notFound();
  }

  const product = AllProducts.find((p: Product) => p.id === sanitizedId);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDisplay product={product} />
    </>
  );
}
