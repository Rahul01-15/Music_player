const songs = [
  {
    title: "Song 1",
    author: "Artist 1",
    src: "song1.mp3",
    img: "cover1.jpg",
  },
  {
    title: "Song 2",
    author: "Artist 2",
    src: "song2.mp3",
    img: "cover2.jpg",
  },
];

let currentSongIndex = 0;
const audio = new Audio(songs[currentSongIndex].src);

const player = document.getElementById("player");
const playPauseButton = document.getElementById("play");
const playIcon = document.getElementById("playIcon");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const songTitle = document.getElementById("title");
const songAuthor = document.getElementById("author");
const songCover = document.getElementById("cover");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

document.getElementById("play").addEventListener("click", playPause);
document.getElementById("nextButton").addEventListener("click", nextSong);
document.getElementById("prevButton").addEventListener("click", prevSong);
audio.addEventListener("timeupdate", updateProgressBar);

function playPause() {

    if (audio.paused) {
        audio.play();
        playIcon.src = "resources/Stop_and_play_fill-1.svg";
        console.log("Playing audio");
    } else {
        audio.pause();
        
        playIcon.src = "resources/Stop_and_play_fill.svg";
        console.log("Plause audio");
    }
}

function nextSong() {
  // Add next button implementation
}

function prevSong() {
  // Add previous button implementation
}

function loadSong(index) {
  // Add load song implementation
}

function updateProgressBar() {
  // Handle when progress bar is updated
}

document.getElementById("progressBar").addEventListener("input", function () {
  audio.currentTime = (this.value / 100) * audio.duration;
});

// Initial load
loadSong(currentSongIndex);
