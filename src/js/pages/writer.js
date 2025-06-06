const sessionLink = () => {
  let links = document.querySelectorAll(".about-author_session-wrapper");

  links.forEach((link) => {
    const slug = link.getAttribute("data-session-slug");
    const baseHref = link.getAttribute("href");
    link.setAttribute("href", baseHref + slug);
  });
};

const writerInit = () => {
  // disabling as it doesn't work properly with loading 100+ CMS items on the festival program page.
  // return;
  sessionLink();
};

export { writerInit };
