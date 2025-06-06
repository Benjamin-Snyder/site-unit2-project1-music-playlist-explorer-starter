let boxes = document.querySelectorAll(".box");
let popupElem = document.querySelector("#greyBox");
let closeBtn = document.querySelector(".close-btn");
let boxIndex;


document.addEventListener("DOMContentLoaded", function() {
    importAlbums(playlists);
    setFeaturedListener();
    setShuffleListener();
    setLikeCountListener();
    setPopupListener();
    setDeleteListener();
    setSortListeners();
    setAddPlaylistListener()
    setAddPlaylistButtonListener();
    setSearchListener();
    setSearchClearListener();
    setEditListener();
});



//boxes can be indexed
//playlists can be indexed
function importAlbums([playlist]){

    let boxImg = document.querySelectorAll(".box img");
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





/*
function testAdd(){
    addPlaylist("TEst", "BEn", "./assets/img/free-photo-of-barbary-macaque-on-the-rock-of-gibraltar.jpeg",[
        {
        songName: "Juicy",
        artist: "The Notorious B.I.G.",
        duration: "5:02",
        albumCover: "./assets/img/free-photo-of-plants-in-pots-by-the-window.jpeg"
        },
        {
        songName: "Nuthin' But A 'G' Thang",
        artist: "Dr. Dre",
        duration: "4:01",
        albumCover: "./assets/img/free-photo-of-rustic-bread-and-fruit-on-a-dining-table.jpeg"
        }])
}
*/

function setAddPlaylistListener(){
    let button = document.getElementById("addPlaylistButton");
    let popup = document.getElementById("addPopup");
    button.addEventListener("click", function(){
        popup.classList.toggle("hide");

    })
}




/*
function addPlaylistExtra(playlist_name, playlist_author, playlist_art, songs, playlistID, likeCount, dateAdded) {
    let newPlaylist = {
        playlist_name: playlist_name,
        playlist_author: playlist_author,
        playlist_art: playlist_art,
        likeCount: likeCount,
        dateAdded: dateAdded,
        playlistID: playlistID,
        songs: songs
    };

    playlists.push(newPlaylist);

    // Im a big idiot and made the way the albums are initally imported poorly so I have to manullary add a new one
    const albumContainer = document.querySelector(".albums");

    const article = document.createElement("article");
    article.classList.add("playlistFromHome");

    const box = document.createElement("div");
    box.classList.add("box");

    const img = document.createElement("img");
    img.src = newPlaylist.playlist_art;
    img.alt = "playlistPhoto";
    img.width = 250;
    img.classList.add("imgHome");

    const title = document.createElement("h3");
    title.textContent = newPlaylist.playlist_name;

    const author = document.createElement("h4");
    author.textContent = newPlaylist.playlist_author;

    const bottomPortion = document.createElement("div");
    bottomPortion.classList.add("bottomPortion");

    const deleteList = document.createElement("div");
    deleteList.classList.add("deleteList");
    const deleteIcon = document.createElement("h2");
    deleteIcon.textContent = "🗑️";
    deleteList.appendChild(deleteIcon);

    const likeCount = document.createElement("div");
    likeCount.classList.add("likeCount");
    const heart = document.createElement("p");
    heart.classList.add("heart", "noLike");
    heart.textContent = "🖤";
    const count = document.createElement("p");
    count.classList.add("count");
    count.textContent = newPlaylist.likeCount;
    likeCount.appendChild(heart);
    likeCount.appendChild(count);

    bottomPortion.appendChild(deleteList);
    bottomPortion.appendChild(likeCount);

    const id = document.createElement("p");
    id.classList.add("ID");
    id.textContent = newPlaylist.playlistID;

    box.appendChild(img);
    box.appendChild(title);
    box.appendChild(author);
    box.appendChild(bottomPortion);
    box.appendChild(id);

    article.appendChild(box);
    albumContainer.appendChild(article);

    // Attach event listeners to the new elements
    deleteIcon.addEventListener("click", function(event) {
        event.stopPropagation();
        box.remove();
    });

    heart.addEventListener("click", function() {
        if (heart.classList.contains("noLike")) {
            heart.textContent = "❤️";
            heart.classList.remove("noLike");
            heart.classList.add("liked");
            count.textContent = parseInt(count.textContent) + 1;
        } else {
            heart.textContent = "🖤";
            heart.classList.remove("liked");
            heart.classList.add("noLike");
            count.textContent = parseInt(count.textContent) - 1;
        }
        newPlaylist.likeCount = count.textContent;
    });

    box.addEventListener("click", function(event) {
        if (!(event.target.classList.contains("heart")) && !(event.target.closest(".deleteList"))) {
            popupElem.classList.toggle("hide");
            let bigImg = document.querySelector("#megaPhoto");
            bigImg.src = box.querySelector("img").src;

            let playlistTitle = document.querySelector(".displayTitle h1");
            playlistTitle.textContent = newPlaylist.playlist_name;

            let playlistAuthor = document.querySelector(".displayMaker h1");
            playlistAuthor.textContent = newPlaylist.playlist_author;

            let songContainer = document.querySelector(".songDisplay");
            songContainer.innerHTML = ""; // clear the song container

            newPlaylist.songs.forEach(song => {
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
        }
    });
}
*/

function addPlaylist(playlist_name, playlist_author, playlist_art, songs) {
    let newPlaylist = {
        playlist_name: playlist_name,
        playlist_author: playlist_author,
        playlist_art: playlist_art,
        likeCount: 0,
        dateAdded: new Date().toISOString().split('T')[0],
        playlistID: playlists.length + 1,
        songs: songs
    };

    playlists.push(newPlaylist);

    // Im a big idiot and made the way the albums are initally imported poorly so I have to manullary add a new one
    const albumContainer = document.querySelector(".albums");

    const article = document.createElement("article");
    article.classList.add("playlistFromHome");

    const box = document.createElement("div");
    box.classList.add("box");

    const img = document.createElement("img");
    img.src = newPlaylist.playlist_art;
    img.alt = "playlistPhoto";
    img.width = 250;
    img.classList.add("imgHome");

    const title = document.createElement("h3");
    title.textContent = newPlaylist.playlist_name;

    const author = document.createElement("h4");
    author.textContent = newPlaylist.playlist_author;

    const bottomPortion = document.createElement("div");
    bottomPortion.classList.add("bottomPortion");

    const deleteList = document.createElement("div");
    deleteList.classList.add("deleteList");
    const deleteIcon = document.createElement("h2");
    deleteIcon.textContent = "🗑️";
    deleteList.appendChild(deleteIcon);

    const likeCount = document.createElement("div");
    likeCount.classList.add("likeCount");
    const heart = document.createElement("p");
    heart.classList.add("heart", "noLike");
    heart.textContent = "🖤";
    const count = document.createElement("p");
    count.classList.add("count");
    count.textContent = newPlaylist.likeCount;
    likeCount.appendChild(heart);
    likeCount.appendChild(count);

    bottomPortion.appendChild(deleteList);
    bottomPortion.appendChild(likeCount);

    const id = document.createElement("p");
    id.classList.add("ID");
    id.textContent = newPlaylist.playlistID;

    box.appendChild(img);
    box.appendChild(title);
    box.appendChild(author);
    box.appendChild(bottomPortion);
    box.appendChild(id);

    article.appendChild(box);
    albumContainer.appendChild(article);

    // Attach event listeners to the new elements
    deleteIcon.addEventListener("click", function(event) {
        event.stopPropagation();
        box.remove();
    });

    heart.addEventListener("click", function() {
        if (heart.classList.contains("noLike")) {
            heart.textContent = "❤️";
            heart.classList.remove("noLike");
            heart.classList.add("liked");
            count.textContent = parseInt(count.textContent) + 1;
        } else {
            heart.textContent = "🖤";
            heart.classList.remove("liked");
            heart.classList.add("noLike");
            count.textContent = parseInt(count.textContent) - 1;
        }
        newPlaylist.likeCount = count.textContent;
    });

    box.addEventListener("click", function(event) {
        if (!(event.target.classList.contains("heart")) && !(event.target.closest(".deleteList"))) {
            popupElem.classList.toggle("hide");
            let bigImg = document.querySelector("#megaPhoto");
            bigImg.src = box.querySelector("img").src;

            let playlistTitle = document.querySelector(".displayTitle h1");
            playlistTitle.textContent = newPlaylist.playlist_name;

            let playlistAuthor = document.querySelector(".displayMaker h1");
            playlistAuthor.textContent = newPlaylist.playlist_author;

            let songContainer = document.querySelector(".songDisplay");
            songContainer.innerHTML = ""; // clear the song container

            newPlaylist.songs.forEach(song => {
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
        }
    });
}



function sortAZ(playlist){
    let sorted = playlist.sort((a,b) =>{
        if(a.playlist_name < b.playlist_name)return -1;
        if(a.playlist_name > b.playlist_name)return 1;
        return 0;
    });
    importAlbums(sorted);
}

function sortLikeCount(playlist){
    let sorted =  playlist.sort((a,b) => {
        if(a.likeCount < b.likeCount) return 1;
        if(a.likeCount > b.likeCount) return -1;
        return 0;
    })
    importAlbums(sorted);
}


function sortDate(playlist){
    let sorted = playlist.sort((a,b)=>{
        if(a.dateAdded < b.dateAdded) return 1;
        if(a.dateAdded > b.dateAdded) return -1;
        return 0;
    })
    importAlbums(sorted);
}


function setSortListeners(){
    let AZ = document.getElementById("AZ");
    let Likes = document.getElementById("Likes");
    let Age = document.getElementById("Age");

    AZ.addEventListener("click", function(){
        AZ.classList.add("selected");
        Likes.classList.remove("selected");
        Age.classList.remove("selected");
        sortAZ(playlists);
    })

    Likes.addEventListener("click", function(){
        Likes.classList.add("selected");
        AZ.classList.remove("selected");
        Age.classList.remove("selected");
        sortLikeCount(playlists);
    })

    Age.addEventListener("click", function(){
        Age.classList.add("selected");
        Likes.classList.remove("selected");
        AZ.classList.remove("selected");
        sortDate(playlists);
    })

}


function setDeleteListener() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        const deleteButton = box.querySelector(".deleteList h2");
        deleteButton.addEventListener("click", function(event) {
            event.stopPropagation();
            box.remove();
        });
    });
}



