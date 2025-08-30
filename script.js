const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const trackTitle = document.getElementById("track");

const songs = ["song1.mp3", "song2.mp3"];
let songIndex = 0;

function loadSong(index) {
  audio.src = "songs/" + songs[index];
  trackTitle.textContent = "Now Playing: " + songs[index];
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸ Pause";
  } else {
    audio.pause();
    playBtn.textContent = "▶️ Play";
  }
});

nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  audio.play();
  playBtn.textContent = "⏸ Pause";
});

prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  audio.play();
  playBtn.textContent = "⏸ Pause";
});

// Load first song on start
loadSong(songIndex);
