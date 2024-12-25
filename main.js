// Velg space-elementet
const space = document.getElementById("space");

// Funksjon for å generere stjerner
function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  // Tilfeldig plassering og størrelse
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.width = Math.random() * 3 + "px";
  star.style.height = star.style.width;

  // Animere stjernen
  star.style.animationDuration = Math.random() * 10 + 5 + "s";
  star.style.animationDelay = Math.random() * 10 + "s";

  space.appendChild(star);

  // Fjern stjernen etter animasjonen er ferdig
  setTimeout(() => {
    star.remove();
  }, 15000);
}

// Generer stjerner kontinuerlig
setInterval(createStar, 100);

// CSS for stjernene
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

// Velg alle modulene
const modules = document.querySelectorAll(".module");

// Legg til klikkhendelse på hver modul
modules.forEach((module) => {
  module.addEventListener("click", () => {
    // Utvid eller lukk modulen som klikkes
    module.classList.toggle("expanded");

    // Lukk alle andre moduler når én utvides
    modules.forEach((otherModule) => {
      if (otherModule !== module) {
        otherModule.classList.remove("expanded");
      }
    });
  });
});
