const modal = document.getElementById("songModal");
const openModalButton = document.getElementById("open-modal-btn");
const closeButton = document.querySelector(".close-button");
const songForm = document.getElementById("songForm");
const songCardsContainer = document.getElementById("songCardsContainer");
const resetButton = document.getElementById("reset-btn");

function createSongCard(imageLink, songTitle, artist, genre) {
    const songCard = document.createElement("div");
    songCard.className = "col-1 card";
    songCard.style.width = "18rem";
    songCard.innerHTML = `
        <img src="${imageLink}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text"><strong>Title:</strong> ${songTitle}</p>
            <p class="card-text"><strong>Artist:</strong> ${artist}</p>
            <p class="card-text"><strong>Genre:</strong> ${genre}</p>
        </div>
    `;
    document.getElementById("songCardsContainer").appendChild(songCard);
}

function loadSongs() {
    const songs = JSON.parse(localStorage.getItem('songs')) || [];
    songs.forEach(song => {
        createSongCard(song.imageLink, song.title, song.artist, song.genre);
    });
}

function saveSong(imageLink, songTitle, artist, genre) {
    const songs = JSON.parse(localStorage.getItem('songs')) || [];
    songs.push({ imageLink: imageLink, title: songTitle, artist: artist, genre: genre });
    localStorage.setItem('songs', JSON.stringify(songs));
}

function clearSongs() {
    localStorage.removeItem('songs');
    document.getElementById("songCardsContainer").innerHTML = '';
}

openModalButton.addEventListener('click', function() {
    modal.style.display = "block";
});

closeButton.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

songForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const imageLink = document.getElementById("imageLink").value;
    const songTitle = document.getElementById("songTitle").value;
    const artist = document.getElementById("artist").value;
    const genre = document.getElementById("genre").value;

    createSongCard(imageLink, songTitle, artist, genre);

    saveSong(imageLink, songTitle, artist, genre);

    songForm.reset();

    modal.style.display = "none";
});

resetButton.addEventListener('click', function() {
    clearSongs();
});

loadSongs();

document.addEventListener('DOMContentLoaded', (event) => {
    // Nothing to do here, everything is already set up
});