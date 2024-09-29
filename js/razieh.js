


document.addEventListener('DOMContentLoaded', () => {
   
    const signInBtn = document.getElementById('signInBtn');
    signInBtn.addEventListener('click', () => {
        alert('Sign In functionality will be available soon!');
    });

  
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
           
            navButtons.forEach(btn => btn.classList.remove('active'));
       
            button.classList.add('active');
        });
    });

   
    const playlistButtons = document.querySelectorAll('.playlist-container button');
    playlistButtons.forEach(button => {
        button.addEventListener('click', () => {
            const playlistName = button.innerText.trim();
            alert(`Loading the ${playlistName} playlist!`);
       
        });
    });

  
    loadFeaturedSongs();

    function loadFeaturedSongs() {
       
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

  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

 
    const lazyImages = document.querySelectorAll('img');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; 
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(image => {
        observer.observe(image);
    });

   
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






