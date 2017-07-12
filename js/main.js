// Variables //
var ulImages = document.getElementsByTagName("img");
var liItems; 
var imageWidth;
var imageNumber = ulImages.length;
var laps = 0;
var timer;

// Functions if needed //
function hideImages(){
    for (var i = 0; i < imageNumber; i++){
        if (i === laps){
           ulImages[i].style.display = "block"; 
        }
        else{
            ulImages[i].style.display = "none";
        }

    }
}
function timerInterval() {
    timer = setInterval(launchTimer, 9000);
}
function launchTimer() {
    alert("Test");
}
// Script part //
hideImages();
launchTimer();
timerInterval();






