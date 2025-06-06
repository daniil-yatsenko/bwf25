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
  const bigTextLeft = hero.querySelector(".page-hero_left-block-wrapper");
  const bigTextRight = hero.querySelector(".page-hero_right-block-wrapper");
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

function typewriter(heading) {
  const speed = 0.05;
  const originalText = heading.textContent;
  const typewriterTl = gsap.timeline();
  heading.textContent = " ";

  if (window.innerWidth > 992) {
    gsap.set(heading.parentElement, { maxWidth: "70vw" });
  }

  // typewriter cursor animation
  // disabled as per feedback

  // gsap.fromTo(
  //   heading.nextSibling,
  //   {
  //     borderRightColor: "black",
  //     repeat: -1,
  //     duration: 1,
  //     ease: "power2.inOut",
  //   },
  //   {
  //     borderRightColor: "#BC915E",
  //     repeat: -1,
  //     duration: 1,
  //     ease: "power2.inOut",
  //   }
  // );

  // typewriter
  for (let i = 0; i < originalText.length; i++) {
    typewriterTl.to(heading, {
      textContent: originalText.slice(0, i + 1),
      duration: speed,
      ease: "none",
    });
  }
}

function heroHome(hero) {
  const bigTextLeft = hero.querySelector(".hero_left-block-wrapper");
  const bigTextRight = hero.querySelector(".hero_right-block-wrapper");
  const image = hero.querySelector("img");
  const btnWrap = hero.querySelector(".hero_right-block_button-wrapper");
  const showreel = hero.querySelector(".hero_showreel-banner");
  const heading = hero.querySelector(".hero_h1-wrapper").children[0];

  if (!bigTextLeft || !image || !btnWrap || !showreel) {
    return false;
  }

  const tl = gsap.timeline();

  typewriter(heading);

  tl.set([bigTextLeft, bigTextRight, btnWrap, showreel], {
    opacity: 0,
    y: "4rem",
  });
  tl.set(image, { opacity: 0 });

  // typewriter cursor – separate from tl to avoid a bug
  // disabled as per feedback

  // gsap.set(heading.nextSibling, {
  //   borderRightStyle: "solid",
  //   borderRightWidth: "1px",
  //   borderRightColor: "black",
  // });

  tl.to([bigTextLeft, bigTextRight, btnWrap, showreel], {
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

// checks which hero section is on the page, and plays the respective animation. If nothing is
// detected, plays a default animation
function heroAnimationRouter() {
  const mainWrapper = document.querySelector(".main-wrapper");
  const hero = mainWrapper.children[0];
  const tl = gsap.timeline({});
  let animation;
  if (hero.querySelector(".hero_wrapper")) animation = heroHome(hero);
  if (hero.querySelector(".page-hero_wrapper")) animation = heroV1(hero);
  if (hero.querySelector(".page-hero-v2_wrapper")) animation = heroV2(hero);
  if (hero.querySelector(".page-hero-v3_wrapper")) animation = heroV3(hero);

  if (animation) {
    animation.play(); // Ensure the animation is played
    tl.add(animation);
  } else {
  }

  return tl;
}

async function pageLoad() {
  const mainWrapper = document.querySelector(".main-wrapper");
  const secondSection = mainWrapper.children[1].children[0];
  const tl = gsap.timeline({ paused: true });
  const nav = navbar.navbarEl;
  const ack = document.querySelector(".overlay_acknowledgement-wrapper");
  const ackBtn = ack.querySelector(".button");

  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      let [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  }

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  async function ackOnFirstVisit() {
    return new Promise((resolve) => {
      if (!getCookie("acknowledgementShown")) {
        gsap.set(ack, { display: "block", opacity: 0 });
        gsap.to(ack, { opacity: 1, duration: 0.3, ease: "power.inOut" });

        ackBtn.addEventListener("click", () => {
          ack.style.display = "none";
          gsap.to(ack, {
            opacity: 0,
            duration: 0.3,
            ease: "power.inOut",
            onComplete: () => {
              setCookie("acknowledgementShown", "true", 7);
              resolve();
            },
          });
        });
      } else resolve();
    });
  }

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

  await ackOnFirstVisit();
  tl.play();
}

const generalInit = () => {
  pageLoad();
  buttonsInit();
};

export { generalInit };
