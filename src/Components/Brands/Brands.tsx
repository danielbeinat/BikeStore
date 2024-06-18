import { Bike } from "../../assets/BikeBrands/BikeBrands";

interface Item {
  id: number;
  img: string;
}
export const Brands: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-6 justify-items-center my-24 py-24 px-10 lg:px-20 bg-gray-100   ">
        {Bike.map((item: Item) => (
          <div
            className="flex items-center justify-center rounded shadow-lg h-28 w-28 p-4 bg-white"
            key={item.id}
          >
            <img className="w-28 h-28" src={item.img} />
          </div>
        ))}
      </div>
    </>
  );
};
