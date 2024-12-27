const space = document.getElementById("space");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.width = Math.random() * 3 + "px";
  star.style.height = star.style.width;

  star.style.animationDuration = Math.random() * 10 + 5 + "s";
  star.style.animationDelay = Math.random() * 10 + "s";

  space.appendChild(star);

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

const modules = document.querySelectorAll(".module");

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close");

const content = {
  module1: `
    <h2>Hvem er jeg?</h2>
    <p>Mitt navn er Ruben og jeg er en halvveis utdannet front-end utvikler. Jeg har kunnskap innen HTML/CSS, Javacript, React og Figma. 
    Jeg har også kjennskap til andre kodespråk som python og java.</p>
    <p>Jeg har gått 4 år på høyere utdanning hvor 3 av disse var informatikk og det siste var et årsstudium. 
    På de 4 årene lærte jeg meg all kunnskap innen HTML/CSS, Python, Java, JavaScript og
    React. Jeg har også gått et år på folkehøyskole hvor jeg var så vidt borti C#. 
    på fritiden driver jeg og jobber litt med python og java, for å friske opp hukommelsen i de språkene.</p> 
    <p>Til daglig driver jeg og spiller dataspill, leser meg opp på geografi, jobber med og reparerer datamaskinen min om det trengs,
    eller leser meg opp på generell trivia til quizzer.</p>
    <p>Jeg ser fram til en tid med nye utfordringer i en praksisplass innen webutvikling, og er villig til å lære nye ting på veien.</p>    
    <img src="./images/pic.jpg" alt="me" style="width:50%; height:50%; justify-content:center; border-radius: 100%; border: solid 5px rgba(0, 255, 255, 0.5)">
    <p>Vil du vite mer? trykk <a href="https://example.com" target="_blank" style="color: #0affff;">her</a>!</p>
  `,
  module2: `
    <h2>Prosjekt 1</h2>
    <p>Dette er et spennende prosjekt som bruker moderne teknologi som React og API-integrasjon.</p>
    <img src="https://via.placeholder.com/400x200" alt="Prosjekt 1-bilde" style="width:100%; border-radius: 10px;">
    <p>Les mer om prosjektet på <a href="https://example.com" target="_blank" style="color: #0affff;">min nettside</a>.</p>
  `,
  module3: `
    <h2>Prosjekt 2</h2>
    <p>Et dynamisk prosjekt som kombinerer sanntidsdata og interaktive elementer.</p>
    <img src="https://via.placeholder.com/400x200" alt="Prosjekt 2-bilde" style="width:100%; border-radius: 10px;">
    <ul>
      <li>Funksjon 1: Sanntidsoppdatering</li>
      <li>Funksjon 2: Responsivt design</li>
      <li>Funksjon 3: Brukerinteraktivitet</li>
    </ul>
  `,
  module4: `
  <h2>API</h2>
  <p>Sampletext</p>`,
};

modules.forEach((module) => {
  module.addEventListener("click", () => {
    const id = module.id;
    modalBody.innerHTML = content[id];
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
