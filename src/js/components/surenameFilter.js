// not finished / not working. For now only creates the checkboxes.

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

function insertCheckbox(letter) {
  let checkboxHTML = `
<label fs-cmsfilter-field="${letter}" class="w-checkbox filter-checkbox-field hide"><input type="checkbox" name="checkbox" data-name="Checkbox" class="w-checkbox-input hide"><span class="text-size-small w-form-label" for="checkbox"></span></label>
`;
  return checkboxHTML;
}

const surenameFilterInit = () => {
  let filterBlock = document.querySelector("[surename-filter]");
  if (!filterBlock) {
    return;
  }

  let tags = filterBlock.querySelectorAll(".tag");

  tags.forEach((tag) => {
    let str = tag.textContent;
    if (str !== "All") {
      let firstLetter = str.charAt(0);
      let lastLetter = str.charAt(str.length - 1);

      let alphabetRange = getAlphabetRange(firstLetter, lastLetter);
      alphabetRange.forEach((letter) => {
        tag.insertAdjacentHTML("beforeend", insertCheckbox(letter));
      });
    }
  });

  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      tag.classList.toggle("active");
      let checkboxes = tag.querySelectorAll("[fs-cmsfilter-field]");
      checkboxes.forEach((checkbox) => {
        checkbox.click();
      });
    });
  });
};

export { surenameFilterInit };
