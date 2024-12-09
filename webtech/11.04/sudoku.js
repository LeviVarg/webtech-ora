const tdElements = document.querySelectorAll(td);
for (let i = 0; i < tdElements.length; i++) {
  tdElements[i].addEventListener("mouseenter", function (event) {
    tdElements[i].classlist.toggle("highlight");
  });
  tdElements[i].addEventListener("mouseleave", function (event) {
    tdElements.classlist.toggle("highlight");
  });
}
