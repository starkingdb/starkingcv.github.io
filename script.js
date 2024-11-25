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
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    // Obtén los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Envía los datos usando EmailJS
    emailjs.send("service_dyv0927", "template_rom6vc8", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        alert("Mensaje enviado con éxito.");
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("contactForm").reset(); // Limpia el formulario
    }, function(error) {
        alert("Error al enviar el mensaje. Por favor, intenta de nuevo.");
        console.log("FAILED...", error);
    });
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
