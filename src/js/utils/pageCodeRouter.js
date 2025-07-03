// Initializes page-specific animations based on the data-page-name attribute.
// Ensure the main page wrapper has a unique class with data-page-name attribute
// to avoid animation code leakage across different pages.

import { homeInit } from "../pages/home.js";
import { programInit } from "../pages/program.js";
import { schoolProgramInit } from "../pages/schoolProgram.js";
import { writersCentreInit } from "../pages/writersCentre.js";
import { newsInit } from "../pages/news.js";
import { podcastsInit } from "../pages/podcasts.js";
import { writerInit } from "../pages/writer.js";
import { festivalWritersInit } from "../pages/festivalWriters.js";
import { festivalWorkshopsInit } from "../pages/festivalWorkshops.js";

export function initPageRouter() {
  const pageWrapper = document.querySelector("[data-page-name]");

  if (!pageWrapper) {
    return;
  }

  const pageName = pageWrapper.getAttribute("data-page-name");

  // Mapping of page names to their respective starter functions
  const pageStarters = {
    home: homeInit,
    program: programInit,
    kbdo: programInit,
    schoolProgram: schoolProgramInit,
    writersCentre: writersCentreInit,
    news: newsInit,
    podcasts: podcastsInit,
    writer: writerInit,
    festivalWriters: festivalWritersInit,
    festivalWorkshops: festivalWorkshopsInit,
    featureEvents: festivalWorkshopsInit, // duplicated due to same functionality
    satelliteEvents: festivalWorkshopsInit, // duplicated due to same functionality

    // Add additional page starters here
  };

  const starterFunction = pageStarters[pageName];
  if (starterFunction) {
    starterFunction();
  } else {
  }
}
