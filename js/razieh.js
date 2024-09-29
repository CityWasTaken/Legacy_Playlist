// Enhanced script.js

// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Sign In Button Interaction
    const signInBtn = document.getElementById('signInBtn');
    signInBtn.addEventListener('click', () => {
        alert('Sign In functionality will be available soon!');
    });

    // Navigation Button Highlight
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
        });
    });

    // Playlist Button Click Interaction
    const playlistButtons = document.querySelectorAll('.playlist-container button');
    playlistButtons.forEach(button => {
        button.addEventListener('click', () => {
            const playlistName = button.innerText.trim();
            alert(`Loading the ${playlistName} playlist!`);
            // Additional functionality to load the playlist can be added here
        });
    });

    // Dynamic Content Loading for Featured Songs
    loadFeaturedSongs();

    function loadFeaturedSongs() {
        // Example data, replace with a real API call if needed
        const featuredSongs = [
            { title: "What Was I Made for?", artist: "Billie Eilish" },
            { title: "You Belong With Me", artist: "Taylor Swift" },
            { title: "Blinding Lights", artist: "The Weeknd" },
        ];

        const songListContainer = document.querySelector('ul.song-list');
        if (songListContainer) {
            featuredSongs.forEach(song => {
                const songItem = document.createElement('li');
                songItem.innerHTML = `
                    <a href="song.html">${song.title}</a>
                    <p>${song.artist}</p>
                `;
                songListContainer.appendChild(songItem);
            });
        }
    }

    // Smooth Scrolling for Navigation Links (if necessary)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lazy Loading Images for Performance Improvement
    const lazyImages = document.querySelectorAll('img');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Use data-src for image source
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(image => {
        observer.observe(image);
    });

    // Add tooltips to buttons for better UX
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('span');
            tooltip.className = 'tooltip';
            tooltip.innerText = 'Click to explore!';
            button.appendChild(tooltip);
        });

        button.addEventListener('mouseleave', () => {
            const tooltip = button.querySelector('.tooltip');
            if (tooltip) tooltip.remove();
        });
    });
});






