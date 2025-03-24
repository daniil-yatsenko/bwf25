import { gsap } from "gsap";

function getAlphabetRange(start, end) {
  // input "a", "c" >> output ["a", "b", "c"]
  let result = [];

  let startCode = start.charCodeAt(0);
  let endCode = end.charCodeAt(0);

  for (let i = startCode; i <= endCode; i++) {
    result.push(String.fromCharCode(i));
  }

  return result;
}

const surenameFilterInit = () => {
  let filterBlock = document.querySelector("[surename-filter]");
  if (!filterBlock) {
    return;
  }

  let unfilterTag = document.querySelector(
    '[fs-cmsfilter-clear="letter"][fs-cmsfilter-element="clear"]'
  );
  let tags = [...filterBlock.querySelectorAll(".tag")].filter(
    (tag) => tag !== unfilterTag
  );
  let tagFilterGroups = new Map();
  let allFilters = document.querySelectorAll(
    `.filter-checkbox-field[fs-cmsfilter-field="letter"]`
  );

  // map each tag to the filters based on the first letter
  tags.forEach((tag) => {
    let str = tag.textContent;
    if (str !== "All") {
      let firstLetter = str.charAt(0);
      let lastLetter = str.charAt(str.length - 1);
      let letters = getAlphabetRange(firstLetter, lastLetter);

      let tagFilterGroup = [];
      letters.forEach((letter) => {
        allFilters.forEach((filter) => {
          if (filter.querySelector("span").textContent == letter) {
            tagFilterGroup.push(filter);
          }
        });
      });
      tagFilterGroups.set(tag, tagFilterGroup);
    }
  });

  // add click event to regular filter tags
  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      let tagFilterGroup = tagFilterGroups.get(tag);
      tagFilterGroup.forEach((filter) => {
        filter.click();
      });

      tag.classList.toggle("is-active");
    });
  });

  unfilterTag.addEventListener("click", () => {
    tags.forEach((tag) => {
      tag.classList.remove("is-active");
    });
  });
};

export { surenameFilterInit };
