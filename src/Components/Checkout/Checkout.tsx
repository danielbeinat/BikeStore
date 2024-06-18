import React, { useContext } from "react";
import { Context, ContextValue } from "../../Context/Context";

export const Checkout: React.FC = () => {
  const { getTotalCartAmount } = useContext(Context) as ContextValue;

  return (
    <>
      <div className="font-poppins flex flex-col lg:flex-row gap-10 lg:px-20 px-8 mt-10 mb-16">
        <div className="flex flex-col gap-10 md:w-[750px]">
          <div className="flex flex-col gap-4 w-full">
            <h1>1 - Email</h1>
            <input className="md:w-[400px] rounded-full" type="text" />
            <button className="bg-black text-white p-2 rounded w-32">
              Siguiente
            </button>
          </div>
          <div className="bg-gray-100 text-sm p-5 uppercase border-l-4 border-black w-full">
            2 - Datos personales
          </div>
          <div className="bg-gray-100 text-sm p-5 uppercase border-l-4 border-black w-full">
            3 - Entrega
          </div>
          <div className="bg-gray-100 text-sm p-5 uppercase border-l-4 border-black w-full">
            4 - Pago
          </div>
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
              <p className="text-gray-500">Envío</p>
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
        </div>
      </div>
    </>
  );
};
