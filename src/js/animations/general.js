import { gsap } from "gsap";
import { navbar } from "../global/navigation";
import { buttonsInit } from "./buttons";

function hideOverlay() {
  const tl = gsap.timeline();
  const overlay = document.querySelector(".overlay_overlay");
  const loader = overlay.querySelector(".overlay_loader-wrapper");

  if (overlay) {
    loader.style.animation = "none";
    tl.to(loader, { opacity: 0, duration: 0.2 });
    tl.to(overlay, { opacity: 0, duration: 0.4 });
    tl.set(overlay, { display: "none" });
  }

  return tl;
}

function heroV1(hero) {
  const bigTextLeft = hero.querySelector(".hero_left-block-wrapper");
  const bigTextRight = hero.querySelector(".hero_right-block-wrapper");
  const smallText = hero.querySelector(".heading-style-h5");
  const imageWrap = hero.querySelector(".page-hero_image-wrapper");
  const image = hero.querySelector("img");

  if (!bigTextLeft || !smallText || !imageWrap || !image) {
    return false;
  }

  const tl = gsap.timeline({ paused: true });

  tl.set([bigTextLeft, bigTextRight, smallText], { opacity: 0, y: "4rem" });
  tl.set(image, { opacity: 0 });
  tl.to([smallText, bigTextLeft, bigTextRight], {
    opacity: 1,
    y: "",
    duration: 0.6,
    delay: 0.2,
    ease: "power2.out",
    stagger: 0.15,
  });
  tl.to(image, { opacity: 1, delay: -0.6, duration: 0.8, ease: "power1.out" });

  return tl;
}

function heroV2(hero) {
  const bigText = hero.querySelector(".hero-v2_text-content");
  const smallText = hero.querySelector(".heading-style-h5");
  const imageWrap = hero.querySelector(".hero-v2_image-wrapper");
  const image = hero.querySelector("img");

  if (!bigText || !smallText || !imageWrap || !image) {
    return false;
  }

  const tl = gsap.timeline({ paused: true });

  tl.set([bigText, smallText], { opacity: 0, y: "4rem" });
  tl.set(image, { y: "-100%" });
  tl.to([bigText, smallText], {
    opacity: 1,
    y: "",
    duration: 0.6,
    delay: 0.2,
    ease: "power2.out",
    stagger: 0.15,
  });
  tl.to(image, { y: "", delay: -0.6, duration: 0.8, ease: "power1.out" });

  return tl;
}

function heroV3(hero) {
  const bigText = hero.querySelector(".page-hero-v3_heading-wrapper");
  const imageWrap = hero.querySelector(".page-hero-v3_image-wrapper");
  const image = hero.querySelector("img");

  if (!bigText || !imageWrap || !image) {
    return false;
  }

  const tl = gsap.timeline({ paused: true });

  tl.set([bigText], { opacity: 0, y: "4rem" });
  tl.set(image, { y: "100%" });
  tl.to([bigText], {
    opacity: 1,
    y: "",
    duration: 0.6,
    delay: 0.2,
    ease: "power2.out",
    stagger: 0.15,
  });
  tl.to(image, { y: "", delay: -0.6, duration: 0.8, ease: "power1.out" });

  return tl;
}

// checks which hero section is on the page, and plays the respective animation. If nothing is
// detected, plays a default animation
function heroAnimationRouter() {
  const mainWrapper = document.querySelector(".main-wrapper");
  const hero = mainWrapper.children[0];
  const tl = gsap.timeline({});
  let animation;
  if (hero.querySelector(".page-hero_wrapper")) animation = heroV1(hero);
  if (hero.querySelector(".page-hero-v2_wrapper")) animation = heroV2(hero);
  if (hero.querySelector(".page-hero-v3_wrapper")) animation = heroV3(hero);

  if (animation) {
    animation.play(); // Ensure the animation is played
    tl.add(animation);
  } else {
    console.warn("no hero animation detected");
  }

  return tl;
}

function pageLoad() {
  const mainWrapper = document.querySelector(".main-wrapper");
  const secondSection = mainWrapper.children[1].children[0];
  const tl = gsap.timeline({ paused: true });
  const nav = navbar.navbarEl;

  tl.set(secondSection, { opacity: 0, y: "7rem" });
  tl.set(nav, { y: "-100%" });
  tl.add(heroAnimationRouter(), ">");
  tl.add(hideOverlay(), "<");
  tl.to(
    [secondSection, nav],
    {
      opacity: 1,
      y: "",
      duration: 0.8,
      ease: "power2.out",
    },
    "<"
  );

  return tl;
}

const generalInit = () => {
  console.log("general animations init");
  pageLoad().play();
  buttonsInit();
};

export { generalInit };
