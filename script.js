console.log("Welcome to spotify");

let songIndex = 0;
let audioElement = new Audio("audio/0.mp3");
let masterPlay = document.getElementById("masterPlay");
let masterSongInfo = document.getElementById("masterSongInfo");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songs = [
  {
    songName: "Aayat-Arijit Singh",
    filePath: "audio/0.mp3",
    coverPath: "img1/1.jpg",
  },
  {
    songName: "Atak Gaya-Arijit Singh",
    filePath: "audio/1.mp3",
    coverPath: "img1/2.jpg",
  },
  {
    songName: "Raanjhana-Arijit Singh",
    filePath: "audio/2.mp3",
    coverPath: "img1/3.jpg",
  },
  {
    songName: "Hum Nashe Mian toh Nahin-Arijit Singh",
    filePath: "audio/3.mp3",
    coverPath: "img1/4.jpg",
  },
  { songName: "illahi-Arijit Singh", filePath: "audio/4.mp3", coverPath: "img1/5.jpg" },
  {
    songName: "Laal Ishq-Arijit Singh",
    filePath: "audio/5.mp3",
    coverPath: "img1/6.jpg",
  },
];

Array.from(document.querySelectorAll(".songItem")).forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.querySelectorAll(".songeName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      gif.style.opacity = 1;
      Array.from(document.getElementsByClassName("songItemPlay"))[
        `${songIndex}`
    ].classList.remove("fa-circle-play");
      Array.from(document.getElementsByClassName("songItemPlay"))[
        `${songIndex}`
    ].classList.add("fa-circle-pause");
  
    } else {
      audioElement.pause();
      masterPlay.classList.remove("fa-circle-pause");
      masterPlay.classList.add("fa-circle-play");
      gif.style.opacity = 0;
      Array.from(document.getElementsByClassName("songItemPlay"))[
          `${songIndex}`
      ].classList.remove("fa-circle-pause");
      Array.from(document.getElementsByClassName("songItemPlay"))[
          `${songIndex}`
      ].classList.add("fa-circle-play");
    }
  });

audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
  1;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};
const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach(
    (element) => {
      element.style.background ="rgba(34, 34, 34, 0.474)";
      element.style.color ="#fff";
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `audio/${songIndex}.mp3`;
      masterSongInfo.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      gif.style.opacity = 1;
      makeAllBackground();
      Array.from(document.getElementsByClassName("songItem"))[
        `${songIndex}`
      ].style.background="rgba(202, 199, 199, 0.54) none repeat scroll 0% 0%";
      Array.from(document.getElementsByClassName("songItem"))[
        `${songIndex }`
      ].style.color="#222";
     
    });
  }
);


document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `audio/${songIndex}.mp3`;
  masterSongInfo.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  gif.style.opacity = 1;
});
document.getElementById("previos").addEventListener("click", () => {
  if (songIndex < 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `audio/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  masterSongInfo.innerText = songs[songIndex].songName;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  gif.style.opacity = 1;
});
