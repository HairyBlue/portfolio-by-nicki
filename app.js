import "./theme.js";

const menuIcon = document.querySelector(".navbar__hamburger--img");
let isClosed = false;

menuIcon.addEventListener("click", () => {
  if (!isClosed) {
    menuIcon.src = svg("close");
    document.querySelector(".navbar__mobile").style.display = "block";
    isClosed = !isClosed;
  } else {
    menuIcon.src = svg("hamburger-menu");
    document.querySelector(".navbar__mobile").style.display = "none";
    isClosed = !isClosed;
  }
});
function svg(svgName) {
  return `assets/svg/${svgName}.svg`;
}
