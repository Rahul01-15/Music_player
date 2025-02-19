const songs = [
  {
    title: "Forest lullaby",
    author: "lesm",
    src: "resources/forest-lullaby-110624.mp3",
    img: "resources/cover-1.jpg",
  },
  {
    title: "lost in the city lights",
    author: "Artist 2",
    src: "/resources/lost-in-city-lights-145038.mp3",
    img: "resources/cover-2.jpg",
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
document.getElementById("next").addEventListener("click", nextSong);
document.getElementById("prev").addEventListener("click", prevSong);
audio.addEventListener("progressBar", updateProgressBar);
audio.addEventListener("timeupdate", updateProgressBar);

function playPause() {

    if (audio.paused) {
        audio.play();
        playIcon.src = "resources/pause-fill.svg";
       
    } else {
        audio.pause();
        playIcon.src = "resources/Play_fill.svg";
       
    }
}

function nextSong() {
  // Add next button implementation
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playIcon.src = "resources/pause-fill.svg";
  
}

function prevSong() {
  // Add previous button implementation
  currentSongIndex = (currentSongIndex - 1+songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playIcon.src = "resources/pause-fill.svg";
  
}

function loadSong(index) {
  // Add load song implementation
  audio.src = songs[index].src;
  songTitle.innerText= songs[index].title;
  songAuthor.innerText= songs[index].author;
  songCover.src = songs[index].img;
  audio.pause();

}

function updateProgressBar() {
  // Handle when progress bar is updated
  if (audio.duration) {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    currentTimeEl.innerText = formatTime(audio.currentTime);
    durationEl.innerText = formatTime(audio.duration);
    progressBar.style.background = `linear-gradient(to right, #C93B76 ${progressBar.value}%, #fff ${progressBar.value}%)`;
  }

    
    
}

document.getElementById("progressBar").addEventListener("input", function () {
  audio.currentTime = (this.value / 100) * audio.duration;
  
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}


// Initial load
loadSong(currentSongIndex);
