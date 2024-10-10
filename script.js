let index = 0;

function showNextImage() {
    const images = document.querySelectorAll('.carousel-image');
    
    // Masquer l'image actuelle
    images[index].classList.remove('active');
    
    // Incrémenter l'index
    index++;
    if (index >= images.length) {
        index = 0;
    }
    
    // Afficher la prochaine image
    images[index].classList.add('active');
}

// Appelle la fonction toutes les 3 secondes (ajustez la durée si besoin)
setInterval(showNextImage, 2000);
