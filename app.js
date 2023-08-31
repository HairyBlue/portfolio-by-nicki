const bodyTheme = document.getElementsByTagName("body");
const theme = document.querySelectorAll(".theme-light-dark");
const upload = document.querySelectorAll(".upload");
const secondary = document.querySelectorAll(".secondary");
const localTheme = localStorage.getItem("_theme");
let isClosed = false;
localDataTheme(localTheme);

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

const menuIcon = document.querySelector(".navbar__hamburger--img");
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

function localDataTheme(localTheme) {
  if (localTheme == "light") {
    light();
  }
  if (localTheme == "dark") {
    dark();
  }
}

function light() {
  bodyTheme[0].style.backgroundColor = "#fff";
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
}

function dark() {
  bodyTheme[0].style.backgroundColor = "";
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
}

function svg(svgName) {
  return `assets/svg/${svgName}.svg`;
}
// function svg(svgName) {
//   const basePath =
//     window.location.protocol +
//     "//" +
//     window.location.hostname +
//     (window.location.port ? ":" + window.location.port : "");
//   return `${basePath}/portfolio-by-nicki/assets/svg/${svgName}.svg`;
// }
