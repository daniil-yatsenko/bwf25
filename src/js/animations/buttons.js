import { gsap } from "gsap";

const buttonsInit = () => {
  if (window.innerWidth < 992) return;
  let buttons = document.querySelectorAll(".button, .button-small");

  buttons.forEach((button) => {
    // manipulate button captions
    const contentWrapper = document.createElement("div"),
      children = contentWrapper.children,
      content = button.innerHTML;
    contentWrapper.innerHTML = `<div>${content}</div><div>${content}</div>`;
    gsap.set(contentWrapper.childNodes, {
      display: "flex",
      gap: "0.5rem",
      alignItems: "flex start",
      flexDirection: "column",
    });
    while (button.firstChild) {
      button.removeChild(button.firstChild);
    }
    button.appendChild(contentWrapper);
    gsap.set(contentWrapper, {
      overflow: "hidden",
      position: "relative",
    });
    gsap.set(children[1], {
      position: "absolute",
      top: "100%",
      left: "0%",
    });

    // add event listeners
    button.addEventListener("mouseenter", () => {
      gsap.to(children, {
        y: "-100%",
        duration: 0.8,
        ease: "power3.inOut",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(children, { y: "0%", duration: 0.8, ease: "power3.inOut" });
    });
  });
};

export { buttonsInit };
