// stars.js
export function createTwinklingStar() {
  const star = document.createElement("div");
  star.classList.add("star"); // Dynamic stars (DO NOT MOVE)

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

export function createParallaxStars(count = 50) {
  const space = document.getElementById("space");

  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("parallax-star"); // Parallax stars (STATIC BACKGROUND)

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.width = Math.random() * 3 + "px";
    star.style.height = star.style.width;

    space.appendChild(star);
  }
}

// Add styles dynamically
const starStyle = document.createElement("style");
starStyle.textContent = `
    .star, .parallax-star {
      position: absolute;
      background: white;
      border-radius: 50%;
      opacity: 0.8;
    }
  
    .star {
      animation: twinkle 15s linear infinite;
    }
  
    @keyframes twinkle {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
  `;
document.head.appendChild(starStyle);
