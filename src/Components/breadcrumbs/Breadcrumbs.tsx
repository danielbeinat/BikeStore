import { Link } from "react-router-dom";

interface BreadcrumbsProps {
  product: {
    category: string;
    name: string;
  };
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const { product } = props;

  return (
    <>
      <div className="font-poppins flex flex-wrap items-center gap-1 px-4 lg:px-20 mt-4 lg:mt-10">
        <Link
          to="/"
          className="font-bold text-xs lg:text-sm cursor-pointer hover:text-gray-500"
        >
          Inicio
        </Link>
        <span className="font-bold text-xs lg:text-sm">{">"}</span>

        <Link to={`/${product.category}`} className="text-xs lg:text-sm">
          {product.category}
        </Link>
        <span className="font-bold text-xs lg:text-sm">{">"}</span>

        <span className="text-xs lg:text-sm">{product.name}</span>
      </div>
    </>
  );
};
