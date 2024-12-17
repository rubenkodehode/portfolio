function dropButton() {
  document.getElementById("myDropdown").classList.toggle("show");

  // Toggle the hamburger animation
  const hamburger = document.querySelector(".hamburger");
  hamburger.classList.toggle("active");
}

window.onclick = function (event) {
  if (!event.target.closest(".hamburger")) {
    const dropdown = document.getElementById("myDropdown");
    const hamburger = document.querySelector(".hamburger");

    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
      hamburger.classList.remove("active");
    }
  }
};
