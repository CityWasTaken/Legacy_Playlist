const songCardsContainer = document.getElementById("songCardsContainer");

function createSongCard(songTitle, artist, genre) {
    const songCard = document.createElement("div");
    songCard.className = "col-1 card";
    songCard.style.width = "18rem";
    songCard.innerHTML = `
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text"><strong>Title:</strong> ${songTitle}</p>
            <p class="card-text"><strong>Artist:</strong> ${artist}</p>
            <p class="card-text"><strong>Genre:</strong> ${genre}</p>
        </div>
    `;
    songCardsContainer.appendChild(songCard);
}

function loadSongs() {
    const songs = JSON.parse(localStorage.getItem('songs')) || [];
    songs.forEach(song => {
        createSongCard(song.title, song.artist, song.genre);
    });
}

loadSongs();