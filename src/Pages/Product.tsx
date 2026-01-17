import { useContext } from "react";
import { Context, ContextValue } from "../Context/Context";
import { useParams, Navigate } from "react-router-dom";
import { Breadcrumbs } from "../Components/breadcrumbs/Breadcrumbs";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { sanitizeProductId } from "../utils/sanitization";
import { Product } from "../assets/AllProducts/AllProducts";

export const ProductPage: React.FC = () => {
  const { AllProducts } = useContext(Context) as ContextValue;
  const { productId } = useParams<{ productId: string }>();

  // Sanitize and validate product ID
  const sanitizedId = sanitizeProductId(productId);

  if (!sanitizedId) {
    // Invalid product ID - redirect to home or show 404
    return <Navigate to="/" replace />;
  }

  const product = AllProducts.find((p: Product) => p.id === sanitizedId);

  if (!product) {
    // Product not found - redirect to home or show 404
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
    </>
  );
};

// Export with original name for backward compatibility
export const Product = ProductPage;
