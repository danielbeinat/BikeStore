"use client";

import { AllProducts } from "@/src/assets/AllProducts/AllProducts";
import Item from "@/src/components/Item/Item";

// Obtener los últimos 4 productos agregados (IDs más altos = más recientes)
const latestProducts = AllProducts.sort((a, b) => b.id - a.id) // Ordenar por ID descendente (más reciente primero)
  .slice(0, 4); // Tomar los primeros 4 (más recientes)

// Datos de prueba por si AllProducts está vacío
const testProducts = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x300?text=Producto+1",
    name: "Producto de Prueba 1",
    price: 10000,
    category: "Test",
    type: "Test",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x300?text=Producto+2",
    name: "Producto de Prueba 2",
    price: 20000,
    category: "Test",
    type: "Test",
  },
];

// Usar productos de prueba si no hay productos reales
const productsToShow =
  latestProducts.length > 0 ? latestProducts : testProducts;

export default function News() {
  return (
    <div className="font-poppins px-8 mb-12 lg:px-20 mt-5">
      <div className="flex justify-center mb-8">
        <div className="text-5xl font-bold text-center">
          Últimas
          <br />
          <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-transparent bg-clip-text">
            Novedades
          </span>
        </div>
      </div>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:place-items-center">
        {productsToShow.map((product: any) => (
          <Item
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            type={product.type}
          />
        ))}
      </section>
    </div>
  );
}
