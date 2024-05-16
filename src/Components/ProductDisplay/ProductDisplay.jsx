import { useContext, useState } from "react";
import { RelatedProducts } from "../RelatedProducts/RelatedProducts";
import { Context } from "../../Context/Context";
import { CartModal } from "../CartModal/CartModal";

import { ProductSlider } from "./Slider/ProductSlider.jsx";
import { SecurityInformation } from "./SecurityInformation/SecurityInformation.jsx";

export const ProductDisplay = (props) => {
  const { product } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const defaultSize =
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : "";
  const [selectedSize, setSelectedSize] = useState(defaultSize);

  const { addToCart } = useContext(Context);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const installmentPrice = (product.price / 6)
    .toFixed(3)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <div>
        <div className="font-poppins flex flex-col lg:flex-row gap-10 items-start mt-10 px-20">
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
                  {`6 cuotas fijas de $${installmentPrice.toLocaleString(
                    "es-MX",
                    { style: "currency", currency: "MXN" }
                  )}`}
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
            <button
              onClick={() => {
                addToCart(product.id); // Añadir el producto al carrito
                toggleModal(); // Abrir el modal del carrito
              }}
              className="bg-black text-white px-5 py-2 rounded-lg mt-5"
            >
              Agregar al Carrito
            </button>
            <CartModal open={isOpen} setOpen={setIsOpen} />

            <SecurityInformation />
          </div>
        </div>

        <RelatedProducts category={product.category} />
      </div>
    </>
  );
};
