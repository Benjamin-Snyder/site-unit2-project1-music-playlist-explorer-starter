
let allButton = document.querySelector("#allButton");
allButton.addEventListener("click", function() {
    allButton.style.color = "blue";
    featuredButton.style.color = "black";
    window.location.href = "./index.html";
})


function setUpFeaturePage(){
    let randomPlaylist = playlists[Math.floor(Math.random() * playlists.length)];
    let bigFeatureImg = document.querySelector("#megaFeaturePhoto");
    bigFeatureImg.src = randomPlaylist.playlist_art;

        let playlistTitle = document.querySelector(".displayFeatureTitle h1");
        playlistTitle.textContent = randomPlaylist.playlist_name;

        let playlistAuthor= document.querySelector(".displayMaker h1");
        playlistAuthor.textContent = randomPlaylist.playlist_author;


        let songContainer = document.querySelector(".songDisplay");
        songContainer.innerHTML = ""; // clear the song container


        randomPlaylist.songs.forEach(song => {
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


document.addEventListener("DOMContentLoaded", function() {
    setUpFeaturePage();
});


