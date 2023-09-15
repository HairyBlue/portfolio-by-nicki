const iconlist = [
  { name: "html5", icon: "vscode-icons:file-type-html" },
  { name: "css3", icon: "vscode-icons:file-type-css" },
  { name: "javascript", icon: "logos:javascript" },
  { name: "sass", icon: "logos:sass" },
  { name: "react", icon: "logos:react" },
  { name: "vue", icon: "logos:vue" },
  { name: "tailwind", icon: "devicon:tailwindcss" },
  { name: "nodejs", icon: "vscode-icons:file-type-node" },
  { name: "express", icon: "simple-icons:express" },
  { name: "mongodb", icon: "skill-icons:mongodb" },
  { name: "mysql", icon: "logos:mysql-icon" },
  { name: "firebase", icon: "logos:firebase" },
    { name: "planetscale", icon: "logos:planetscale" },
    { name: "figma", icon: "logos:figma" },
  { name: "git", icon: "devicon:git" },
  { name: "vscode", icon: "devicon:vscode" },
];

const techList = document.querySelector(".about__tech--list");

iconlist.forEach((element) => {
  const div = document.createElement("div");
  const icon = document.createElement("iconify-icon");
  icon.setAttribute("icon", `${element.icon}`);
  div.classList.add("about__tech--divs");
  div.append(icon, element.name);
  techList.appendChild(div);
});
