
let boxes = document.querySelectorAll(".box");
let popupElem = document.querySelector("#greyBox");
let closeBtn = document.querySelector(".close-btn");

boxes.forEach((box,index) => {
    box.addEventListener("click", function() { /* display the popup */
        popupElem.classList.toggle("hide");
        let bigImg = document.querySelector("#megaPhoto");
        bigImg.src = box.querySelector("img").src;




        let songContainer = document.querySelector(".songDisplay");
        songContainer.innerHTML = ""; // clear the song container

        //let index= document.querySelector("p");
        console.log(index);

    playlists[index].songs.forEach(song => {
        let temp = document.createElement("div");
        temp.classList.add("eachSong");

        let songImg = document.createElement("img");
        songImg.src = song.albumCover;

        let songInfo = document.createElement("div");
        songInfo.classList.add("eachSomgWords");

        let songTitle = document.createElement("h2");
        songTitle.textContent = song.songName;

        let songArtist = document.createElement("h4");
        songArtist.textContent = song.artist;

        let songLength = document.createElement("h4");
        songLength.textContent = song.duration;

        songInfo.appendChild(songTitle);
        songInfo.appendChild(songArtist);
        songInfo.appendChild(songLength);

        temp.appendChild(songImg);
        temp.appendChild(songInfo);

        songContainer.appendChild(temp);

    })


    })
});



closeBtn.addEventListener("click", function() {
    popupElem.classList.toggle("hide");

    let songContainer = document.querySelector(".songDisplay");
    songContainer.innerHTML = ""; // clear the song container


});


//boxes can be indexed
//playlists can be indexed
function importAlbums(){
    let boxImg = document.querySelectorAll(".box img");
    console.log("here");
    let boxTitle = document.querySelectorAll(".box h3");
    let boxArtist = document.querySelectorAll(".box h4");

    let len = playlists.length;
    for(let i = 0; i < len; i++) {
        boxImg[i].src = playlists[i].playlist_art;
        boxTitle[i].textContent = playlists[i].playlist_name;
        boxArtist[i].textContent = playlists[i].playlist_author;
        //box[i].ID = i;

    }
}


document.addEventListener("DOMContentLoaded", function() {
    importAlbums();
});
