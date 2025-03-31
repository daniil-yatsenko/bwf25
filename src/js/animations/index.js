import { generalInit } from "./general";
import { buttonsInit } from "./buttons";
import { tileLinkBlockInit } from "./tileLinkBlock";

const animationsInit = () => {
  generalInit();
  buttonsInit();
  tileLinkBlockInit();
};

export { animationsInit };
