import { AllProducts } from "../../assets/AllProducts/AllProducts";
import { Item } from "../Item/Item";

export const RelatedProducts = ({ category }) => {
  // Filtrar los productos basados en la categoría del producto actual
  const relatedProducts = AllProducts.filter(
    (product) => product.category === category
  ).slice(0, 4);

  return (
    <>
      <div className="font-poppins lg:px-10 lg:py-10 mt-20 mb-20">
        <h1 className="text-3xl text-center font-bold">
          Productos Relacionados
        </h1>

        <div className="grid gap-4 mt-10 grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 ">
          {relatedProducts.map((product, i) => (
            <Item
              key={i}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price.toLocaleString()}
            />
          ))}
        </div>
      </div>
    </>
  );
};
