import { useContext } from "react";
import { Context } from "../Context/Context.jsx";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../Components/breadcrumbs/Breadcrumbs";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";

export const Product = () => {
  const { AllProducts } = useContext(Context);

  const { productId } = useParams();

  const product = AllProducts.find((e) => e.id === Number(productId));

  return (
    <>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
    </>
  );
};
