/* Acceder al boton hamburguesa desde JS*/
var menuToggle = document.querySelector(".menu-toggle");

/*Acceder al estilo de la barra de menu desde JS*/
var navMenu = document.querySelector(".nav-menu");

/*Programo el evento "onclick" del boton hamburguesa para
alternar la visibilidad de la barra de menu vertical*/
menuToggle.onclick = () => {
    navMenu.classList.toggle("active");
};

/* ===============================
   LOGICA PARA EL BOTÓN IR ARRIBA
=============================== */
const scrollUpBtn = document.querySelector('.scroll-up-btn');

// Función para mostrar u ocultar el botón
window.addEventListener('scroll', () => {
    // Se muestra el botón después de hacer scroll 400px hacia abajo
    if (window.scrollY > 400) {
        scrollUpBtn.classList.add('show');
    } else {
        scrollUpBtn.classList.remove('show');
    }
});

// Función para el desplazamiento suave hacia arriba
scrollUpBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del enlace (#)

    // Desplazamiento suave al hacer clic
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    scrollUpBtn.blur();
});

function adjustHeaderPosition() {
    const topBar = document.querySelector('.top-bar');
    const siteHeader = document.querySelector('#site-header');

    if (topBar && siteHeader) {
        const topBarHeight = topBar.offsetHeight;
        siteHeader.style.top = `${topBarHeight}px`;
    }
}

// Llama a la función al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('load', adjustHeaderPosition);
window.addEventListener('resize', adjustHeaderPosition);