// import { exampleComponent } from "./exampleComponent.js";
import { sliders } from "./sliders";
import { surenameFilterInit } from "./surenameFilter";
import { unwrapElements } from "../utils/unwrap.js";
import { pathNameInit } from "./pathname.js";
import { scrollLinksInit } from "./scrollLinks.js";
import { accordionInit } from "./accordion.js";
import { filtersInit } from "./filters.js";

export const componentsInit = (page = document) => {
  sliders();
  surenameFilterInit();
  pathNameInit();
  scrollLinksInit();
  accordionInit();
  unwrapElements(); // util to unwrap elements with [unwrap]
  filtersInit();
  console.log("components init");
};

// needed only with Barba.js
export const componentsCleanup = (page = document) => {
  console.log("components cleanup");
};
