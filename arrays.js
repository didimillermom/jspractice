
let button =document.getElementById("button1");

let rainbow= ["azure", "lightcoral", "lightskyblue", "greenyellow", "bisque", "blueviolet", "crimson", "lightsalmon", "aquamarine", "dark orange"];

function change(){
    //change the background color in javascript- not recommended
    document.body.style.background = rainbow[Math.floor(10*Math.random())];
}

 button.addEventListener("click", change);

