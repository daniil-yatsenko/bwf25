import { gsap } from "gsap";
import { lenisMain } from "./globalInit";
import { lenisInit } from "./lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.defaults({ ease: "power2.inOut", duration: 0.3 });

const navbar = {
  navbarEl: document.querySelector(".navbar_navbar"),
  navLinks: document.querySelectorAll(".navbar_link"),
  menuBtn: document.querySelector(".navbar_menu-button"),
  burgerIcon: document.querySelector(".navbar_menu-burger-icon"),
  crossIcon: document.querySelector(".navbar_menu-cross-icon"),
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

  openMenu() {
    const tl = gsap.timeline();

    lenisMain.stop();

    tl.set(document.body, { overflow: "hidden" });
    tl.to(this.navbarEl, { opacity: 0, duration: 0.1 });
    tl.set(this.burgerIcon, { display: "none" });
    tl.set(this.crossIcon, { display: "flex" });
    tl.set(this.menuWrapper, { display: "flex" });
    tl.set(this.navbarEl, {
      backgroundColor: "var(--background-color--background-primary)",
      color: "var(--text-color--text-primary)",
    });
    tl.set(this.menuLinksWrapper.children, { opacity: 0, y: "1rem" });
    tl.to(this.navbarEl, { opacity: 1 });
    tl.to(this.menuLinksWrapper.children, { opacity: 1, y: "", stagger: 0.08 });

    this.isMenuOpen = true;
    return tl;
  },
  closeMenu() {
    const tl = gsap.timeline();

    lenisMain.start();

    tl.to(this.navbarEl, { opacity: 0 });
    tl.set(this.menuWrapper, { display: "none" });
    tl.set(this.burgerIcon, { display: "flex" });
    tl.set(this.crossIcon, { display: "none" });
    tl.set(this.navbarEl, {
      backgroundColor: "",
      color: "",
    });
    tl.to(this.navbarEl, { opacity: 1, duration: 0.2 });
    tl.to(document.body, { overflow: "" });

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
    const cta = document.querySelector(".navbar_mobile-cta-wrapper");
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

      tl.to([this.menuLinksWrapper, subMenu, cta], {
        x: "-100vw",
        duration: 0.4,
        ease: "power2.inOut",
      });

      const dropdownClickHandler = () => {
        clearSubMenu();
        appendSubMenu(dropdownLinks);
        lenisMenu.stop();
        lenisMenu.scrollTo(0, { force: true });
        tl.restart();
      };

      this.eventListenersMap.set(dropdown, dropdownClickHandler);
      dropdown.addEventListener("click", dropdownClickHandler);
    });

    // handle second level back button
    const backBtnTl = gsap.timeline({ paused: true });
    backBtnTl.to([this.menuLinksWrapper, subMenu, cta], {
      x: "0vw",
      duration: 0.4,
      ease: "power2.inOut",
    });

    const backBtnClickHandler = function () {
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
        this.closeMenu();
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
        tl.set(this.menuWrapper, { display: "", delay: 0.5 });
        tl.set(this.navbarEl, {
          backgroundColor: "",
          color: "",
        });
      }

      if (window.innerWidth < 992 && !this.isSetToMobile) {
        this.isSetToMobile = true;
        this.mobileInit();
      }
      return tl;
    };

    window.addEventListener("resize", resizeHandler);
  },
  hideOnScroll() {
    return;
    // disabed
    const setting = document
      .querySelector(".navbar_wrapper")
      .getAttribute("data-nav-hide-on-scroll");

    if (setting == "true") {
      let lastScrollTop = 0;

      window.addEventListener("scroll", () => {
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
          // Scrolling down - hide navbar
          gsap.to(this.navbarEl, {
            y: "-100%",
            duration: 0.4,
            ease: "power2.InOut",
          });
        } else {
          // Scrolling up - show navbar
          gsap.to(this.navbarEl, {
            y: "0",
            duration: 0.4,
            ease: "power2.InOut",
          });
        }

        lastScrollTop = scrollTop;
      });
    }
  },
  handleTransparency() {
    gsap.registerPlugin(ScrollTrigger);

    const transpNav = document.querySelector(
      '[data-wf--navbar--variant="light---transparent"]'
    );
    const heroV1 = document.querySelector(".page-hero_wrapper");

    if (transpNav && heroV1) {
      const st = ScrollTrigger.create({
        trigger: heroV1,
        start: "bottom top+=80",
        onEnter: () => {
          gsap.to(this.navbarEl, {
            backgroundColor: "var(--background-color--background-primary)",
            color: "var(--text-color--text-primary)",
          });
        },
        onLeaveBack: () => {
          gsap.to(this.navbarEl, {
            backgroundColor: "",
            color: "",
          });
        },
      });
    }
  },
  init() {
    if (window.innerWidth < 992) {
      this.isSetToMobile = true;
      this.mobileInit();
    } else {
      this.hideOnScroll(); // disabled
    }
    this.resizeListener();
    this.handleMenuClick();
    this.handleTransparency();
  },
};

export { navbar };
