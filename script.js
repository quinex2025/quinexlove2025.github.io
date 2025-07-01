// Button click event
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Thanks for getting started!');
    // Smooth scroll to about section
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// Form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted! (This is a demo)');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId !== '#') {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});