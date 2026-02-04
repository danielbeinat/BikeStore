import React from "react";
import { AllProducts } from "../../assets/AllProducts/AllProducts";
import { Item } from "../Item/Item";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  category: string;
  type?: any;
}

const filter: Product[] = AllProducts.filter(
  (product) => product.category === "Indumentaria"
);

const bike: Product[] = filter.slice(0, 4);

export const Featured: React.FC = () => {
  return (
    <>
      <div className="font-poppins mt-10 mb-10 px-4 lg:px-5">
        <h1 className="text-center text-gray-800 font-bold p-8 text-4xl">
          Destacados
        </h1>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:place-items-center">
          {bike.map((product, index) => (
            <Item
              key={index}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              type={product.type}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default React.memo(Featured);
