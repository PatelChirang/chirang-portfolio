// ================== Smooth Scroll + Active Link ==================
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav ul li a");

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 120; // adjust for fixed navbar
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});

// ================== Typing Effect ==================
const roles = ["Developer", "AI Enthusiast", "Student @ GEC Gandhinagar"];
let i = 0, j = 0, current = roles[0], isDeleting = false;

function type() {
  document.getElementById("typing").innerText = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(type, 120);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      i = (i + 1) % roles.length;
      current = roles[i];
    }
    setTimeout(type, 700);
  }
}
type();

// ================== Particles.js Background ==================
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    move: { speed: 1 },
    line_linked: { enable: true, distance: 150, color: "#00ff99" }
  }
});
