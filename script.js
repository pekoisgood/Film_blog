var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function enlarge(img) {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
};

var imageNodes = document.getElementsByClassName('myImg');
for (var i=0; i < imageNodes.length; i++ ) {
    imageNodes[i].addEventListener('click', function(){
        enlarge(this);
    });
};

//get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//when the user clicks on <span> (x), close the modal
span.onclick = function (){
    modal.style.display = "none";
};