"use client";

import { useState, useContext, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import { Context, ContextValue } from "@/src/context/Context";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { AllProducts } = useContext(Context) as ContextValue;
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredProducts = AllProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 5);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search/${encodeURIComponent(searchTerm)}`);
      setShowResults(false);
      setSearchTerm("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search"
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
          onFocus={() => {
            if (searchTerm.length > 0) {
              setShowResults(true);
            }
          }}
          className="w-full pl-10 pr-4 py-2 bg-white text-gray-900 placeholder-gray-400 border-0 rounded-md focus:outline-none focus:ring-0 text-sm"
          aria-label="Buscar productos"
        />
        <div className="absolute left-3 pointer-events-none">
          <SearchIcon className="h-4 w-4 text-gray-400" />
        </div>
      </div>

      {showResults && searchTerm && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
          {filteredProducts.length > 0 ? (
            <div className="py-1">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    setShowResults(false);
                    setSearchTerm("");
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      ${product.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500">
              No se encontraron productos
            </div>
          )}
        </div>
      )}
    </div>
  );
}
