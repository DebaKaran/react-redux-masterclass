import bird from "../svg/bird.svg";
import cat from "../svg/cat.svg";
import cow from "../svg/cow.svg";
import dog from "../svg/dog.svg";
import gator from "../svg/gator.svg";
import horse from "../svg/horse.svg";

export const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

export type Animal = keyof typeof svgMap;
