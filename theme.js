const bodyBackgroundColor = document.getElementsByTagName("body");
const anchorTag = document.getElementsByTagName("a");
const upload = document.querySelectorAll(".upload");
const primary = document.querySelectorAll(".white");
const secondary = document.querySelectorAll(".slate");
const backgroundWhite = document.querySelector(".bg-white");
const headerBlur = document.querySelector(".blur");
const techDivs = document.querySelectorAll(".about__tech--divs");
const categoryBtn = document.querySelectorAll(".project__category--btn");

const github = document.querySelector("#github");
const linkedin = document.querySelector("#linkedin");
const gmail = document.querySelector("#gmail");

const theme = document.querySelectorAll(".theme-light-dark");
const localStorageTheme = localStorage.getItem("_theme");
localDataTheme(localStorageTheme);
theme.forEach((els) => {
  els.addEventListener("click", () => {
    const localThemeChange = localStorage.getItem("_theme");
    if (localThemeChange == null) {
      localStorage.setItem("_theme", "light");
      light();
    }
    if (localThemeChange == "light") {
      localStorage.setItem("_theme", "dark");
      dark();
    }
    if (localThemeChange == "dark") {
      localStorage.setItem("_theme", "light");
      light();
    }
  });
});
function localDataTheme(localTheme) {
  if (localTheme == "light") {
    light();
  }
  if (localTheme == "dark") {
    dark();
  }
}

function light() {
  bodyBackgroundColor[0].style.backgroundColor = "#fff";
  bodyBackgroundColor[0].style.color = "#030712";
  for (let i = 0; i < anchorTag.length; i++) {
    anchorTag[i].style.color = "#030712";
  }
  theme.forEach((e) => {
    e.src = svg("theme-light");
  });
  upload.forEach((e) => {
    e.src = svg("upload-light");
  });
  secondary.forEach((e) => {
    e.classList.remove("slate");
    e.classList.add("dark");
  });
  primary.forEach((e) => {
    e.classList.remove("white");
    e.classList.add("dark");
  });
  headerBlur.style.backgroundColor = "#fff";
  categoryBtn.forEach((e) => {
    e.style.backgroundColor = "#fff";
    e.classList.remove("slate");
    e.classList.add("dark");
  });
  techDivs.forEach((e) => {
    e.style.backgroundColor = "#fff";
    e.classList.remove("slate");
    e.classList.add("dark");
  });
  iconLight();
}

function dark() {
  bodyBackgroundColor[0].style.backgroundColor = "";
  bodyBackgroundColor[0].style.color = "";
  for (let i = 0; i < anchorTag.length; i++) {
    anchorTag[i].style.color = "";
  }
  theme.forEach((e) => {
    e.src = svg("theme-dark");
  });
  upload.forEach((e) => {
    e.src = svg("upload-dark");
  });
  secondary.forEach((e) => {
    e.classList.remove("dark");
    e.classList.add("slate");
  });
  primary.forEach((e) => {
    e.classList.remove("dark");
    e.classList.add("white");
  });
  headerBlur.style.backgroundColor = "";
  categoryBtn.forEach((e) => {
    e.style.backgroundColor = "";
    e.classList.remove("dark");
    e.classList.add("slate");
  });
  techDivs.forEach((e) => {
    e.style.backgroundColor = "";
    e.classList.remove("dark");
    e.classList.add("slate");
  });
  iconDark();
}

function iconLight() {
  github.classList.remove("github-dark");
  github.classList.add("github-light");

  linkedin.classList.remove("linkedin-dark");
  linkedin.classList.add("linkedin-light");

  gmail.classList.remove("gmail-dark");
  gmail.classList.add("gmail-light");
}

function iconDark() {
  github.classList.remove("github-light");
  github.classList.add("github-dark");

  linkedin.classList.remove("linkedin-light");
  linkedin.classList.add("linkedin-dark");

  gmail.classList.remove("gmail-light");
  gmail.classList.add("gmail-dark");
}
function svg(svgName) {
  return `assets/svg/${svgName}.svg`;
}
