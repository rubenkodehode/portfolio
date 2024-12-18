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

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  return i < 10 ? "0" + i : i;
}

document.addEventListener("DOMContentLoaded", function () {
  startTime();
});
