const projects = [
  {
    image:
      "https://raw.githubusercontent.com/edmundnillas3rd/CCIS-Scheduler/master/assets/images/demo-2.jpg",
    name: "CCIS-Scheduler",
    technologies: [
      ["#react", "#7dd3fc", "mdi:react", "#0284c7"],
      ["#redux", "#c4b5fd", "simple-icons:redux", "#7c3aed"],
    ],
    description:
      "CCIS-Scheduler was made for the College of Computing and Information Sciences for organizing and setting scheduled meetups between the faculty and the students, whether it be for academic or personal reasons.",
    category: "School",
    url: {
      visit: "https://ccis-scheduler.onrender.com/login",
      github: "https://github.com/edmundnillas3rd/CCIS-Scheduler",
    },
  },
  {
    image:
      "https://raw.githubusercontent.com/HairyBlue/public-images/main/rushfire/rushfire.png",
    name: "RushFire",
    technologies: [
      ["#vue", "#86efac", "mdi:vuejs", "#16a34a"],
      ["#tailwind", "#bae6fd", "mdi:tailwind", "#0284c7"],
      ["#pinia", "#fef08a", "logos:pinia", ""],
      ["#chartjs", "#fca5a5", "file-icons:chartjs", ""],
      ["#mapbox", "#d1d5db", "mdi:mapbox", "1f2937"],
    ],
    description:
      "RushFire serves as a real-time fire incident monitoring platform in my  local area, ensuring quick and efficient response to emergencies. By tracking incidents and alerting relevant authorities, it contributes to the safety and well-being of our community.",
    category: "Community",
    url: {
      visit: "",
      github: "https://github.com/HairyBlue/RushedFire_Web",
    },
  },
  {
    image:
      "https://raw.githubusercontent.com/HairyBlue/public-images/main/repochum/repochum.png",
    name: "RepoChum",
    technologies: [
      ["#html", "#fed7aa", "icomoon-free:html-five", "#ea580c"],
      ["#css", "#bae6fd", "simple-icons:css3", "#0284c7"],
      ["#javascript", "#fef08a", "simple-icons:javascript", "#ca8a04"],
    ],
    description:
      "RepoChum, a simple website with GitHub API integration, allows users to effortlessly keep tabs on the latest activities within their repositories or those of other users, facilitating seamless tracking of events.",
    category: "Others",
    url: {
      visit: "https://repochum.onrender.com/",
      github: "https://github.com/HairyBlue/RepoChum_Static",
    },
  },
];

let temp = [];
let btnData = [];
const projectsCategory = ["School", "Community", "Others"];

const retrieveKey = () => {
  for (let i = 0; i < projectsCategory.length; i++) {
    let data = projects.filter(
      (project) => project.category == projectsCategory[i]
    );
    let object = {
      name: projectsCategory[i],
      count: data.length,
    };
    temp.push(object);
  }
  btnData.push({ name: "All", count: projects.length }, ...temp);
  btnDataList();
};
function btnDataList() {
  for (let i = 0; i < btnData.length; i++) {
    const projectCategoryBtn = document.createElement("div");
    projectCategoryBtn.classList.add("project__category--btn");
    projectCategoryBtn.setAttribute("id", btnData[i].name);
    projectCategoryBtn.textContent = `${btnData[i].name} (${btnData[i].count})`;
    // projectCategoryBtn.classList.add("selection");
    document
      .querySelector(".project__category")
      .appendChild(projectCategoryBtn);
  }
}

function loadContent() {
  projectBtnFunc();
  filterProjects("All");
}
function projectBtnFunc() {
  document.querySelectorAll(".project__category--btn").forEach((els) => {
    els.addEventListener("click", () => {
      filterProjects(els.id);
    });
  });
}

function filterProjects(category) {
  const projectList = document.querySelectorAll(".project__container");
  if (projectList)
    projectList.forEach((prod) => {
      prod.remove();
    });
  if (category == "All") {
    gridList(projects);
    return;
  }
  let data = projects.filter((project) => project.category == category);
  gridList(data);
}
function gridList(data) {
  for (let j = 0; j < data.length; j++) {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project__container");
    /********** Wrap **********/
    const projectWrap = document.createElement("div");
    projectWrap.classList.add("project__wrap");
    const projectWrapImg = document.createElement("div");
    projectWrapImg.classList.add("project__wrap--img");
    const image = document.createElement("img");
    /********** Wrap **********/

    /********** Label **********/
    const projectLabel = document.createElement("div");
    projectLabel.classList.add("project__label");
    const projectLabelBig = document.createElement("div");
    projectLabelBig.classList.add("project__label--big");
    const projectLabelBox = document.createElement("div");
    projectLabelBox.classList.add("project__label--box");
    /********** Label **********/

    image.setAttribute("src", data[j].image);
    image.setAttribute("alt", data[j].name);
    projectLabelBig.textContent = data[j].name;

    const description = document.createElement("div");
    description.textContent = data[j].description;

    let techData = data[j].technologies;
    for (let k = 0; k < techData.length; k++) {
      const tech = document.createElement("div");
      const icon = document.createElement("iconify-icon");
      tech.textContent = techData[k][0];
      tech.style.background = techData[k][1];
      icon.setAttribute("icon", `${techData[k][2]}`);
      icon.style.color = techData[k][3];
      icon.style.marginLeft = "4px";
      tech.appendChild(icon);
      projectLabelBox.appendChild(tech);
    }

    const projectLinks = document.createElement("div");
    projectLinks.classList.add("project-links");

    const visit = document.createElement("a");
    const visitIcon = document.createElement("iconify-icon");
    const visitDiv = document.createElement("div");
    visit.setAttribute("href", `${data[j].url.visit}`);
    visit.setAttribute("target", "_blank");
    visitIcon.setAttribute("icon", "iconoir:arrow-bl");
    visitIcon.setAttribute("rotate", "180deg");
    visitDiv.append(visitIcon, " Visit");
    visit.appendChild(visitDiv);

    const github = document.createElement("a");
    const githubIcon = document.createElement("iconify-icon");
    const githubDiv = document.createElement("div");
    github.setAttribute("href", `${data[j].url.github}`);
    github.setAttribute("target", "_blank");
    githubIcon.setAttribute("icon", "mdi:github");
    githubDiv.append(githubIcon, " Github");
    github.appendChild(githubDiv);

    if (data[j].url.visit !== "") {
      projectLinks.append(visit, github);
    } else {
      projectLinks.appendChild(github);
    }
    projectWrapImg.appendChild(image);
    projectWrap.appendChild(projectWrapImg);

    projectLabel.appendChild(projectLabelBig);
    projectLabel.appendChild(projectLabelBox);
    projectLabel.appendChild(description);
    projectLabel.appendChild(projectLinks);

    projectContainer.appendChild(projectWrap);
    projectContainer.appendChild(projectLabel);
    const projectList = document.querySelector(".project__list");
    projectList.appendChild(projectContainer);
  }
}

export {
  projects as projectList,
  retrieveKey as retrieveKeyButton,
  loadContent as loadContentList,
};
