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
