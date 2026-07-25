const musicContainer = document.getElementById("s-container");
const reloadButton = document.getElementById("reloadButton");

const musics = [
    {"Song": "Burger", "Artist": "bbno$", "Id": "3UbEemDEz6b6l5EBiswULJ"},
    {"Song": "Bad", "Artist": "Michael Jackson", "Id": "2gSNBigeWMVtY3QBIvPAEc"}
]

function getRandomMusicData() {
    const songLen = musics.length;

    return musics[Math.floor(Math.random() * songLen)];
}

function showMusic(data) {
    
    const content = `
        <iframe class="song-frame" data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/${data.Id}" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

        <div class="song-data">
            <p class="title">${data.Song}</p>
            <p class="singer">${data.Artist}</p>
        </div>
    `;

    musicContainer.innerHTML = content;
}

function load() {
    const data = getRandomMusicData();

    showMusic(data);
}

load();
reloadButton.addEventListener("click", load);