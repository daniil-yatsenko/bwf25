// import { navbar } from "./navigation";
// import { lenisInit } from "./lenis.js";
// import { componentsInit } from "../components/index";
import { sliders } from "../components/sliders";
import "@splidejs/splide/css/core";

// var lenisMain = lenisInit();
// export { lenisMain };

const globalInit = async () => {
  //   navbar.init();
  //   componentsInit(document);
  console.log("globalInit");
  sliders();
};

export { globalInit };
