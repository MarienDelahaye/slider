// Variables //
var ulImages = document.getElementsByTagName("img");
var imageNumber = ulImages.length;
var laps = 0;
var i;

// Functions if needed //
function hideImages(){
    for (let i = 0; i < imageNumber; i++)
        { ulImages[i].style.display = "none";
    }
    laps++;
if (laps == ulImages.length) {laps = 1}
ulImages[laps-1].style.display = "block";
setTimeout(hideImages, 500);

}

// Script part //
hideImages();






