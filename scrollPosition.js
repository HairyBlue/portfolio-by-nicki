let latestKnownPosition = 0;
const home = 0;
const project = window.screen.height - 100;
const about = window.screen.height + 700
export function Home() {
  document.querySelectorAll(".home-button").forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelector(".navbar__mobile").style.display = "";
      document.querySelector(".navbar").style.display = "";
      document.querySelector(".main").style.display = "";
      latestKnownPosition = home;
      window.scrollTo({ top: home, behavior: "smooth" });
    });
  });
}

export function Project() {
  document.querySelectorAll(".project-button").forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelector(".navbar__mobile").style.display = "";
      document.querySelector(".navbar").style.display = "";
      document.querySelector(".main").style.display = "";
      latestKnownPosition = project ;
      window.scrollTo({ top: project, behavior: "smooth" });
    });
  });
}

export function About() {
  document.querySelectorAll(".about-button").forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelector(".navbar__mobile").style.display = "";
      document.querySelector(".navbar").style.display = "";
      document.querySelector(".main").style.display = "";
      latestKnownPosition = about ;
      window.scrollTo({ top: about, behavior: "smooth" });
    });
  });
}

export { latestKnownPosition as positions, Home as homeNavigation, Project as projectNavigation, About as aboutNavigation };
