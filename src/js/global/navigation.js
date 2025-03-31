import { gsap } from "gsap";
import { lenisMain } from "./globalInit";
import { lenisInit } from "./lenis";

const navbar = {
  navbarEl: document.querySelector(".navbar_navbar"),
  navLinks: document.querySelectorAll(".navbar_link"),
  menuBtn: document.querySelector(".navbar_menu-button"),
  menuWrapper: document.querySelector(".navbar_menu-wrapper"),
  menuLinksWrapper: document.querySelector(".navbar_menu-links-wrapper"),
  overlay: document.querySelector(".overlay_wrapper"),
  menuDropdowns: document.querySelectorAll(
    ".navbar_menu-item-wrapper.w-dropdown"
  ),
  isMenuOpen: false,
  isNavbarHidden: false,
  isSetToMobile: false,
  eventListenersMap: new WeakMap(),

  openMenu(immediate = false) {
    const tl = gsap.timeline();

    lenisMain.stop();

    tl.set(this.menuWrapper, { display: "block" });
    tl.set(this.navbarEl, {
      backgroundColor: "var(--background-color--background-primary)",
      color: "var(--text-color--text-primary)",
    });
    this.isMenuOpen = true;
    return tl;
  },
  closeMenu(immediate = false) {
    const tl = gsap.timeline();

    lenisMain.start();

    tl.set(this.menuWrapper, { display: "none" });
    tl.set(this.navbarEl, {
      backgroundColor: "",
      color: "",
    });
    this.isMenuOpen = false;
    return tl;
  },
  handleMenuClick() {
    this.menuBtn.addEventListener("click", () => {
      if (this.isMenuOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    });
  },
  hide(immediate = false) {
    const tl = gsap.timeline();
    return tl;
  },
  show() {
    const tl = gsap.timeline();
    return tl;
  },
  mobileInit() {
    const backBtn = document.querySelector(".navbar_second-level-button");
    const subMenu = document.querySelector(
      ".navbar_menu-wrapper.is-second-level"
    );
    const lenisMenu = lenisInit(this.menuWrapper);
    const lenisSubMenu = lenisInit(subMenu);

    function clearSubMenu() {
      subMenu
        .querySelector(".navbar_second-level-links-wrapper")
        .replaceChildren();
    }

    function appendSubMenu(children) {
      const clonedChildren = Array.from(children).map((child) =>
        child.cloneNode(true)
      );

      subMenu
        .querySelector(".navbar_second-level-links-wrapper")
        .append(...clonedChildren);

      lenisSubMenu.resize();
    }

    // handle dropdowns
    this.menuDropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".navbar_dropdown-toggle");
      const link = dropdown.querySelector(".navbar_link");
      const dropdownLinks = dropdown.querySelector(
        ".navbar_dropdown-list"
      ).children;

      gsap.set([link, toggle], { pointerEvents: "none" });
      gsap.set(dropdown, { pointerEvents: "all", cursor: "pointer" });

      const tl = gsap.timeline({ paused: true });

      tl.to([this.menuLinksWrapper, subMenu], {
        x: "-100vw",
        duration: 0.4,
        ease: "expo.inOut",
      });

      const dropdownClickHandler = () => {
        clearSubMenu();
        appendSubMenu(dropdownLinks);
        tl.restart();
        lenisMenu.stop();
      };

      this.eventListenersMap.set(dropdown, dropdownClickHandler);
      dropdown.addEventListener("click", dropdownClickHandler);
    });

    // handle second level back button
    const backBtnTl = gsap.timeline({ paused: true });
    backBtnTl.to([this.menuLinksWrapper, subMenu], {
      x: "0vw",
      duration: 0.4,
      ease: "expo.inOut",
    });

    const backBtnClickHandler = function () {
      clearSubMenu();
      backBtnTl.restart();
      lenisMenu.start();
    };

    this.eventListenersMap.set(backBtn, backBtnClickHandler);
    backBtn.addEventListener("click", backBtnClickHandler);
  },
  resizeListener() {
    const resizeHandler = () => {
      const tl = gsap.timeline();

      if (window.innerWidth > 991 && this.isSetToMobile) {
        this.closeMenu(true);
        this.isSetToMobile = false;
        tl.call(() => {
          this.menuDropdowns.forEach((dropdown) => {
            const toggle = dropdown.querySelector(".navbar_dropdown-toggle");
            const link = dropdown.querySelector(".navbar_link");

            gsap.set([link, toggle], { pointerEvents: "" });
            gsap.set(dropdown, { pointerEvents: "", cursor: "" });
            gsap.set(this.menuLinksWrapper, { display: "" });

            const handler = this.eventListenersMap.get(dropdown);
            if (handler) {
              dropdown.removeEventListener("click", handler);
              this.eventListenersMap.delete(dropdown);
            }
          });
        });
        tl.set(this.menuWrapper, { display: "", delay: 0.1 });
        tl.set(this.navbarEl, {
          backgroundColor: "",
          color: "",
        });
        console.log("debug");
      }

      if (window.innerWidth < 992 && !this.isSetToMobile) {
        this.isSetToMobile = true;
        this.mobileInit();
      }
      return tl;
    };

    window.addEventListener("resize", resizeHandler);
  },
  init() {
    if (window.innerWidth < 992) {
      this.isSetToMobile = true;
      this.mobileInit();
    }
    this.resizeListener();
    this.handleMenuClick();
  },
};

export { navbar };
