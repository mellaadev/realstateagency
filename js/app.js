const imagenes = document.querySelectorAll('.propiedad__imagen');

window.addEventListener('scroll', () => {

    const scroll = this.scrollY / -20;

    imagenes.forEach( (imagen) => {
        imagen.style.backgroundPositionY = `${scroll}px`
    });
});

// Esto es para el scroll de las imagenes al dar scroll en la página