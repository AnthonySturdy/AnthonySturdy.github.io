//Credit to https://github.com/Mashpoe for the idea

var canvas = document.createElement("CANVAS");
var context = canvas.getContext("2d");
canvas.width = 16;
canvas.height = 16;

var images = [];

function AddImage(source){
    var newImage = new Image();
    images.push({img:newImage, src:source});
    return newImage;
}

function LoadImage(){
    if (images.length > 0) {
				
        images[0].img.onload = LoadImage;
        images[0].img.src = images[0].src;
        
        images.shift();
        
    } else {
        Start();
        console.log("start");
    }
}

var favImg = AddImage("favicon_large.png");

LoadImage();

function SetFavicon(){
    var favicon = document.getElementById("favicon");
    var newIcon = favicon.cloneNode(true);
    newIcon.setAttribute("href", canvas.toDataURL());
    favicon.parentNode.replaceChild(newIcon, favicon);
}

function Start(){
    window.setInterval(function(){
        Loop();
        SetFavicon();
    }, 20);
}

var showing = true

function Loop(){
    context.clearRect(0, 0, 16, 16);
    
    context.drawImage(favImg, showing ? 0 : 1, 0);
    showing = !showing;
}