function openInNewTab(url) {
  window.open(url, "_blank").focus();
}

function chooseRandomChild(element) {
  var len = element.children.length;
  var index = Math.floor(Math.random() * len);
  for (child of element.children) {
    child.style.display = "none";
  }
  element.children[index].style.display = "initial";
}

document.querySelectorAll(".choose-random-child").forEach((value, i, obj) => {
  chooseRandomChild(value);
});
