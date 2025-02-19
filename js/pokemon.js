// pokemon.js
async function fetchPokemonData() {
  try {
    const randomId = Math.floor(Math.random() * 1010) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

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

export function setupPokemonFetcher() {
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
}
