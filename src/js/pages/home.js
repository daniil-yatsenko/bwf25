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

function animateShowreel() {
  const thumb = document.querySelector(".hero_showreel-thumb-wrapper");
  const playIcon = thumb.querySelector(".hero_showreel-play-btn");

  if (!thumb || !playIcon) return;

  thumb.addEventListener("mouseover", () => {
    gsap.to(playIcon, {
      scale: 1.2,
      ease: "power3.inOut",
      duration: 0.5,
    });
  });

  thumb.addEventListener("mouseleave", () => {
    gsap.to(playIcon, { scale: 1, ease: "power3.inOut", duration: 0.75 });
  });
}

function heroParallax() {
  const hero = document.querySelector(".section_hero");
  const image = hero.querySelector(".hero_image-wrapper");

  if (!image) return;

  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  ScrollTrigger.create({
    trigger: hero,
    start: "top top",
    end: "bottom top",
    ease: "linear",
    scrub: 0.5,
    animation: tl,
  });

  tl.fromTo(
    image,
    { scale: 1.08, ease: "linear" },
    { scale: 1, ease: "linear" }
  );
}

const homeInit = () => {
  animateNavBar();
  animateShowreel();
  heroParallax();
};

export { homeInit };
