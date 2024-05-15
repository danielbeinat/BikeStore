import { AllProducts } from "../../assets/AllProducts/AllProducts";
import { Item } from "../Item/Item";

const filter = AllProducts.filter(
  (product) => product.category === "Indumentaria"
);

const bike = filter.splice(0, 4);

export const Featured = () => {
  return (
    <>
      <div className="font-poppins mt-10 mb-10 px-4 lg:px-5">
        <h1 className="text-center text-gray-800 font-bold p-8 text-4xl">
          Destacados
        </h1>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:place-items-center">
          {bike.map((product, index) => {
            return (
              <Item
                key={index}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price.toLocaleString()}
              />
            );
          })}
        </section>
      </div>
    </>
  );
};
