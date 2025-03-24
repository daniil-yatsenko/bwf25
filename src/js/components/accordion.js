import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function close(items, item) {
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector(".accordion-title-icon");
  const tl = gsap.timeline();
  const height = item.offsetHeight - content.offsetHeight;

  tl.set(items, { pointerEvents: "none" });
  tl.to(content, { opacity: 0, duration: 0.2 });
  tl.to(icon, { rotate: 0, duration: 0.2 }, "<");
  tl.to(item, { height: height, duration: 0.4, ease: "power3.inOut" });
  tl.set(content, { display: "none", opacity: "" });
  tl.set(item, { height: "auto" });
  tl.set(items, {
    pointerEvents: "",
    onComplete: () => {
      item.classList.remove("is-opened");
      ScrollTrigger.refresh();
    },
  });
}

function open(items, item) {
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector(".accordion-title-icon");
  const tl = gsap.timeline();
  const height = item.offsetHeight;

  tl.set(items, { pointerEvents: "none" });
  tl.set(item, { height: height });
  tl.set(content, {
    display: "block",
    opacity: 0,
    height: "",
  });
  tl.to(item, { height: "auto", duration: 0.4, ease: "power3.inOut" });
  tl.to(icon, { rotate: 45, duration: 0.2 }, "<");
  tl.to(content, { opacity: 1, duration: 0.2 });
  tl.set(items, {
    pointerEvents: "",
    onComplete: () => {
      item.classList.add("is-opened");
      ScrollTrigger.refresh();
    },
  });
}

function isOpened(item) {
  return item.classList.contains("is-opened");
}

function handleClick(items, item) {
  if (isOpened(item)) {
    close(items, item);
  } else {
    items.forEach((item) => {
      if (isOpened(item)) {
        close(items, item);
      }
    });
    open(items, item);
  }
}

const accordionInit = () => {
  const accordionLists = document.querySelectorAll(".accordion-list");

  accordionLists.forEach((list) => {
    const items = list.querySelectorAll(".accordion-item");

    items.forEach((item) => {
      item.addEventListener("click", () => {
        handleClick(items, item);
      });
    });
  });
};

export { accordionInit };
