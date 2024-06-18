export const NewLetter: React.FC = () => {
  return (
    <>
      <div className="font-poppins  flex flex-col items-center align-center content-center justify-center bg-gray-900 py-16 gap-10 mt-24 pl-5 pr-5">
        <h1 className="text-white text-xl lg:text-3xl font-bold text-center">
          Suscribite a nuestro newsletter
        </h1>
        <p className="text-white text-sm lg:text-lg text-center lg:w-1/2 lg:text-base">
          Unite a nuestra comunidad. Mantenete al tanto de todos nuestros
          lanzamientos, promociones, novedades, y ¡mucho más!
        </p>

        <div className="flex gap-2 flex-col lg:flex-row">
          <input
            id="email"
            name="email"
            className="lg:w-96 rounded p-3"
            type="text"
            placeholder="Correo Electrónico"
            autoComplete="email"
          />
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded font-bold h-100 hover:bg-blue-800"
            type="submit"
          >
            Suscribirse
          </button>
        </div>
      </div>
    </>
  );
};
