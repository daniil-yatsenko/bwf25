function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const pathNameInit = () => {
  let component = document.querySelector("[pathname-component]");
  if (!component) return;

  let pathName = window.location.pathname;
  let pathNameArray = pathName.split("/").filter(Boolean);
  let baseUrl = window.location.origin;
  let linksBlock = component.querySelector(".pathname_wrapper");

  pathNameArray.forEach((path, index) => {
    let link = `${baseUrl}/${pathNameArray.slice(0, index + 1).join("/")}`; // link to each sub-page
    let linkName = capitalizeFirstLetter(path.replace(/-/g, " ")); // replace "-" with " "

    let slashEl = '<div class="text-size-small margin-right">/</div>';
    let linkEl = `<a href="${link}" class="no-underline w-inline-block"><div class="text-size-small margin-right">${linkName}</div></a>`;

    linksBlock.insertAdjacentHTML("beforeend", slashEl + linkEl);
  });
};

export { pathNameInit };
