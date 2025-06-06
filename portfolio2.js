document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});
// Select all sections and navbar links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar ul li a');

// Create an IntersectionObserver to detect when each section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Check if section is in the viewport
        if (entry.isIntersecting) {
            // Remove 'active' from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Find the link that matches the current section and add 'active' class
            const currentLink = document.querySelector(`.navbar ul li a[href="#${entry.target.id}"]`);
            currentLink.classList.add('active');
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is visible

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});



document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var form = event.target;
    var formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    
});


const toggleBtn = document.getElementById('themeToggle');
    const body = document.body;

    // Optional: Load previously saved theme
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        // Save preference
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });



    const canvas = document.getElementById('pulse-canvas');
const ctx = canvas.getContext('2d');
const particles = [];

function createParticles(x, y) {
  for (let i = 0; i < 40; i++) {
    particles.push({
      x,
      y,
      radius: Math.random() * 2 + 1,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 2 + 1,
      alpha: 1
    });
  }
}

function updateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.alpha -= 0.02;

    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  });

  drawParticles();
}

function drawParticles() {
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 0, 0, ${p.alpha})`;
    ctx.fill();
  }
}

function loop() {
  updateParticles();
  requestAnimationFrame(loop);
}

function emitPulseParticles() {
  // Center of the border circle
  const x = canvas.width / 2;
  const y = canvas.height / 2;
  createParticles(x, y);
}

setInterval(emitPulseParticles, 1200); // match CSS pulse timing
loop();



function calculateAge(birthDateStr) {
  const today = new Date();
  const birthDate = new Date(birthDateStr);

  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassedThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassedThisYear) {
    age--; // hasn't had birthday yet this year
  }

  return age;
}

// Replace '2004-05-12' with your actual birthdate in YYYY-MM-DD format
document.getElementById("age").textContent = calculateAge("2004-02-23");
