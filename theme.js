const bodyBackgroundColor = document.getElementsByTagName("body");
const theme = document.querySelectorAll(".theme-light-dark");
const upload = document.querySelectorAll(".upload");
const primary = document.querySelectorAll(".white");
const secondary = document.querySelectorAll(".slate");
const localStorageTheme = localStorage.getItem("_theme");

const github = document.querySelector("#github");
const linkedin = document.querySelector("#linkedin");
const gmail = document.querySelector("#gmail");

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
  iconLight();
}

function dark() {
  bodyBackgroundColor[0].style.backgroundColor = "";
  bodyBackgroundColor[0].style.color = "";
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
