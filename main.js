// Create Stars
function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.width = Math.random() * 3 + "px";
  star.style.height = star.style.width;

  star.style.animationDuration = Math.random() * 10 + 5 + "s";
  star.style.animationDelay = Math.random() * 10 + "s";

  document.getElementById("space").appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 15000);
}

setInterval(createStar, 100);

const starStyle = document.createElement("style");
starStyle.textContent = `
  .star {
    position: absolute;
    background: white;
    border-radius: 50%;
    opacity: 0.8;
    animation: twinkle 15s linear infinite;
  }

  @keyframes twinkle {
    0%, 100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`;
document.head.appendChild(starStyle);

// Scroll Interaction for Parallax Effect
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const stars = document.querySelectorAll(".star");

  stars.forEach((star, index) => {
    const speed = index % 2 === 0 ? 0.2 : 0.5; // Different speeds for depth
    const offset = scrollPosition * speed;
    star.style.transform = `translateY(${offset}px)`;
  });
});

// Create Modal in HTML
const modalHTML = `
  <div id="modal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <div id="modal-body"></div>
    </div>
  </div>
`;
document.body.insertAdjacentHTML("beforeend", modalHTML);

// Ensure the modal and its elements exist
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close");

// Verify project elements
const projects = document.querySelectorAll(".project");

// Modal content for each project
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

// Open the modal when a project is clicked
projects.forEach((project) => {
  project.addEventListener("click", () => {
    const content =
      projectContent[project.id] || `<p>No details available.</p>`;
    modalBody.innerHTML = content; // Load the content
    modal.style.display = "block"; // Show the modal
  });
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// API Example - Fetch Pokémon
async function fetchPokemonData() {
  try {
    const randomId = Math.floor(Math.random() * 1010) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return {
      name: data.name,
      types: data.types.map((typeInfo) => typeInfo.type.name),
      image: data.sprites.front_default,
    };
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return null;
  }
}

const fetchButton = document.getElementById("fetch-pokemon");
const pokemonDisplay = document.getElementById("pokemon-display");

fetchButton.addEventListener("click", async () => {
  const pokemon = await fetchPokemonData();
  if (pokemon) {
    pokemonDisplay.innerHTML = `
      <h3>${pokemon.name.toUpperCase()}</h3>
      <img src="${pokemon.image}" alt="${
      pokemon.name
    }" style="width: 150px; height: 150px; margin: 10px 0;">
      <p>Type(s): ${pokemon.types.join(", ")}</p>
    `;
  } else {
    pokemonDisplay.innerHTML = `<p>Could not fetch Pokémon data. Please try again later.</p>`;
  }
});
