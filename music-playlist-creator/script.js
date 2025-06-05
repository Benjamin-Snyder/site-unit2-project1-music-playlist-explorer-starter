
let boxes = document.querySelectorAll(".box");
let popupElem = document.querySelector("#greyBox");
let closeBtn = document.querySelector(".close-btn");

boxes.forEach((box,index) => {
    box.addEventListener("click", function() { /* display the popup */
        if(!(event.target.classList.contains("heart"))) {


        popupElem.classList.toggle("hide");
        let bigImg = document.querySelector("#megaPhoto");
        bigImg.src = box.querySelector("img").src;

        let playlistTitle = document.querySelector(".displayTitle h1");
        playlistTitle.textContent = playlists[index].playlist_name;

        let playlistAuthor= document.querySelector(".displayMaker h1");
        playlistAuthor.textContent = playlists[index].playlist_author;


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
        }

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
    let likeCount = document.querySelectorAll(".count");

    let len = playlists.length;
    for(let i = 0; i < len; i++) {
        boxImg[i].src = playlists[i].playlist_art;
        boxTitle[i].textContent = playlists[i].playlist_name;
        boxArtist[i].textContent = playlists[i].playlist_author;
        likeCount[i].textContent = playlists[i].likeCount;
        //box[i].ID = i;

    }
}


document.addEventListener("DOMContentLoaded", function() {
    importAlbums();
});


let hearts = document.querySelectorAll(".heart");
let likeCount = document.querySelectorAll(".count");

hearts.forEach((heart,index) => {
    heart.addEventListener("click", function() { /* display the popup */


        if(heart.classList.contains("noLike")){
            heart.textContent= "❤️"
            heart.classList.remove("noLike");
            heart.classList.add("liked");
            likeCount[index].textContent = parseInt(likeCount[index].textContent) + 1;
        }
        else if ( heart.classList.contains("liked")){
            heart.textContent= "🖤"
            heart.classList.remove("liked");
            heart.classList.add("noLike");
            likeCount[index].textContent = parseInt(likeCount[index].textContent) - 1;

        }
        playlists[index].likeCount = likeCount[index].textContent;
    })
});
