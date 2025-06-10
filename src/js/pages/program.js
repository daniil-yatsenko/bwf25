// add scroll trigger start determination function

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lenisMain } from "../global/globalInit.js";
import { scrollOffsets } from "../components/filters.js";

const sessionsList = document.querySelector(".session-list_list");
let dayBtns = document.querySelectorAll(".session-times_day-filter_day");
let allSessions = document.querySelectorAll(".session-list_item");
let firstSessions = {}; // {day: session object}
let scrollTrigger;

function cleanUpCommas() {
  document
    .querySelectorAll(".session-list_item-details-wrapper")
    .forEach((wrapper) => {
      let commas = wrapper.querySelectorAll(".is-comma");
      if (commas.length > 0) {
        commas[commas.length - 1].style.display = "none";
      }
    });
}

// calculate the day buttons clickscroll offset based on the breakpoint
function dayBtnsScrollOffset() {
  return window.innerWidth > 991 ? -100 : -210;
}

// update the session date text on the page
function updateDayDate(session) {
  const caption = document.querySelector(".session-times_day-caption");

  if (session) {
    caption.querySelector("[session-date-dow]").textContent =
      session.getAttribute("session-date-dow");
    caption.querySelector("[session-date-day]").textContent =
      session.getAttribute("session-date-day");
    caption.querySelector("[session-date-month]").textContent =
      session.getAttribute("session-date-month");
  }
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

  // update day buttons
  dayBtns.forEach((button, index) => {
    if (firstSessions[index + 1]) {
      button.replaceWith(button.cloneNode(true)); // remove event listeners
      button = document.querySelectorAll(".session-times_day-filter_day")[
        index
      ];
      button.addEventListener("click", () => {
        lenisMain.scrollTo(firstSessions[index + 1], {
          offset: dayBtnsScrollOffset(),
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

      scrollTrigger = ScrollTrigger.create({
        trigger: session,
        start: "top 35%",
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
      });
      prevFirstSession = session;
      prevFirstSessionKey = key;
    }
  });
}

// trigger session updates after Finsweet filters are applied
function triggerUIUpdate() {
  gsap.registerPlugin(ScrollTrigger);
  if (scrollTrigger) scrollTrigger.kill();

  dayBtns = document.querySelectorAll(".session-times_day-filter_day");

  updateFirstSessions();
  createScrollTriggers();
  setTimeout(() => {
    updateDayDate(allSessions[0]);
    lenisMain.resize();
  }, 50); // delay for filter to fetch updated data
}

function scrollToSession() {
  return;
  const sessionValue = new URLSearchParams(window.location.search).get(
    "session"
  );

  if (sessionValue) {
    setTimeout(() => {
      lenisMain.scrollTo(`#${sessionValue}`, { offset: -200 });
    }, 300);
  }
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
      }, 10);
    }
  }
});

const programInit = () => {
  if (!sessionsList) {
    return;
  }

  cleanUpCommas();
  triggerUIUpdate();
  observer.observe(sessionsList, { childList: true });
  scrollToSession();
};

export { programInit };
