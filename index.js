var allImages = document.getElementsByTagName("img");
for(let i = 0; i < allImages.length; i++)
{
    var extension = allImages[i].id.split(".").pop();
    if(extension == "gif"){
        allImages[i].src = allImages[i].id;
    }
}