const secciones = document.querySelectorAll('section');
secciones.forEach(s => {
    s.addEventListener('click', function () {
        secciones.forEach(sec => sec.classList = "section not-expanded");
        this.classList = "section is-expanded";
    });

    const closeButton = s.querySelector('.cerrar-seccion');
    closeButton.addEventListener('click', function (event) {
        event.stopPropagation();
        secciones.forEach(section => {
            section.classList = "section";
        });
    });
});
