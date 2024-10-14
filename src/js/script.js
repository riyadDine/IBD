document.addEventListener("DOMContentLoaded", () => {
  // elements
  const collapseButtons = document.querySelectorAll(".mod-collapse");
  const objetSelect = document.getElementById("objet");
  const autreObjDiv = document.querySelector(".autreObj");
  const year = document.getElementById("currentYear");

  // maj année
  year.textContent = new Date().getFullYear();

  // Function
  const CollapseText = (event) => {
    const button = event.currentTarget;
    const isExpanded = button.getAttribute("aria-expanded") === "false";
    button.textContent = isExpanded ? "En savoir plus" : "Moins";
  };

  const visibility = () => {
    autreObjDiv.style.display =
      objetSelect.value === "Autre" ? "block" : "none";
  };

  // event
  collapseButtons.forEach((button) => {
    button.addEventListener("click", CollapseText);
  });
  objetSelect.addEventListener("change", visibility);
});
