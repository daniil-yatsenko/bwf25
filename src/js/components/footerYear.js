const updateFooterYear = () => {
  const year = document.querySelector(".footer_year");
  if (year) {
    const date = new Date();
    const currentYear = parseInt(date.getFullYear());

    year.innerHTML = currentYear;
  }
};

export { updateFooterYear };
