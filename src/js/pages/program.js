// add scroll trigger start determination function

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lenisMain } from "../global/globalInit.js";

const sessionsList = document.querySelector(".session-list_list");
let dayBtns = document.querySelectorAll(".session-times_day-filter_day");
let allSessions = document.querySelectorAll(".session-list_item");
let firstSessions = {}; // {day: session object}

// calculate the scroll offset based on the breakpoint
function getScrollOffset() {
  return window.innerWidth > 991 ? -100 : -220;
}

// update the session date text on the page
function updateDayDate(session) {
  const caption = document.querySelector(".session-times_day-caption");

  caption.querySelector("[session-date-dow]").textContent =
    session.getAttribute("session-date-dow");
  caption.querySelector("[session-date-day]").textContent =
    session.getAttribute("session-date-day");
  caption.querySelector("[session-date-month]").textContent =
    session.getAttribute("session-date-month");
}

// update the first session of each day and map them to buttons
function updateFirstSessions() {
  allSessions = document.querySelectorAll(".session-list_item");

  // reset firstSessions
  dayBtns.forEach((button, index) => {
    let session = document.querySelector(
      `.session-list_item[session-day="${index + 1}"]`
    );
    firstSessions[index + 1] = session;
  });
  console.log(firstSessions);

  // update day buttons
  dayBtns.forEach((button, index) => {
    if (firstSessions[index + 1]) {
      button.replaceWith(button.cloneNode(true)); // remove event listeners
      button = document.querySelectorAll(".session-times_day-filter_day")[
        index
      ];
      button.addEventListener("click", () => {
        lenisMain.scrollTo(firstSessions[index + 1], {
          offset: getScrollOffset(),
        });
      });
      gsap.set(button, { cursor: "" });
    } else {
      gsap.set(button, { cursor: "not-allowed" });
    }
    dayBtns = document.querySelectorAll(".session-times_day-filter_day");
  });
}

// update the active state of the day buttons
function updateBtnsActiveState(day) {
  dayBtns.forEach((button) => {
    button.classList.remove("is-active");
  });
  dayBtns[parseInt(day) - 1].classList.add("is-active");
}

// create scroll triggers for each day's first session
function createScrollTriggers() {
  let prevFirstSession = null;
  let prevFirstSessionKey = null;
  Object.entries(firstSessions).forEach(([key, session]) => {
    if (session) {
      let capturedPrevSession = prevFirstSession; // capture the previous session as scrollTrigger is delayed
      let capturedPrevSessionKey = prevFirstSessionKey; // same but for key

      ScrollTrigger.create({
        trigger: session,
        start: "bottom 60%",
        onEnter: () => {
          updateDayDate(session);
          updateBtnsActiveState(key);
        },
        onLeaveBack: () => {
          if (capturedPrevSession) {
            updateDayDate(capturedPrevSession);
            updateBtnsActiveState(capturedPrevSessionKey);
          }
        },
        markers: true,
      });
      prevFirstSession = session;
      prevFirstSessionKey = key;
    }
  });
}

// trigger session updates after Finsweet filters are applied
function triggerUIUpdate() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.killAll();

  dayBtns = document.querySelectorAll(".session-times_day-filter_day");
  updateDayDate(allSessions[0]);
  updateFirstSessions();
  createScrollTriggers();
}

// mutation observer for Finsweet filters updates
let triggered = false;
const observer = new MutationObserver((mutationsList) => {
  if (mutationsList.some((mutation) => mutation.type === "childList")) {
    if (!triggered) {
      triggered = true;
      setTimeout(() => {
        triggered = false;
        triggerUIUpdate();
        console.log("session list updated");
      }, 10);
    }
  }
});

const programInit = () => {
  triggerUIUpdate();
  observer.observe(sessionsList, { childList: true });
};

export { programInit };
