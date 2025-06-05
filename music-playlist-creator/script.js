
let boxes = document.querySelectorAll(".box");
let popupElem = document.querySelector("#greyBox");
let closeBtn = document.querySelector(".close-btn");
let boxIndex;

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
        boxIndex = index;
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


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


let shuffles = document.querySelectorAll(".shuffleButton");
shuffles.forEach((shuffle, index) => {
    shuffle.addEventListener("click", function() {
        // Update the song display
        let songContainer = document.querySelector(".songDisplay");
        songContainer.innerHTML = ""; // Clear the song container

        shuffleArray(playlists[boxIndex].songs);
        console.log(boxIndex);

        playlists[boxIndex].songs.forEach(song => {
            let temp = document.createElement("div");
            temp.classList.add("eachSong");

            let songImg = document.createElement("img");
            songImg.src = song.albumCover;

            let songInfo = document.createElement("div");
            songInfo.classList.add("eachSongWords");

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
        });
    })
})




let featuredButton = document.querySelector("#featureButton");
let allButton = document.querySelector("#allButton");



featuredButton.addEventListener("click", function() {
    featuredButton.style.color = "blue";
    allButton.style.color = "black";
    window.location.href = "./featured.html";
})
