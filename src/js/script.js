document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".formation-collapse");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "false";
      this.textContent = isExpanded ? "En savoir plus" : "Moins";
    });
  });
});

document.getElementById("subject").addEventListener("change", function () {
  var otherSubject = document.getElementById("otherSubject");
  if (this.value === "Autre") {
    otherSubject.style.display = "block";
  } else {
    otherSubject.style.display = "none";
  }
});
