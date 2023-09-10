import { position1, Home1, Project1 } from "./scrollPosition.js";
import "./theme.js";
import "./projectData.js";

Home1();
Project1();

const hamburgerMenu = document.querySelector(".navbar__hamburger--menu");
const hamburgerClose = document.querySelector(".navbar__mobile--back");

hamburgerMenu.addEventListener("click", () => {
  document.querySelector(".navbar").style.display = "none";
  document.querySelector(".navbar__mobile").style.display = "block";
  document.querySelector(".main").style.display = "none";
  // window.scrollTo({ top: 0 });
});

hamburgerClose.addEventListener("click", () => {
  document.querySelector(".navbar__mobile").style.display = "";
  document.querySelector(".navbar").style.display = "";
  document.querySelector(".main").style.display = "";
  window.scrollTo({ top: position1 });
});
