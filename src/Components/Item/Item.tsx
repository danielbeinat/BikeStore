import { Link } from "react-router-dom";

interface propsitem {
  id: number;
  image: string;
  name: string;
  price: number;
  type: string;
}

export const Item: React.FC<propsitem> = (props) => {
  const installmentPrice = (props.price / 12)
    .toFixed(3)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div className="w-full relative max-w-sm bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      {props.price >= 50000 && (
        <div className="absolute top-2 left-2">
          <p className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full font-bold">
            ENVÍO GRATIS
          </p>
        </div>
      )}
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt={props.name}
          className="h-64 w-full object-contain p-4"
          onClick={() => window.scrollTo(0, 0)}
        />
      </Link>
      <div className="px-4 pb-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-2xl font-bold text-red-600">
            ${props.price.toLocaleString()}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
          <p className="text-sm text-gray-700 font-medium mb-2 hover:text-gray-900">
            {props.name}
          </p>
        </Link>
        <p className="text-sm text-green-600 font-medium">
          Hasta 12 cuotas sin interés de ${installmentPrice}
        </p>
      </div>
    </div>
  );
};