function setPopupListener() {
    boxes.forEach((box, index) => {
        box.addEventListener("click", function(event) {
            if (!(event.target.classList.contains("heart")) && !(event.target.closest(".deleteList"))) {
                popupElem.classList.toggle("hide");
                let bigImg = document.querySelector("#megaPhoto");
                bigImg.src = box.querySelector("img").src;

                let playlistTitle = document.querySelector(".displayTitle h1");
                playlistTitle.textContent = playlists[index].playlist_name;

                let playlistAuthor = document.querySelector(".displayMaker h1");
                playlistAuthor.textContent = playlists[index].playlist_author;

                let songContainer = document.querySelector(".songDisplay");
                songContainer.innerHTML = ""; // clear the song container

                playlists[index].songs.forEach(song => {
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
            }
        });
    });
    closeBtn.addEventListener("click", function() {
        popupElem.classList.toggle("hide");

        let songContainer = document.querySelector(".songDisplay");
        songContainer.innerHTML = ""; // clear the song container


    });
}


function setLikeCountListener(){
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

}



function setShuffleListener(){

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
}


function setFeaturedListener(){
    let featuredButton = document.querySelector("#featureButton");
    featuredButton.addEventListener("click", function() {
        featuredButton.style.color = "blue";
        allButton.style.color = "black";
        window.location.href = "./featured.html";
    })
}





function setAddPlaylistButtonListener() {
    let addPlaylistButton = document.querySelector(".addPlaylistButton button");
    let addSongButton = document.querySelector("#addSongButton");
    let songs = [];
    let popup = document.querySelector("#addPopup");

    addPlaylistButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        let albumName = document.querySelector("#pNameInput").value;
        let albumAuthor = document.querySelector("#aNameInput").value;
        let albumArt = document.querySelector("#pImgInput").files[0] ? URL.createObjectURL(document.querySelector("#pImgInput").files[0]) : '';

        addPlaylist(albumName, albumAuthor, albumArt, songs);
        popup.classList.toggle("hide");
    });

    addSongButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        let songName = document.querySelector("#sNameInput").value;
        let songArtist = document.querySelector("#sArtistInput").value;

        songs.push({
            songName: songName,
            artist: songArtist,
            duration: "4:15",
            albumCover: "./assets/img/free-photo-of-plants-in-pots-by-the-window.jpeg"
        });

        // Clear the input fields
        document.querySelector("#sNameInput").value = "";
        document.querySelector("#sArtistInput").value = "";
    });
}


