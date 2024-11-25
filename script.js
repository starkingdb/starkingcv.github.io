document.addEventListener('DOMContentLoaded', function() {
    // Inicializar WOW.js para animaciones al desplazarse
    new WOW().init();

    // Función para descargar el CV
    document.getElementById('downloadCV').addEventListener('click', function() {
        // Crear un enlace dinámico para forzar la descarga
        const link = document.createElement('a');
        link.href = 'cv.pdf'; // Ruta al archivo
        link.download = 'cv.pdf'; // Nombre del archivo al descargar
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Eliminar el enlace después de usarlo
    });



    // Validación del formulario de contacto
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        if (name && email && message) {
            // Aquí deberías enviar los datos del formulario a un servidor
            alert('Mensaje enviado con éxito!');
            this.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    // Animación suave al hacer scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
