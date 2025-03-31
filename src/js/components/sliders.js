import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css/core";

const ease = "cubic-bezier(0.45, 0, 0.55, 1)";

const splideConfig = {
  default: {
    pagination: false,
    easing: ease,
  },
  horizontalCard: {
    pagination: false,
    gap: "calc(var(--sizes-gaps--padding))",
    easing: ease,
  },
  smallCard: {
    type: "loop",
    pagination: false,
    gap: "1rem",
    easing: ease,
    clones: 8,
    autoScroll: {
      speed: 5,
    },
  },
};

const sliders = () => {
  let sliders = document.querySelectorAll(".splide");

  sliders.forEach((slider) => {
    let config = splideConfig.default;
    let mountConfig = {};
    if (slider.classList.contains("is-horizontal-card")) {
      config = splideConfig.horizontalCard;
    }
    if (slider.classList.contains("is-small-card")) {
      config = splideConfig.smallCard;
      //   mountConfig = { AutoScroll }; // uncomment to enable autoscroll
    }

    let splide = new Splide(slider, config);
    splide.mount(mountConfig);
  });
};

export { sliders };
