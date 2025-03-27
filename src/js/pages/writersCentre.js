// checks how many grid cells per row, and removes all cells from row two onwards.
const writersCentreInit = () => {
  const workshopSection = document.querySelector(".section_wc-workshops");
  const grid = workshopSection.querySelector(".grid").querySelector(".grid");

  const computedStyle = window.getComputedStyle(grid);
  const gridTemplateColumns = computedStyle
    .getPropertyValue("grid-template-columns")
    .split(" ").length;

  const cells = Array.from(grid.querySelectorAll(".grid-cell"));

  const firstCell = cells[0];
  const firstCellSpan =
    parseInt(
      getComputedStyle(firstCell).gridColumnStart.replace("span ", ""),
      10
    ) || 2;

  const cellsPerRow = Math.floor(gridTemplateColumns / firstCellSpan);

  cells.slice(cellsPerRow).forEach((cell) => cell.remove());
};

export { writersCentreInit };
