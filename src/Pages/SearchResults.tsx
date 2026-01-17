import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context, ContextValue } from "../Context/Context";
import { Item } from "../Components/Item/Item";
import { sanitizeSearchQuery } from "../utils/sanitization";

export const SearchResults: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  const { AllProducts } = useContext(Context) as ContextValue;
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    if (query) {
      // Sanitize search query to prevent XSS attacks
      const sanitizedQuery = sanitizeSearchQuery(query);
      const filteredProducts = AllProducts.filter((product) =>
        product.name.toLowerCase().includes(sanitizedQuery.toLowerCase())
      );
      setSearchResults(filteredProducts);
    }
  }, [query, AllProducts]);

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-6">
        Resultados de búsqueda para: {query ? sanitizeSearchQuery(query) : ""}
      </h1>
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              type={product.type}
            />
          ))}
        </div>
      ) : (
        <p className="text-xl">
          No se encontraron resultados para tu búsqueda.
        </p>
      )}
    </div>
  );
};
