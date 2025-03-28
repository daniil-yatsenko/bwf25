import { gsap } from "gsap";

function flagshipProgramsInit() {
  const programBlocks = document.querySelectorAll(
    ".home-about_program-content-wrapper"
  );

  if (!programBlocks || window.innerWidth < 992) return;

  programBlocks.forEach((block) => {
    const caption = block.querySelector(".home-about_learn-more-wrapper");
    const tl = gsap.timeline({ paused: true });

    gsap.set(caption, {
      opacity: 0,
      y: "1rem",
      scaleY: 0.8,
      pointerEvents: "none",
    });

    tl.to(caption, {
      opacity: 1,
      y: "",
      scaleY: 1,
      duration: 0.3,
      ease: "power2.inOut",
    });
    tl.to(block.parentElement, { borderRadius: "0.5rem", duration: 0.3 }, "<");

    block.addEventListener("mouseenter", () => {
      tl.restart();
    });
    block.addEventListener("mouseleave", () => {
      tl.reverse();
    });
  });
}

const homeInit = () => {
  flagshipProgramsInit();
  console.log("Home page initialized");
};

export { homeInit };
