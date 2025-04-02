// duplicate of "news" code file.
// Merge if no feedback / revisions from the client.

import { gsap } from "gsap";

function yearFilterBlocks() {
  console.log("debug");
  const tags = document.querySelectorAll(
    '.filter-checkbox-field[fs-cmsfilter-field="year"]'
  );

  if (!tags) return;

  const date = new Date();
  const currentYear = parseInt(date.getFullYear());

  tags.forEach((tag) => {
    const label = parseInt(tag.textContent);

    if (label > currentYear) {
      gsap.set(tag, { display: "none" });
    }
  });
  return;
}

const podcastsInit = () => {
  yearFilterBlocks();
};

export { podcastsInit };
