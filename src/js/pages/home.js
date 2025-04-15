import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// home hero animation is located in ../animations/general.js

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
  animateNavBar();
};

export { homeInit };
