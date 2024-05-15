import { Link } from "react-router-dom";

export const Item = (props) => {
  const installmentPrice = (props.price / 6)
    .toFixed(3)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="w-72 bg-white relative shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt={props.name}
          className="h-80 w-72 object-contain rounded-t-xl"
          onClick={window.scrollTo(0, 0)}
        />
      </Link>
      <div className="px-4 w-72 flex items-center gap-2 flex-col">
        <span className="text-gray-400 mr-3 uppercase text-xs">
          {props.type}
        </span>
        <p className="text-sm  text-gray-600 truncate block capitalize">
          {props.name}
        </p>
        <div className="flex items-center gap-2 flex-col ">
          <p className="text-lg font-semibold">${props.price}</p>
          <div>
            <p className="text-sm text-gray-600">{`6 cuotas fijas de $${installmentPrice.toLocaleString(
              "es-MX",
              { style: "currency", currency: "MXN" }
            )}`}</p>
          </div>
          <div className="pb-5 mt-2">
            <Link
              to={`/product/${props.id}`}
              className="text-white text-sm bg-black px-2 py-2 rounded shadow-lg hover:bg-gray-800"
            >
              Agregar al carrito
            </Link>
          </div>
        </div>
      </div>

      {props.price >= 50.0 && (
        <div className="absolute top-0 right-0 p-3">
          <p className="text-xs bg-black text-white px-2 py-1 rounded-full">
            Envio Gratis
          </p>
        </div>
      )}
    </div>
  );
};