function setSearchListener(){
    let searchButton = document.querySelector("#searchButton");
    let searchInput = document.querySelector("#searchBar input");

    searchButton.addEventListener("click", function(event){
        event.preventDefault(); // Prevent default form submission
        let term = document.querySelector("#searchBar input").value;
        importAlbums(playlists);
        searchSong(term);
    })

    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent default form submission
            let term = document.querySelector("#searchBar input").value;
            importAlbums(playlists);
            searchSong(term);
        }
    });
}

function setEditListener() {
    let buttons = document.querySelectorAll(".editButton");
    let boxes = document.querySelectorAll(".box");

    buttons.forEach((button, index) => {
        button.addEventListener("click", function(event) {
            event.stopPropagation();

            let box = boxes[index];
            let titleElement = box.querySelector("h3");
            let authorElement = box.querySelector("h4");

            let titleInput = document.createElement("input");
            titleInput.type = "text";
            titleInput.value = titleElement.textContent;
            titleInput.placeholder = "Enter Playlist Name";

            let authorInput = document.createElement("input");
            authorInput.type = "text";
            authorInput.value = authorElement.textContent;
            authorInput.placeholder = "Enter Author Name";

            titleElement.replaceWith(titleInput);
            authorElement.replaceWith(authorInput);

            titleInput.focus();


            titleInput.addEventListener("keydown", function(event) {
                if (event.key === "Enter") {
                    updateTitleAndAuthor(titleInput, authorInput, titleElement, authorElement, index);
                }
            });

            authorInput.addEventListener("keydown", function(event) {
                if (event.key === "Enter") {
                    updateTitleAndAuthor(titleInput, authorInput, titleElement, authorElement, index);
                }
            });
        });
    });
}

function updateTitleAndAuthor(titleInput, authorInput, titleElement, authorElement, index) {
    titleElement.textContent = titleInput.value;
    authorElement.textContent = authorInput.value;
    titleInput.replaceWith(titleElement);
    authorInput.replaceWith(authorElement);
    playlists[index].playlist_name = titleInput.value;
    playlists[index].playlist_author = authorInput.value;
}






function searchSong(term) {
    let boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        let boxName = box.querySelector("h3").textContent;
        let boxArtist = box.querySelector("h4").textContent;

        if (boxName.toLowerCase().includes(term.toLowerCase()) || boxArtist.toLowerCase().includes(term.toLowerCase())) {
        }
        else{
            box.remove();
        }
    })
}

function setSearchClearListener(){
    let clearButton = document.querySelector("#clearButton");

    clearButton.addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector("#searchBar input").value = "";
        window.location.reload();

    })
}
