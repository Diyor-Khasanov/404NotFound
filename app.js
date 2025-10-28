const starsContainer = document.getElementById("stars");
const starCount = 150;
const userCont = document.querySelector(".user");
const userName = prompt("Type Your Name ...");

userCont.textContent = `${userName}, we have a problem! `;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 3 + "s";
  star.style.opacity = Math.random() * 0.7 + 0.3;
  starsContainer.appendChild(star);
}

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / window.innerWidth - 0.5;
  const mouseY = e.clientY / window.innerHeight - 0.5;

  const astronaut = document.querySelector(".astronaut");
  astronaut.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;

  const planets = document.querySelectorAll(".planet");
  planets.forEach((planet, index) => {
    const speed = (index + 1) * 10;
    planet.style.transform = `translate(${mouseX * speed}px, ${
      mouseY * speed
    }px)`;
  });
});

setInterval(() => {
  const shootingStar = document.createElement("div");
  shootingStar.style.position = "absolute";
  shootingStar.style.width = "100px";
  shootingStar.style.height = "2px";
  shootingStar.style.background =
    "linear-gradient(90deg, transparent, white, transparent)";
  shootingStar.style.top = Math.random() * 50 + "%";
  shootingStar.style.left = "-100px";
  shootingStar.style.transform = "rotate(-45deg)";
  shootingStar.style.animation = "shoot 1s linear";
  starsContainer.appendChild(shootingStar);

  setTimeout(() => shootingStar.remove(), 1000);
}, 3000);

const style = document.createElement("style");
style.textContent = `
            @keyframes shoot {
                to {
                    transform: translateX(${
                      window.innerWidth + 200
                    }px) translateY(${window.innerHeight / 2}px) rotate(-45deg);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);
