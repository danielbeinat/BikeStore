import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Context, ContextValue } from "../../Context/Context";
import { useContext } from "react";

import { Link } from "react-router-dom";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  category: string;
  type?: any;
  href?: string;
}

type propstate = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartModal: React.FC<propstate> = ({ open, setOpen }) => {
  const { AllProducts, cart, removeFromCart, getTotalCartAmount } = useContext(
    Context
  ) as ContextValue;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Carrito de Compras
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {AllProducts.map((product: Product) => {
                              if (cart[product.id] > 0) {
                                return (
                                  <li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={product.image}
                                        alt={product.image}
                                        className=""
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href={product.href}>
                                              {product.name}
                                            </a>
                                          </h3>
                                          <p className="ml-4">
                                            $
                                            {(
                                              product.price * cart[product.id]
                                            ).toLocaleString()}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">
                                          Cantidad {cart[product.id]}
                                        </p>

                                        <div className="flex">
                                          <button
                                            onClick={() =>
                                              removeFromCart(product.id)
                                            }
                                            type="button"
                                            className="font-medium text-black"
                                          >
                                            Eliminar
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                );
                              }

                              return null;
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount().toLocaleString()}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Envío e impuestos calculados al finalizar la compra.
                      </p>
                      <div className="mt-6">
                        <Link
                          to="/cart"
                          className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm "
                          onClick={() => setOpen(false)}
                        >
                          Finalizar Compra
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          o{" "}
                          <button
                            type="button"
                            className="font-medium text-black hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continua comprando
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
