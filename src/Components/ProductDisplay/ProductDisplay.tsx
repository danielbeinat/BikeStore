import { useContext, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { RelatedProducts } from "../RelatedProducts/RelatedProducts";
import { Context, ContextValue } from "../../Context/Context";
import { CartModal } from "../CartModal/CartModal";
import { Heart } from "lucide-react";

import { ProductSlider } from "./Slider/ProductSlider.jsx";
import { SecurityInformation } from "./SecurityInformation/SecurityInformation";

interface propsitems {
  product: {
    name: string;
    id: number;
    image: string;
    price: number;
    category: string;
    sizes?: string[];
    type?: any;
  };
}

export const ProductDisplay: React.FC<propsitems> = (props) => {
  const { product } = props;

  const toggleModal = () => {
    setCartModalOpen(!cartModalOpen);
  };

  const defaultSize =
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : "";
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [quantity, setQuantity] = useState(1);

  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist, cartModalOpen, setCartModalOpen } = useContext(
    Context
  ) as ContextValue;

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  const installmentPrice = (product.price / 6)
    .toFixed(3)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <div>
        <div className="font-poppins flex flex-col lg:flex-row gap-10 items-start mt-10 px-4 sm:px-6 lg:px-20">
          <ProductSlider product={product} />
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-3xl">{product.name}</h1>

            <div className="flex gap-5 flex-col">
              <h2 className="font-bold text-2xl">
                ${product.price.toLocaleString()}
              </h2>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>

                <p className="text-base text-gray-500 font-light">
                  {`6 cuotas fijas de $${installmentPrice}`}
                </p>
              </div>
            </div>

            {product.sizes && product.sizes.length > 0 && (
              <div className="flex gap-4 flex-col">
                <h1>Talle</h1>

                <div className="space-x-2 flex text-sm">
                  {product.sizes.map((size) => (
                    <label key={size} className="cursor-pointer">
                      <input
                        className="sr-only peer"
                        name="size"
                        type="radio"
                        value={size}
                        checked={selectedSize === size}
                        onChange={handleSizeChange}
                      />
                      <div className="w-9 h-9 rounded-lg flex items-center border border-slate-700 justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                        {size}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex gap-4 flex-col">
              <h1>Cantidad</h1>
              <div className="flex items-center gap-3">
                <button
                  onClick={decrementQuantity}
                  className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition-colors"
                  aria-label="Disminuir cantidad"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition-colors"
                  aria-label="Aumentar cantidad"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => {
                  addToCart(product.id, quantity); // Añadir el producto al carrito con cantidad
                  toggleModal(); // Abrir el modal del carrito
                }}
                className="flex-1 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Agregar al Carrito
              </button>
              <button
                onClick={() => {
                  if (isInWishlist(product.id)) {
                    removeFromWishlist(product.id);
                  } else {
                    addToWishlist(product.id);
                  }
                }}
                className={`px-5 py-2 rounded-lg border-2 transition-colors ${
                  isInWishlist(product.id)
                    ? "border-red-500 bg-red-50 text-red-600"
                    : "border-gray-300 hover:border-red-500 hover:text-red-500"
                }`}
                aria-label="Agregar a favoritos"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isInWishlist(product.id) ? "fill-red-500" : ""
                  }`}
                />
              </button>
            </div>
            <CartModal open={cartModalOpen} setOpen={setCartModalOpen} />

            <SecurityInformation />
          </div>
        </div>

        <RelatedProducts category={product.category} />
      </div>
    </>
  );
};
