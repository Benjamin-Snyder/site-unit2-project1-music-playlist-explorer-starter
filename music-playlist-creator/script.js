
let boxes = document.querySelectorAll(".box");
let popupElem = document.querySelector("#greyBox");
let closeBtn = document.querySelector(".close-btn");

boxes.forEach(box => {
    box.addEventListener("click", function() { /* display the popup */
        popupElem.classList.toggle("hide");
        //greyPopup.classList.toggle("hide");
    })
});



closeBtn.addEventListener("click", function() {
    popupElem.classList.toggle("hide");
    //greyPopup.classList.toggle("hide");
});


function importAlbums(){
    for (box in boxes) {
        
    }
}
