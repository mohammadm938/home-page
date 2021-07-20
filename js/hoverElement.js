let out = false;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
let borders = ["top", "right", "bottom", "left","top"];
async function styleHoverElement(element) {
  out = false;
  for (const placeNumber in borders) {
    if (out == false) {
      setBorder(element, borders[placeNumber]);
      await sleep(400);
      removeBorder(element);
    }
  }
}
function setBorder(element, borderPlace) {
  switch (borderPlace) {
    case "top":
      // element.style.borderTop = "#b2b9c7 2px solid";
      element.style.boxShadow = "0px -4px 0px 0px #b2b9c7";
      
      break;
    case "right":
      // element.style.borderRight = "#b2b9c7 2px solid";
      element.style.boxShadow = "4px 0px 0px 0px #b2b9c7";
      break;
    case "bottom":
      // element.style.borderBottom = "#b2b9c7 2px solid";
      element.style.boxShadow = "0px 4px 0px 0px #b2b9c7";
      break;
    case "left":
      // element.style.borderLeft = "#b2b9c7 2px solid";
      element.style.boxShadow = "-4px 0px 0px 0px #b2b9c7";
      break;
    default:
      break;
  }
}
// li.style.boxShadow
// -webkit-box-shadow: 0px 4px 0px 0px #b2b9c7; 
// box-shadow: 0px 4px 0px 0px #b2b9c7;
function removeBorder(element) {
  element.style.boxShadow = "none";
}
function overElement(element) {
  element.style.boxShadow = "none";
  out = true;
}
