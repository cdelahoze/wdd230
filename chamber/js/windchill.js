
var temp = 91.4;
var speed = 1.55;

function myFunction(t, s) {
    return (Math.round((35.74 + (0.6215 * t) - (35.75 * s**0.16) + (0.4275 * t * s**0.16))*10))/10;
}

document.getElementById("wind-ch").innerHTML = myFunction(temp, speed); 

if(temp >= 50){
    { document.getElementById("wind-ch").innerHTML = "N/A";}
} 

if(speed < 3){
    { document.getElementById("wind-ch").innerHTML = "N/A";}
}

