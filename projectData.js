const projectObj = [
  {
    Community: [
      {
        name: "RepoChum",
        technologies: ["HTML/CSS", "Javascript"],
        description:
          "RepoChum is made to help user views event on other user github repo.",
        image:
          "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      },
      {
        name: "RepoChum",
        technologies: ["HTML/CSS", "Javascript"],
        description:
          "RepoChum is made to help user views event on other user github repo.",
        image:
          "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      },
      {
        name: "RepoChum",
        technologies: ["HTML/CSS", "Javascript"],
        description:
          "RepoChum is made to help user views event on other user github repo.",
        image:
          "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      },
    ],
  },

  {
    Business: [
      {
        name: "RepoChum",
        technologies: ["HTML/CSS", "Javascript"],
        description:
          "RepoChum is made to help user views event on other user github repo.",
        image:
          "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      },
      {
        name: "RepoChum",
        technologies: ["HTML/CSS", "Javascript"],
        description:
          "RepoChum is made to help user views event on other user github repo.",
        image:
          "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      },
      {
        name: "RepoChum",
        technologies: ["HTML/CSS", "Javascript"],
        description:
          "RepoChum is made to help user views event on other user github repo.",
        image:
          "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      },
    ],
  },
];

let temp = [];
let finalBtnData = [];
let gridData = [];
let count = 0;
let isAllClick = false;

const retrieveKey = () => {
  for (let i = 0; i < projectObj.length; i++) {
    let jsonObject = {
      name: Object.keys(projectObj[i])[0],
      count: Object.values(projectObj[i])[0].length,
    };
    temp.push(jsonObject);
    for (let j = 0; j < Object.values(projectObj[i])[0].length; j++) count++;
  }
  finalBtnData.push({ name: "All", count: count }, ...temp);
  // console.log(finalBtnData)

  for (let i = 0; i < finalBtnData.length; i++) {
    const productCategoryBtn = document.createElement("div");
    productCategoryBtn.classList.add("project__category--btn");
    productCategoryBtn.setAttribute("id", finalBtnData[i].name);
    productCategoryBtn.textContent = `${finalBtnData[i].name} (${finalBtnData[i].count})`;
    // console.log(productCategoryBtn)

    document
      .querySelector(".project__category")
      .appendChild(productCategoryBtn);
  }
};
retrieveKey();

window.addEventListener("DOMContentLoaded", () => {
  projectBtnFunc();

  if (!isAllClick) {
    gridListAllFunc();
  }
});

function projectBtnFunc() {
  document.querySelectorAll(".project__category--btn").forEach((els) => {
    els.addEventListener("click", () => {
      for (let i = 1; i < finalBtnData.length; i++) {
        if (els.id == finalBtnData[i].name) {
          let data = Object.values(projectObj[i - 1])[0];
          console.log(data);
        }
      }

      if (els.id == "All") gridListAllFunc();
    });
  });
}

function gridListAllFunc() {
  for (let i = 0; i < projectObj.length; i++) {
    let data = Object.values(projectObj[i])[0];
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
      console.log(projectList);
    }
  }
}
function gridListFunc() {}
