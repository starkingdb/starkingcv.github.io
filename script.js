document.addEventListener('DOMContentLoaded', function() {
    // Datos de experiencia
    const experiencias = [
        {
            titulo: "Desarrollador Full Stack Senior",
            empresa: "Tech Innovators Inc.",
            periodo: "2020 - Presente",
            descripcion: "Lideré el desarrollo de aplicaciones web utilizando JavaScript, HTML5 y CSS3. Implementé arquitecturas escalables y optimicé el rendimiento de las aplicaciones existentes."
        },
        {
            titulo: "Desarrollador Front-end",
            empresa: "Creative Solutions Ltd.",
            periodo: "2018 - 2020",
            descripcion: "Desarrollé interfaces de usuario responsivas y accesibles utilizando HTML5, CSS3 y JavaScript. Colaboré estrechamente con diseñadores UX para implementar diseños pixel-perfect."
        },
        {
            titulo: "Desarrollador Web Junior",
            empresa: "StartUp Dynamics",
            periodo: "2016 - 2018",
            descripcion: "Contribuí al desarrollo de sitios web y aplicaciones utilizando HTML, CSS y JavaScript. Aprendí las mejores prácticas de desarrollo web y trabajé en un equipo ágil."
        }
    ];

    // Generar tarjetas de experiencia
    const experienciaContainer = document.getElementById('experiencia-container');
    experiencias.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card h-100 experience-card">
                <div class="card-body">
                    <h5 class="card-title">${exp.titulo}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${exp.empresa}</h6>
                    <p class="card-text">${exp.descripcion}</p>
                    <p class="card-text"><small class="text-muted">${exp.periodo}</small></p>
                </div>
            </div>
        `;
        experienciaContainer.appendChild(card);
    });

    // Datos de habilidades
    const habilidades = [
        "JavaScript", "HTML5", "CSS3", "Bootstrap", "React", "Node.js", "Express",
        "MongoDB", "Git", "Webpack", "Responsive Design", "API RESTful"
    ];

    // Generar badges de habilidades
    const habilidadesContainer = document.getElementById('habilidades-container');
    habilidades.forEach(skill => {
        const badge = document.createElement('span');
        badge.className = 'skill-badge';
        badge.textContent = skill;
        habilidadesContainer.appendChild(badge);
    });

    // Manejar envío del formulario
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Te contactaré pronto!');
        contactForm.reset();
    });
});

