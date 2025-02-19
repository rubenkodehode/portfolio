// parallax.js
export function enableParallax() {
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const stars = document.querySelectorAll(".parallax-star"); // Only affect parallax stars

    stars.forEach((star, index) => {
      const speed = index % 2 === 0 ? 0.2 : 0.5; // Different speeds for depth
      const offset = scrollPosition * speed;
      star.style.transform = `translateY(${offset}px)`;
    });
  });
}
