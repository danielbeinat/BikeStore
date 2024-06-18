import { useContext } from "react";
import { Context } from "../Context/Context.jsx";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../Components/breadcrumbs/Breadcrumbs";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";

export const Product: React.FC = () => {
  const { AllProducts } = useContext<any>(Context);

  const { productId } = useParams();

  const product = AllProducts.find((e: any) => e.id === Number(productId));

  return (
    <>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
    </>
  );
};
