import bianchi from "./bianchi.svg";
import cannondale from "./cannondale.svg";
import cube from "./cube.svg";
import garmin from "./garmin.svg";
import giant from "./giant.svg";
import kona from "./kona.svg";
import merida from "./merida.svg";
import orbea from "./orbea.svg";
import pinarello from "./pinarello.svg";
import shimano from "./shimano.svg";
import scott from "./scott.svg";
import trek from "./trek.svg";

interface Bike {
  id: number;
  img: string;
}
export const Bike: Bike[] = [
  { id: 1, img: bianchi },
  { id: 2, img: cannondale },
  { id: 3, img: cube },
  { id: 4, img: garmin },
  { id: 5, img: giant },
  { id: 6, img: kona },
  { id: 7, img: merida },
  { id: 8, img: orbea },
  { id: 9, img: pinarello },
  { id: 10, img: shimano },
  { id: 11, img: scott },
  { id: 12, img: trek },
];
