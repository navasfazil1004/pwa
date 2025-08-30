const songs = [
  { title: "Song 1", artist: "Artist A", file: "song1.mp3", cover: "cover1.png" },
  { title: "Song 2", artist: "Artist B", file: "song2.mp3", cover: "cover2.jpg" }
];

let songIndex = 0;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

function loadSong(index) {
  const song = songs[index];
  audio.src = "songs/" + song.file;
  cover.src = "covers/" + song.cover;
  title.textContent = song.title;
  artist.textContent = song.artist;
}

function playSong() {
  audio.play();
  playBtn.textContent = "⏸";
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶️";
}

playBtn.addEventListener("click", () => {
  audio.paused ? playSong() : pauseSong();
});

nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  playSong();
});

prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  playSong();
});

// Progress bar
audio.addEventListener("timeupdate", () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.value = progressPercent || 0;

  let currentMinutes = Math.floor(audio.currentTime / 60);
  let currentSeconds = Math.floor(audio.currentTime % 60);
  let durationMinutes = Math.floor(audio.duration / 60) || 0;
  let durationSeconds = Math.floor(audio.duration % 60) || 0;

  currentTimeEl.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, "0")}`;
  durationEl.textContent = `${durationMinutes}:${durationSeconds.toString().padStart(2, "0")}`;
});

// Seek functionality
progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

loadSong(songIndex);
