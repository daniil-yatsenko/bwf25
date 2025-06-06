import { createObserver } from "../utils/observer";
import { lenisMain } from "../global/globalInit";
import { scrollOffsets } from "../components/filters";

const festivalWritersInit = () => {
  const cmsList = document.querySelector("[data-observer-target]");
  const scrollOffset = scrollOffsets();

  const observer = createObserver(cmsList, () => {
    lenisMain.resize();
    lenisMain.scrollTo(cmsList, { offset: -scrollOffset });
  });
  return;
};

export { festivalWritersInit };
