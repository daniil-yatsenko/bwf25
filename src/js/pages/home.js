import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// home hero animation is located in ../animations/general.js

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

function animateNavBar() {
  gsap.registerPlugin(ScrollTrigger);

  const navbar = document.querySelector(".navbar_navbar");
  if (!navbar || window.innerWidth < 992) return;

  const logo = navbar.querySelector(".navbar_logo");
  const wordmark = navbar.querySelector(".navbar_wordmark");
  const tl = gsap.timeline();

  ScrollTrigger.create({
    trigger: ".hero_description",
    start: "top top",
    end: "bottom-=80 top",
    scrub: true,
    animation: tl,
  });

  tl.fromTo(
    logo,
    { scale: 7, transformOrigin: "top left" },
    { scale: 1, ease: "linear", immediateRender: true }
  );

  tl.fromTo(
    wordmark,
    { width: "0rem", overflow: "hidden" },
    { width: "auto", ease: "linear", immediateRender: true },
    "<"
  );
}

const homeInit = () => {
  flagshipProgramsInit();
  animateNavBar();
  console.log("Home page initialized");
};

export { homeInit };
