import { navbar } from "./navigation";
import { lenisInit } from "./lenis.js";
import { componentsInit } from "../components/index";
import { animationsInit } from "../animations/index.js";

var lenisMain = lenisInit();
export { lenisMain };

const globalInit = async () => {
  navbar.init();
  componentsInit();
  animationsInit();
};

export { globalInit };
