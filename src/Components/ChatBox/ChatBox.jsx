import { useState } from "react";

export const ChatBox = () => {
  const [Show, setShow] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const HandlerSubmit = (e) => {
    e.preventDefault();

    setEnviado(true);
  };

  return (
    <>
      <div
        onClick={() => setShow(!Show)}
        className="fixed hidden lg:flex items bg-gray-800 text-white p-4 center bottom-3 border border-white cursor-pointer z-50 hover:scale-105 duration-500 right-5 rounded-full shadow-2xl"
      >
        {Show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        )}
      </div>

      {Show && (
        <div className="fixed font-poppins flex flex-col bg-gray-800 text-white py-2 bottom-[75px] cursor-pointer z-50 w-1/3 right-4  rounded shadow-2xl">
          <header className="flex w-full justify-between items-center py-2 pb-5 px-4 border-b border-blue-500  ">
            <h1 className="text-sm font-bold">
              Será un placer responder tus dudas
            </h1>
            <div className="cursor-pointer" onClick={() => setShow(!Show)}>
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </header>
          <div>
            {enviado ? ( // Mostrar el icono de enviado si el estado es true
              <div className="flex justify-center flex-col gap-2 h-96 items-center text-green-500 text-lg">
                <div className="rounded-full border border-green-500 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h1>Mensaje Enviado</h1>
              </div>
            ) : (
              <form
                onSubmit={HandlerSubmit}
                className="p-4 py-5 flex gap-5 flex-col"
                action=""
              >
                <fieldset className="flex flex-col gap-2">
                  <label className="text-xs" htmlFor="nombre">
                    nombre *
                  </label>
                  <input
                    className="bg-transparent text-sm outline-none border-blue-500 text-white "
                    type="text"
                    name="nombre"
                    id="nombre"
                    required
                  />
                </fieldset>

                <fieldset className="flex flex-col gap-2">
                  <label className="text-xs" htmlFor="Email">
                    Email *
                  </label>
                  <input
                    className="bg-transparent text-sm outline-none border-blue-500 text-white"
                    type="text"
                    name="Email"
                    id="Email"
                    required
                  />
                </fieldset>

                <fieldset className="flex flex-col gap-2">
                  <label className="text-xs" htmlFor="consulta">
                    Tu mensaje *
                  </label>
                  <textarea
                    className="bg-transparent text-sm outline-none border-blue-500 text-white resize-none"
                    type="text"
                    name="consulta"
                    id="consulta"
                    required
                  ></textarea>
                </fieldset>

                <fieldset className="flex items-center gap-2">
                  <input type="checkbox" name="acepto" id="acepto" required />
                  <label className="text-xs" htmlFor="acepto">
                    Acepto los términos y condiciones
                  </label>
                </fieldset>
                <div className="flex justify-center items-center">
                  <button
                    className="text-sm w-16 flex items-center justify-center h-16 bg-blue-500 px-4 py-1 rounded-full shadow-lg hover:bg-blue-600"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
