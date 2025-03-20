// needs heavy refactoring

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lenisMain } from "../global/globalInit.js";

const sessionsList = document.querySelector(".session-list_list");
let sessions = document.querySelectorAll(".session-list_item");
const dayBtns = document.querySelectorAll(".session-times_day-filter_day");
let firstSessions = {};

function updateDayDate(session) {
  const caption = document.querySelector(".session-times_day-caption");

  caption.querySelector("[session-date-dow]").textContent =
    session.getAttribute("session-date-dow");
  caption.querySelector("[session-date-day]").textContent =
    session.getAttribute("session-date-day");
  caption.querySelector("[session-date-month]").textContent =
    session.getAttribute("session-date-month");
}

function parseSessions() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.killAll();

  dayBtns.forEach((button, index) => {
    const firstSession = document.querySelector(
      `.session-list_item[session-day="${index + 1}"]`
    );
    firstSessions[`${index + 1}`] = firstSession;
  });

  Object.entries(firstSessions).forEach(([key, session]) => {
    ScrollTrigger.create({
      trigger: session,
      start: "top 50%",
      onEnter: () => {
        console.log("entered");
        dayBtns.forEach((btn) => btn.classList.remove("is-active"));
        dayBtns[key - 1].classList.add("is-active");
        console.log(session);
        updateDayDate(session);
      },
      onLeaveBack: () => {
        console.log("entered");
        if (key > 1) {
          dayBtns.forEach((btn) => btn.classList.remove("is-active"));
          dayBtns[key - 2].classList.add("is-active");
          updateDayDate(firstSessions[`${key - 1}`]);
        }
      },
      markers: true,
    });
  });
}

let triggered = false;
const observer = new MutationObserver((mutationsList) => {
  if (mutationsList.some((mutation) => mutation.type === "childList")) {
    if (!triggered) {
      triggered = true;

      parseSessions();

      setTimeout(() => {
        triggered = false;
        ScrollTrigger.refresh();
      }, 10);
    }
  }
});

const programInit = () => {
  parseSessions();
  observer.observe(sessionsList, { childList: true });

  dayBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      let firstSession = firstSessions[`${index + 1}`];

      if (firstSession) {
        lenisMain.scrollTo(firstSession, { offset: -90 });
        dayBtns.forEach((btn) => btn.classList.remove("is-active"));
        button.classList.add("is-active");
      }
    });
  });
};

export { programInit };
