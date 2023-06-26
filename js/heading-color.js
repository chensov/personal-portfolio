const heading = document.getElementById("heading3");
const htmlIcon = document.getElementById("html3");

function changeColorHover(event) {
  if (event.target.id === "html3") {
    heading.style.color = "#E07036";
  } else if (event.target.id === "CSS") {
    heading.style.color = "#58A6D9";
  } else if (event.target.id === "javascript") {
    heading.style.color = "#F3DF41";
  } else if (event.target.id === "sass") {
    heading.style.color = "#BE6D98";
  } else if (event.target.id === "mysql") {
    heading.style.color = "#D89327";
  } else if (event.target.id === "git") {
    heading.style.color = "#CD593D";
  } else if (event.target.id === "figma") {
    heading.style.color = "#995FFA";
  } else if (event.target.id === "adobe-adobe-xd") {
    heading.style.color = "#EA46BC";
  } else if (event.target.id === "adobe-illustrator") {
    heading.style.color = "#F19F2B";
  } else if (event.target.id === "adobe-photoshop") {
    heading.style.color = "#5AC4FC";
  } else {
    heading.style.color = "#797979";
  }
}
