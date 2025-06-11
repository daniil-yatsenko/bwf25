import { lenisMain } from "../global/globalInit";

function scrollToSession() {
  const sessionValue = new URLSearchParams(window.location.search).get(
    "session"
  );

  if (sessionValue) {
    setTimeout(() => {
      lenisMain.scrollTo(`#${sessionValue}`, { offset: 20 });
    }, 300);
  }
}

const festivalWorkshopsInit = () => {
  scrollToSession();
};

export { festivalWorkshopsInit };
