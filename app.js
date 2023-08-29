const bodyTheme = document.getElementsByTagName("body");
const theme = document.querySelectorAll(".theme-light-dark");
const upload = document.querySelectorAll(".upload");
const secondary = document.querySelectorAll(".secondary");
const localTheme = localStorage.getItem("_theme");

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
  if (menuIcon.src !== svgURL("close")) {
    menuIcon.src = svgURL("close");
    document.querySelector(".navbar__mobile").style.display = "block";
  } else {
    menuIcon.src = svgURL("hambuger-menu");
    document.querySelector(".navbar__mobile").style.display = "none";
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
    e.src = svgURL("theme-light");
  });
  upload.forEach((e) => {
    e.src = svgURL("upload-light");
  });
  secondary.forEach((e) => {
    e.classList.remove("slate");
    e.classList.add("dark");
  });
}

function dark() {
  bodyTheme[0].style.backgroundColor = "";
  theme.forEach((e) => {
    e.src = svgURL("theme-dark");
  });
  upload.forEach((e) => {
    e.src = svgURL("upload-dark");
  });
  secondary.forEach((e) => {
    e.classList.remove("dark");
    e.classList.add("slate");
  });
}

function svgURL(svgName) {
  const basePath =
    window.location.protocol +
    "//" +
    window.location.hostname +
    (window.location.port ? ":" + window.location.port : "");

  return `${basePath}/portfolio-by-nicki/assets/svg/${svgName}.svg`;
}
