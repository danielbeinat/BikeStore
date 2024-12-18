import { Slider } from "../Components/Slider/Slider";
import { SecurePurchase } from "../Components/SecurePurchase/SecurePurchase";
import { Offerts } from "../Components/Offerts/Offerts";
import { News } from "../Components/News/News";
import { Featured } from "../Components/Featured/Featured";
import { Brands } from "../Components/Brands/Brands";

export const Home: React.FC = () => {
  return (
    <>
      <Slider />
      <SecurePurchase />
      <Offerts />
      <News />
      <Featured />
      <Brands />
    </>
  );
};
