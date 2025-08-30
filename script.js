const songs = [
  { title: "Song 1", file: "song1.mp3", cover: "cover1.png" },
  { title: "Song 2", file: "song2.mp3", cover: "cover2.jpg" }
];

let songIndex = 0;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const cover = document.getElementById("cover");
const title = document.getElementById("title");

function loadSong(index) {
  audio.src = "songs/" + songs[index].file;
  cover.src = "covers/" + songs[index].cover;
  title.textContent = songs[index].title;
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
});

nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  audio.play();
  playBtn.textContent = "⏸";
});

prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  audio.play();
  playBtn.textContent = "⏸";
});

loadSong(songIndex);
