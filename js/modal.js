// modal.js
const modalHTML = `
  <div id="modal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <div id="modal-body"></div>
    </div>
  </div>
`;
document.body.insertAdjacentHTML("beforeend", modalHTML);

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close");

const projectContent = {
  project1: `
    <h2>Restaurant Meny</h2>
    <p>Responsiv nettside med en restaurant meny, laget i react. 
    <a href="https://github.com/rubenkodehode/restaurant-menu" target="_blank" style="color: #0affff">Link til Github</a>.</p>
    <div class="iframe-container">
      <iframe src="https://rubenkodehode.github.io/restaurant-menu/"></iframe>
    </div>
  `,
  project2: `
    <h2>Project 2</h2>
    <p>Trommesett laget med hjelp av queryselector og addeventlistener. 
    <a href="https://github.com/rubenkodehode/prosjekter/tree/main/Modul%20C/drum_kit" target="_blank" style="color: #0affff">Link til Github</a>.</p>
    <img src="images/drumkit.png" id="drumkit" alt="Project 2 Screenshot" style="width: 100%; border-radius: 10px;">
  `,
};

export function setupModal() {
  document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("click", () => {
      modalBody.innerHTML =
        projectContent[project.id] || `<p>No details available.</p>`;
      modal.style.display = "block";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
