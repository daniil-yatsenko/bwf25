import { gsap } from "gsap";

function capitalizeFirstLetterOfEveryWord(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const pathNameInit = () => {
  let component = document.querySelector("[pathname-component]");
  if (!component) return;

  let pathName = window.location.pathname;
  let pathNameArray = pathName.split("/").filter(Boolean);
  let baseUrl = window.location.origin;
  let linksBlock = component.querySelector(".pathname_wrapper");

  gsap.set(linksBlock, { opacity: 0, y: "-1rem" });

  pathNameArray.forEach((path, index) => {
    let link = `${baseUrl}/${pathNameArray.slice(0, index + 1).join("/")}`; // link to each sub-page
    let linkName = capitalizeFirstLetterOfEveryWord(path.replace(/-/g, " ")); // replace "-" with " "
    const tl = gsap.timeline();

    let slashEl = '<div class="text-size-small margin-right">/</div>';
    let linkEl = `<a href="${link}" class="no-underline w-inline-block"><div class="text-size-small margin-right">${linkName}</div></a>`;

    linksBlock.insertAdjacentHTML("beforeend", slashEl + linkEl);
  });

  gsap.to(linksBlock, {
    opacity: 1,
    y: "",
    duration: 0.3,
    ease: "power2.inOut",
    delay: 0.4,
  });
};

export { pathNameInit };
