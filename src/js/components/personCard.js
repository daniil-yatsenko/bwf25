import { gsap } from "gsap";

gsap.defaults({
  ease: "power2.inOut",
  duration: 0.3,
});

const personCards = document.querySelectorAll(".person-card_card");

const personCardInit = () => {
  if (!personCards) return;

  personCards.forEach((card) => {
    const link = card.querySelector(".person-card_link");
    const imgWrapper = card.querySelector(".person-card_image-wrapper");
    const img = card.querySelector(".festival-writers_writer-image");
    if (link) {
      link.addEventListener("mouseover", () => {
        gsap.to(img, { scale: 1.02 });
      });
      link.addEventListener("mouseout", () => {
        gsap.to(img, { scale: 1 });
      });
    }
  });
};

export { personCardInit };
