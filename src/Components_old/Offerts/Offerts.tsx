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
  (product: Product) => product.category === "Bicicletas"
);

const bike = filter.splice(0, 4);

export const Offerts = () => {
  return (
    <>
      <div className="font-poppins mb-24  px-4 lg:px-5">
        <h1 className="text-center font-bold text-gray-800 p-8 text-4xl	">
          Ofertas
        </h1>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:place-items-center">
          {bike.map((product, index) => {
            return (
              <Item
                key={index}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                type={product.type}
              />
            );
          })}
        </section>
      </div>
    </>
  );
};
