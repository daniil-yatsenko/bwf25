import { navbar } from "./navigation";
import { lenisInit } from "./lenis.js";
import { componentsInit } from "../components/index";
import { unwrapElements } from "../utils/unwrap.js";
import { surenameFilterInit } from "../components/surenameFilter.js";

var lenisMain = lenisInit();
export { lenisMain };

const globalInit = async () => {
  navbar.init();
  unwrapElements();
  componentsInit();
  surenameFilterInit();
  console.log("globalInit");
};

export { globalInit };
