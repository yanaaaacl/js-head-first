let xPos = 300;
let yPos = 150;

function sendWarning(x, y){
    if ((x < xPos) && (y < yPos)) {
        alert("Adjust the position");
    } else{
        alert("Things are fine!");
    }
}
sendWarning(500, 160);
sendWarning(100, 100);
sendWarning(201, 149);