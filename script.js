document.addEventListener('DOMContentLoaded', function() {
    // Animación de fade-in para las secciones
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log('Formulario enviado:', { name, email, message });
        alert('Gracias por tu mensaje. Te contactaremos pronto.');
        contactForm.reset();
    });

    // Cambiar la velocidad de la animación de fondo al hacer hover en el botón de enviar
    const submitButton = document.querySelector('button[type="submit"]');
    const backgroundAnimation = document.querySelector('.background-animation');

    submitButton.addEventListener('mouseenter', () => {
        backgroundAnimation.style.animationDuration = '5s';
    });

    submitButton.addEventListener('mouseleave', () => {
        backgroundAnimation.style.animationDuration = '10s';
    });
});

