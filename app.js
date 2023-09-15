import {
  positions,
  homeNavigation,
  projectNavigation,
  aboutNavigation,
} from "./scrollPosition.js";
import { projectList, retrieveKeyButton, loadContentList } from "./project.js";
import "./about.js";
import "./theme.js";


  homeNavigation();
  projectNavigation();
  aboutNavigation();
  if (projectList.length !== 0) {
    retrieveKeyButton();
    loadContentList();
  } else {
    document.querySelector(".project__text--md").style.display = "none";
    document.querySelector(".project__category").style.display = "none";
    document.querySelector(".project__list").style.display = "none";

    const project = document.querySelector(".project");
    const div = document.createElement("div");
    const linkRepo = document.createElement("a");
    div.textContent =
      "I haven't yet added projects to show here, but you can check my GitHub. I'll add content here soon. ";
    div.style.height = "500px";
    div.style.textAlign = "center";
    div.style.marginTop = "8px";
    linkRepo.textContent = "GITHUB REPO";
    linkRepo.setAttribute("href", "https://github.com/HairyBlue");
    linkRepo.setAttribute("target", "_blank");
    linkRepo.style.textDecoration = "underline";
    div.appendChild(linkRepo);
    project.appendChild(div);
  }

  const hamburgerMenu = document.querySelector(".navbar__hamburger--menu");
  const hamburgerClose = document.querySelector(".navbar__mobile--back");

  hamburgerMenu.addEventListener("click", () => {
    document.querySelector(".navbar").style.display = "none";
    document.querySelector(".navbar__mobile").style.display = "block";
    document.querySelector(".main").style.display = "none";
    document.querySelector(".footer").style.display = "none";
  });
  hamburgerClose.addEventListener("click", () => {
    document.querySelector(".navbar__mobile").style.display = "";
    document.querySelector(".navbar").style.display = "";
    document.querySelector(".main").style.display = "";
    document.querySelector(".footer").style.display = "";
    window.scrollTo({ top: positions });
  });
  const mobileNav = document.querySelector(".navbar__mobile");
  window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth >= 768) {
      if (mobileNav.style.display == "block") {
        mobileNav.style.display = "none";
        document.querySelector(".navbar").style.display = "block";
        document.querySelector(".main").style.display = "block";
        document.querySelector(".footer").style.display = "block";
      }
    }
  });

