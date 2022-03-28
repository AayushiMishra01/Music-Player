const music = document.querySelector("audio");
const image = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const previous = document.getElementById("previous");
const next = document.getElementById("next");



const songs=[
{
 name:"S1",
 title:"RAATAAN LAMBIYAN",
 artist:"Jubin Nutiyal",
},
{
 name:"S2",
 title:"Sakhiyan 2.0",
 artist:"Maninder Buttar"
},
{
 name:"S3",
 title:"o Saki Saki Ree",
 artist:"Neha Kakkar"
},
];


let isPlaying = false;
/*for play functionality*/

const playMusic = () => {
    music.play();
    isPlaying = true;
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
};

/*for pause functionality*/

const pauseMusic = () => {
    music.pause();
    isPlaying = false;
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};


play.addEventListener("click",() => {
   // if(isPlaying){
     //   pauseMusic();}
    //else{  playMusic();}

    isPlaying ? pauseMusic() : playMusic();
});

//changing the music data
const loadSong = () => {
    title.textContent = songs[songIndex].title;
    artist.textContent = songs[songIndex].artist;
    music.src =  "S"+(songIndex+1) + ".mp3";
    image.src = "song"+(songIndex+1)+ ".jpg";
};

let songIndex = 2;
//loadSong(songs[1]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1  + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener('click',nextSong);
prev.addEventListener("click",prevSong);