import { AllProducts } from "../../assets/AllProducts/AllProducts";
import { Item } from "../Item/Item";

const filter = AllProducts.filter(
  (product) => product.category === "Accesorios"
);

const bike = filter.splice(0, 4);

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  type?: any;
}

export const News: React.FC = () => {
  return (
    <>
      <div className="font-poppins my-24 px-4 lg:px-5">
        <h1 className="text-center font-bold text-gray-800  p-8 text-4xl">
          Novedades
        </h1>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:place-items-center">
          {bike.map((product: Product, index: number) => {
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
