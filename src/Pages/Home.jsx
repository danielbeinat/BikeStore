import { Slider } from "../Components/Slider/Slider.jsx";
import { SecurePurchase } from "../Components/SecurePurchase/SecurePurchase.jsx";
import { Offerts } from "../Components/Offerts/Offerts.jsx";
import { News } from "../Components/News/News.jsx";
import { Featured } from "../Components/Featured/Featured.jsx";
import { NewLetter } from "../Components/NewsLetter/NewLetter.jsx";
import { Brands } from "../Components/Brands/Brands.jsx";

export const Home = () => {
  return (
    <>
      <Slider />
      <SecurePurchase />
      <Offerts />
      <News />
      <Featured />
      <Brands />
      <NewLetter />
    </>
  );
};
