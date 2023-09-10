let latestKnownPosition = 0;
const home = 0;
const project = 750;
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
      latestKnownPosition = project;
      window.scrollTo({ top: project, behavior: "smooth" });
    });
  });
}

export { latestKnownPosition as position1, Home as Home1, Project as Project1 };
