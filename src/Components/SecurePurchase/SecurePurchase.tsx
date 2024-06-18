import { Secure } from "../../assets/securepurchase-resources/securepurchase-resources";

interface Item {
  image: string;
  title: string;
  description: string;
}

export const SecurePurchase: React.FC = () => {
  return (
    <>
      <div className="font-poppins grid grid-cols-1 py-16 px-10 gap-12 lg:gap-4 md:gap-4 md:grid-cols-3 lg:grid-cols-3">
        {Secure.map((item: Item, index: number) => (
          <div
            key={index}
            className="flex items-center gap-3 justify-center flex-col"
          >
            <img className="w-20 h-20" src={item.image} alt={item.title} />

            <h1 className="text-gray-600 font-bold text-center">
              {item.title}
            </h1>
            <p className="text-sm text-center text-gray-600 px-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
