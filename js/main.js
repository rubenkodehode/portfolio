// main.js
import { createTwinklingStar, createParallaxStars } from "./stars.js";
import { enableParallax } from "./parallax.js";
import { setupModal } from "./modal.js";
import { setupPokemonFetcher } from "./pokemon.js";

// Initialize everything
createParallaxStars(50); // Create background stars (parallax)
enableParallax();
setupModal();
setupPokemonFetcher();

setInterval(createTwinklingStar, 100); // Twinkling stars appear dynamically
