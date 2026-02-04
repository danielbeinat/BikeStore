"use client";

import Slider from "@/src/components/Slider/Slider";
import SecurePurchase from "@/src/components/SecurePurchase/SecurePurchase";
import Offerts from "@/src/components/Offerts/Offerts";
import News from "@/src/components/News/News";
import Featured from "@/src/components/Featured/Featured";
import Brands from "@/src/components/Brands/Brands";

export default function Home() {
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
}
