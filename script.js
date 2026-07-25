const musicContainer = document.getElementById("s-container");
const reloadButton = document.getElementById("reloadButton");

const musics = [
    {"Song": "Burger", "Artist": "bbno$", "Id": "3UbEemDEz6b6l5EBiswULJ"},
    {"Song": "Bad", "Artist": "Michael Jackson", "Id": "2gSNBigeWMVtY3QBIvPAEc"},
    {"Song": "My Own Worst Enemy", "Artist": "Lit", "Id": "33iv3wnGMrrDugd7GBso1z"},
    {"Song": "No One Knows", "Artist": "Queen Of The Stone Age", "Id": "6y20BV5L33R8YXM0YuI38N"},
    {"Song": "Tropa De Elite", "Artist": "Tihuana", "Id": "0KuDeGUXh5QQ7gSiB6KGPh"},
    {"Song": "Last Resort", "Artist": "Papa Roach", "Id": "5W8YXBz9MTIDyrpYaCg2Ky"},
    {"Song": "Too Far Gone?", "Artist": "Metallica", "Id": "2ZPnedMaS4W1de05Xz18hF"},
    {"Song": "diamons are forever", "Artist": "bbno$", "Id": "1VAtSBqecE1fIfxYikIHUG"},
    {"Song": "why am i like this", "Artist": "bbno$", "Id": "3gE5o0qeyamJePqYcPgYcJ"},
    {"Song": "boom", "Artist": "bbno$", "Id": "6zhyXTuRkMSabSHvmMchpp"},
    {"Song": "Bleed My Dry", "Artist": "Eletric Enemy", "Id": "38dlwEGXjjuGPex5UNPHtL"},
    {"Song": "Trash Metal Cassette", "Artist": "Dinosaur Pile-Up", "Id": "2NSw8SOcQ6EVLf1QZFMH1h"},
    {"Song": "antidepressants", "Artist": "bbno$", "Id": "6rWLrj4M3PDu6XpgjY7vAU"},
    {"Song": "It Doesn't Matter", "Artist": "Tony Harnell", "Id": "1usKJe8pQtica7acXDZ8nt"},
    {"Song": "bing bong", "Artist": "bbno$", "Id": "0nwygFtUBQiDA9iFIrZGR9"},
    {"Song": "come to brazil", "Artist": "bbno$", "Id": "6n7Dyz4hcykM6lV3Z8wckw"},
    {"Song": "You Give Love A Bad Name", "Artist": "Bon Jovi", "Id": "0rmGAIH9LNJewFw7nKzZnc"},
    {"Song": "round and round", "Artist": "bbno$", "Id": "4uW97EdIlhNzUS5QUltXMH"},
    {"Song": "Galvanize", "Artist": "The Chemical Brothers", "Id": "4bz7uB4edifWKJXSDxwHcs"},
    {"Song": "Where Evil Grows", "Artist": "The poppy Family", "Id": "3w56u6nrL0K1YYpinkfTeP"},
    {"Song": "Teenagers", "Artist": "My Chemical Romance", "Id": "7j31rVgGX9Q2blT92VBEA0"},
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
