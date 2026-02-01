import React from "react";
import { AllProducts } from "../../assets/AllProducts/AllProducts";
import { Item } from "../Item/Item";

// Obtener los últimos 4 productos agregados (IDs más altos = más recientes)
const latestProducts = AllProducts
  .sort((a, b) => b.id - a.id) // Ordenar por ID descendente (más reciente primero)
  .slice(0, 4); // Tomar los primeros 4 (más recientes)

// Datos de prueba por si AllProducts está vacío
const testProducts = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x300?text=Producto+1",
    name: "Producto de Prueba 1",
    price: 10000,
    category: "Test",
    type: "Test"
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x300?text=Producto+2",
    name: "Producto de Prueba 2",
    price: 20000,
    category: "Test",
    type: "Test"
  }
];

// Usar productos de prueba si no hay productos reales
const productsToShow = latestProducts.length > 0 ? latestProducts : testProducts;

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  category: string;
  sizes?: string[];
  type?: any;
}

export const News: React.FC = () => {
  return (
    <>
      <div className="font-poppins my-24 px-4 lg:px-5">
        <h1 className="text-center font-bold text-gray-800  p-8 text-4xl">
          Novedades
        </h1>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:place-items-center">
          {productsToShow.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">No hay productos disponibles</p>
          ) : (
            productsToShow.map((product: Product, index: number) => {
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
            })
          )}
        </section>
      </div>
    </>
  );
};

export default React.memo(News);
