import { AllProducts } from "../../assets/AllProducts/AllProducts";
import { Item } from "../Item/Item";

interface propcategory {
  category: string;
}

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  category: string;
  type?: any;
}

export const RelatedProducts: React.FC<propcategory> = ({ category }) => {
  // Filtrar los productos basados en la categoría del producto actual
  const relatedProducts: Product[] = AllProducts.filter(
    (product) => product.category === category
  ).slice(0, 4);

  return (
    <>
      <div className="font-poppins lg:px-10 lg:py-10 mt-20 mb-20">
        <h1 className="text-3xl text-center font-bold">
          Productos Relacionados
        </h1>

        <div className="grid gap-4 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((product, i) => (
            <Item
              key={i}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              type={product.type}
            />
          ))}
        </div>
      </div>
    </>
  );
};
