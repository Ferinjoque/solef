/* Botón hamburguesa: referencia al icono que abre/cierra el menú */
var menuToggle = document.querySelector(".menu-toggle");
/* Menú principal que se mostrará u ocultará */
var navMenu = document.querySelector(".nav-menu");

/* Al hacer clic, alterna la clase “active” para mostrar/ocultar el menú */
menuToggle.onclick = () => {
    navMenu.classList.toggle("active");
};

/* Lógica para el botón “ir arriba” */
const scrollUpBtn = document.querySelector('.scroll-up-btn');

// Mostrar u ocultar el botón según el desplazamiento
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {            // Aparece después de 400 px
        scrollUpBtn.classList.add('show');
    } else {
        scrollUpBtn.classList.remove('show');
    }
});

// Desplazamiento suave al inicio de la página
scrollUpBtn.addEventListener('click', (e) => {
    e.preventDefault();                    // Evita comportamiento por defecto del enlace
    window.scrollTo({ top: 0, behavior: 'smooth' });
    scrollUpBtn.blur();                    // Quita el foco para evitar outline
});

/* Ajusta la posición del encabezado para que quede justo debajo de la top-bar */
function adjustHeaderPosition() {
    const topBar = document.querySelector('.top-bar');
    const siteHeader = document.querySelector('#site-header');

    if (topBar && siteHeader) {
        const topBarHeight = topBar.offsetHeight;
        siteHeader.style.top = `${topBarHeight}px`;
    }
}

// Ejecutar al cargar la página y al redimensionar la ventana
window.addEventListener('load', adjustHeaderPosition);
window.addEventListener('resize', adjustHeaderPosition);
