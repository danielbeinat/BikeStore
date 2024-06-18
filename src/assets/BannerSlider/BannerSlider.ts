import banner1 from "./banner1.webp";
import banner2 from "./banner2.webp";
import banner3 from "./banner3.webp";

interface Banner {
  id: number;
  image: string;
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
