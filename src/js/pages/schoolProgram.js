import { gsap } from "gsap";

// remove repetitive authors
function adjustAuthors() {
  const allAuthors = document.querySelectorAll("[data-author-instance]");
  if (!allAuthors) return;
  let uniqueAuthors = new Set();

  allAuthors.forEach((author) => {
    const slug = author.getAttribute("data-author-instance");
    if (uniqueAuthors.has(slug)) {
      author.remove();
    } else {
      uniqueAuthors.add(slug);
    }
  });
}

const schoolProgramInit = () => {
  adjustAuthors();
};

export { schoolProgramInit };
