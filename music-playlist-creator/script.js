
let popupBtn = document.querySelector("button");
let popupElem = document.querySelector(".popup");

popupBtn.addEventListener("click", function() { /* display the popup */
    popupElem.classList.toggle("hide");
})
