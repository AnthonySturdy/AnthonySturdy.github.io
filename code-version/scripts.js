//Expandable Images
$(document).ready(function() {
    var imageLinks = $('a[href$=".png"], a[href$=".jpg"], a[href$=".gif"], a[href$=".bmp"]');
    if (imageLinks.children('img').length) {
        imageLinks.click(function(e) {
            e.preventDefault();
            $(this).children('img').toggleClass('expanded');
        });
    }
});

//Scrolling Favicon
//Credit to https://github.com/Mashpoe
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
    }, 150);
}

var posX = 0;

function Loop(){
    context.clearRect(0, 0, 16, 16);

    context.drawImage(favImg, posX, 0);
    posX--;
    if(posX < -128){
        posX = 17;
    }
}