document.addEventListener('DOMContentLoaded', (event) => {

    const modal = document.getElementById("songModal");
    const openModalButton = document.getElementById("open-modal-btn");
    const closeButton = document.querySelector(".close-button");
    const songForm = document.getElementById("songForm");
    const songCardsContainer = document.getElementById("songCardsContainer");
    const resetButton = document.getElementById("reset-btn");

    
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

    function saveSong(songTitle, artist, genre) {
        const songs = JSON.parse(localStorage.getItem('songs')) || [];
        songs.push({ title: songTitle, artist: artist, genre: genre });
        localStorage.setItem('songs', JSON.stringify(songs));
    }

    function clearSongs() {
        localStorage.removeItem('songs');
        songCardsContainer.innerHTML = '';
    }

    openModalButton.onclick = function() {
        modal.style.display = "block";
    };

    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    songForm.onsubmit = function(event) {
        event.preventDefault();
        
        const songTitle = document.getElementById("songTitle").value;
        const artist = document.getElementById("artist").value;
        const genre = document.getElementById("genre").value;

        createSongCard(songTitle, artist, genre);

        saveSong(songTitle, artist, genre);

        songForm.reset();

        modal.style.display = "none";
    };

    resetButton.onclick = function() {
        clearSongs();
    }

    loadSongs();
});