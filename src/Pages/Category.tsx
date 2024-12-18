import { useContext, useState } from "react";
import { Context, ContextValue } from "../Context/Context.jsx";
import { Item } from "../Components/Item/Item.jsx";
import { Link } from "react-router-dom";

interface propsproduct {
  Category: string;
}

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  category: string;
  type?: any;
}

export const Category: React.FC<propsproduct> = (props) => {
  const { AllProducts } = useContext(Context) as ContextValue;

  const [sortedProducts, setSortedProducts] = useState<Product[]>([
    ...AllProducts,
  ]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    let newSortedProducts = [...AllProducts];

    switch (value) {
      case "Menor a Mayor":
        newSortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "Mayor a Menor":
        newSortedProducts.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }

    setSortedProducts(newSortedProducts);
  };

  return (
    <>
      <div className="font-poppins mt-10 px-4 lg:px-5">
        <div className="flex flex-col gap-10 lg:flex-row justify-between items-center px-10 ">
          <div className="flex gap-1">
            <Link
              to="/"
              className="font-bold text-sm cursor-pointer hover:text-gray-500"
            >
              inicio
            </Link>
            <span className="font-bold text-sm">{">"}</span>
            <span className="text-sm">{props.Category}</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center items-start gap-2">
            <h1 className="text-xs">Ordenar por: </h1>

            <select
              className="h-8 w-60 text-xs"
              id="sort"
              name="sort"
              onChange={handleSortChange}
            >
              <option className="text-xs" value="Menor a Mayor">
                Precio: de Menor a Mayor
              </option>
              <option className="text-xs" value="Mayor a Menor">
                Precio: de Mayor a Menor
              </option>
            </select>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:place-items-center mt-20">
          {sortedProducts.map((product, i) => {
            if (product.category === props.Category) {
              return (
                <Item
                  key={i}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  type={product.type}
                />
              );
            } else {
              return null;
            }
          })}
        </section>
        <div className="flex justify-center py-10">
          <button
            className="color-white bg-black hover:bg-gray-700 text-white mt-10 font-bold py-2 px-10 rounded"
            type="button"
          >
            Ver mas
          </button>
        </div>
      </div>
    </>
  );
};
