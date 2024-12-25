import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context, ContextValue } from "../../../Context/Context";

export const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { AllProducts } = useContext(Context) as ContextValue;
  const navigate = useNavigate();

  const filteredProducts = AllProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 5);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm)}`);
      setShowResults(false);
      setSearchTerm("");
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setShowResults(e.target.value.length > 0);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-none"
        aria-label="Buscar productos"
      />
      <button
        className="absolute right-3 top-1/2 transform -translate-y-1/2"
        onClick={handleSearch}
        aria-label="Realizar búsqueda"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      {showResults && searchTerm && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  setShowResults(false);
                  setSearchTerm("");
                }}
              >
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 object-cover mr-3"
                  />
                  <div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-gray-500">
                      ${product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="px-4 py-2 text-sm text-gray-500">
              No se encontraron productos
            </p>
          )}
        </div>
      )}
    </div>
  );
};
