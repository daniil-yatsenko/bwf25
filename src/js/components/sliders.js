import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const splideConfig = {
  default: {
    pagination: false,
  },
  horizontalCard: {
    pagination: false,
    gap: "calc(var(--sizes-gaps--padding))",
  },
  testimonials: {
    type: "loop",
    pagination: false,
    gap: "1rem",
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
      config = splideConfig.testimonials;
      //   mountConfig = { AutoScroll }; // uncomment to enable autoscroll
    }

    let splide = new Splide(slider, config);
    splide.mount(mountConfig);
  });
};

export { sliders };
