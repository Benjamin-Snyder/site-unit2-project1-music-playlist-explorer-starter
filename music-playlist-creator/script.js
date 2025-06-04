
let popupBtn = document.querySelector("button");
let popupElem = document.querySelector("#greyBox");
let closeBtn = document.querySelector(".close-btn");


popupBtn.addEventListener("click", function() { /* display the popup */
    popupElem.classList.toggle("hide");
    //greyPopup.classList.toggle("hide");
})




closeBtn.addEventListener("click", function() {
    popupElem.classList.toggle("hide");
    //greyPopup.classList.toggle("hide");
});
