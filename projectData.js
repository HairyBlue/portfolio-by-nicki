const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    name: "RepoChum",
    technologies: ["HTML/CSS", "Javascript"],
    description:
      "RepoChum is made to help user views event on other user github repo.",
    category: "Community",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    name: "RepoChum",
    technologies: ["HTML/CSS", "Javascript"],
    description:
      "RepoChum is made to help user views event on other user github repo.",
    category: "Business",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    name: "RepoChum",
    technologies: ["HTML/CSS", "Javascript"],
    description:
      "RepoChum is made to help user views event on other user github repo.",
    category: "Community",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    name: "RepoChum",
    technologies: ["HTML/CSS", "Javascript"],
    description:
      "RepoChum is made to help user views event on other user github repo.",
    category: "Business",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    name: "RepoChum",
    technologies: ["HTML/CSS", "Javascript"],
    description:
      "RepoChum is made to help user views event on other user github repo.",
    category: "Community",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    name: "RepoChum",
    technologies: ["HTML/CSS", "Javascript"],
    description:
      "RepoChum is made to help user views event on other user github repo.",
    category: "Business",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    name: "RepoChum",
    technologies: ["HTML/CSS", "Javascript"],
    description:
      "RepoChum is made to help user views event on other user github repo.",
    category: "Community",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    name: "RepoChum",
    technologies: ["HTML/CSS", "Javascript"],
    description:
      "RepoChum is made to help user views event on other user github repo.",
    category: "Business",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    name: "RepoChum",
    technologies: ["HTML/CSS", "Javascript"],
    description:
      "RepoChum is made to help user views event on other user github repo.",
    category: "Community",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    name: "RepoChum",
    technologies: ["HTML/CSS", "Javascript"],
    description:
      "RepoChum is made to help user views event on other user github repo.",
    category: "Business",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    name: "RepoChum",
    technologies: ["HTML/CSS", "Javascript"],
    description:
      "RepoChum is made to help user views event on other user github repo.",
    category: "Community",
  },
];

let temp = [];
let btnData = [];
const projectsCategory = ["Community", "Business"];

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
retrieveKey();

window.addEventListener("DOMContentLoaded", () => {
  projectBtnFunc();
  filterProjects("All");
});

function projectBtnFunc() {
  document.querySelectorAll(".project__category--btn").forEach((els) => {
    els.addEventListener("click", () => {
      filterProjects(els.id);
    });
  });
}

function btnDataList() {
  for (let i = 0; i < btnData.length; i++) {
    const projectCategoryBtn = document.createElement("div");
    projectCategoryBtn.classList.add("project__category--btn");
    projectCategoryBtn.setAttribute("id", btnData[i].name);
    projectCategoryBtn.textContent = `${btnData[i].name} (${btnData[i].count})`;
    projectCategoryBtn.classList.add("selection");
    document
      .querySelector(".project__category")
      .appendChild(projectCategoryBtn);
  }
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
    projectLabelBig.textContent = data[j].name;
    const description = document.createElement("div");
    description.textContent = data[j].description;
    let techData = data[j].technologies;
    for (let k = 0; k < techData.length; k++) {
      const tech = document.createElement("div");
      tech.textContent = techData[k];
      projectLabelBox.appendChild(tech);
    }
    projectWrapImg.appendChild(image);
    projectWrap.appendChild(projectWrapImg);

    projectLabel.appendChild(projectLabelBig);
    projectLabel.appendChild(projectLabelBox);
    projectLabel.appendChild(description);

    projectContainer.appendChild(projectWrap);
    projectContainer.appendChild(projectLabel);
    const projectList = document.querySelector(".project__list");
    projectList.appendChild(projectContainer);
  }
}
