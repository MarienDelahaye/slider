// Variables //
var ulImages = document.getElementsByTagName("img"); // Récupère les images sous forme de tableau
var imageNumber = ulImages.length; // Nombre d'image dans le tableau
var laps = 0; // Nombre de tour pour la boucle for
var i; // Variables utiliser pour la boucle for

// Functions if needed //
function hideImages(){ // Fonction pour cacher les images pour ensuite les afficher une par une ( pour le slider)
    for (let i = 0; i < imageNumber; i++)
        { ulImages[i].style.display = "none";
    }
    laps++;
if (laps == ulImages.length) {laps = 1}
ulImages[laps-1].style.display = "block"; // Conditions pour le slider
setTimeout(hideImages, 500);

}

// Script part //
hideImages(); // Execute la fonction hideImages






