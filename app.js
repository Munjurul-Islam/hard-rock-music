const searchSong = () => {
    const searchText = document.getElementById('search-text').value;
    // console.log(searchText)
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => songNames(data.data))
}

const songNames = songs => {
    const displayResult = document.getElementById('search-result');
    displayResult.innerHTML = '';
    songs.forEach(song => {
        // console.log(song)
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3';
        songDiv.innerHTML = `
            <div class="col-md-9">
                <h3 class="lyrics-name">${song.title}</h3>
                <p class="author lead">Album by <span>${song.artist.name}</span></p>
                <audio controls>
                    <source src="${song.preview}" type="audio/mpeg">
                </audio>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button onclick="getLyrics('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
            </div>
    `;
    displayResult.appendChild(songDiv)
    });
}

const getLyrics = (artist, title) => {
    // console.log(artist, title)
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayLyrics(data.lyrics))
}
const displayLyrics = lyrics => {
    const Lyrics = document.getElementById('display-lyrics');
    Lyrics.innerText = '';
    const LyricsDiv = document.createElement('div');
    LyricsDiv.innerText = (lyrics);
    Lyrics.appendChild(LyricsDiv);

}

