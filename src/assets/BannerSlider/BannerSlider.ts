import banner1 from "./banner1.webp";
import banner2 from "./banner2.webp";
import banner3 from "./banner3.webp";
import { StaticImageData } from "next/image";

interface Banner {
  id: number;
  image: StaticImageData;
}

export const Banner: Banner[] = [
  {
    id: 1,
    image: banner1,
  },
  {
    id: 2,
    image: banner2,
  },
  {
    id: 3,
    image: banner3,
  },
];
