const sessionLink = () => {
  let links = document.querySelectorAll(".about-author_session-wrapper");

  links.forEach((link) => {
    const slug = link.getAttribute("data-session-slug");
    const baseHref = link.getAttribute("href");
    link.setAttribute("href", baseHref + slug);
  });
};

const writerInit = () => {
  sessionLink();
};

export { writerInit };
