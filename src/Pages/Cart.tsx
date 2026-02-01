"use client";

import { useContext } from "react";
import Link from "next/link";
import { Context, ContextValue } from "@/src/context/Context";

interface Item {
  id: number;
  image: string;
  name: string;
  price: number;
  // Agrega cualquier otra propiedad que tenga tu aplicación
}
export default function Cart() {
  const { AllProducts, cart, removeFromCart, getTotalCartAmount } = useContext(
    Context,
  ) as ContextValue;

  return (
    <>
      <div className="font-poppins flex flex-col lg:flex-row justify-between gap-10 lg:px-20 px-8 mt-10 mb-16">
        <div className="relative h-fit overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Producto
                </th>
                <th scope="col" className="px-6 py-3">
                  Precio
                </th>
                <th scope="col" className="px-6 py-3">
                  Cantidad
                </th>

                <th scope="col" className="px-6 py-3">
                  Total
                </th>

                <th scope="col" className="px-6 py-3">
                  Eliminar
                </th>
              </tr>
            </thead>
            <tbody>
              {AllProducts.map((item: Item) => {
                if (cart[item.id] > 0) {
                  return (
                    <tr
                      key={item.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="p-4">
                        <img
                          src={item.image}
                          className="w-16 md:w-32 max-w-full max-h-full"
                          alt={item.name}
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </td>

                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        ${item.price.toLocaleString()}
                      </td>
                      <td className="pl-10">
                        <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                          {cart[item.id]}
                        </span>
                      </td>

                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        ${(item.price * cart[item.id]).toLocaleString()}
                      </td>
                      <td className="pl-10">
                        <button onClick={() => removeFromCart(item.id)}>
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
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                }

                return null;
              })}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 h-fit shadow-lg p-4 w-64 lg:w-80 rounded">
          <h1 className="text-center font-bold">Resumen de Compra</h1>
          <div>
            <div className="flex justify-between py-5 mx-auto">
              <p className="text-gray-500">Subtotal</p>
              <p className="text-gray-500">
                $ {getTotalCartAmount().toLocaleString()}
              </p>
            </div>
            <hr />
            <div className="flex justify-between py-5 mx-auto">
              <p className="text-gray-500">Envio</p>
              <p className="text-gray-500">Gratis</p>
            </div>
            <hr />
            <div className="flex justify-between py-5 mx-auto">
              <p className="text-gray-500">Total</p>
              <p className="font-bold">
                $ {getTotalCartAmount().toLocaleString()}
              </p>
            </div>
          </div>
          <Link href="/checkout">
            <button
              className="bg-black text-white w-full p-2 rounded"
              type="submit"
            >
              Comprar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
