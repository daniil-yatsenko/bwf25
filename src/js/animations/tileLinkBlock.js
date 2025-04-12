import { gsap } from "gsap";

const tileLinkBlockInit = () => {
  const Blocks = document.querySelectorAll("[tile-link-block]"); // tile-link-block

  if (!Blocks || window.innerWidth < 992) return;

  Blocks.forEach((block) => {
    const caption = block.querySelector("[tile-link-block-caption]"); // tile-link-block-caption
    const tl = gsap.timeline({ paused: true });

    if (caption) {
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

      block.addEventListener("mouseenter", () => {
        tl.restart();
      });
      block.addEventListener("mouseleave", () => {
        tl.reverse();
      });
    }
  });
};

export { tileLinkBlockInit };
