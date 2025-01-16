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