console.log("Welcome to INV music");

let songIndex = 0;
let audioElement = new Audio("song/5_fair_trade.mp3");
let masterPlay = document.getElementById("masterPlay");
let masterPrevious = document.getElementById("masterPrevious");
let masterNext = document.getElementById("masterNext");
let progressBar = document.getElementById("myProgressBar");
let songItem = Array.from(document.getElementsByClassName("song_item"));
let singlePlay = document.getElementsByClassName("fa-circle-play");
let gif = document.getElementById("gif");

// audioElement.play();

let songs = [
    {songName: "one dance", filePath: "song/1_one_dance.mp3", coverPath :"song banners/1_one_dance.jpg"},
    {songName: "jimmy cooks", filePath: "song/2_jimmy_cooks.mp3", coverPath :"song banners/2_jimmy_cooks.jpg"},
    {songName: "wait for you", filePath: "song/3_wait_for_you.mp3", coverPath :"song banners/3_wait_for_you.png"},
    {songName: "god's plan", filePath: "song/4_gods_plan.mp3", coverPath :"song banners/4_gods_plan.jpg"},
    {songName: "fair trade", filePath: "song/5_fair_trade.mp3", coverPath :"song banners/5_fair_trade.jpg"},
    {songName: "hotline bling", filePath: "song/6_hotline_bling.mp3", coverPath :"song banners/6_hotline_bling.png"},
    {songName: "laugh now cry later", filePath: "song/7_laugh_now_cry_later.mp3", coverPath :"song banners/7_laugh_now_cry_later.jpg"},
    {songName: "life is good", filePath: "song/8_life_is_good.mp3", coverPath :"song banners/8_life_is_good.jpg"},
    {songName: "popstar", filePath: "song/9_popstar.mp3", coverPath :"song banners/9_popstar.jpg"},
    {songName: "bad bunny", filePath: "song/10_bad_bunny.mp3", coverPath :"song banners/10_bad_bunny.jpg"}
]




// PLAY / PAUSE BY MASTER PLAY BUTTON
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})

// NEXT / PREVIOUS BY MASTER PLAY BUTTON
// masterPrevious.addEventListener("click", ()=>{
//     audioElement.previousSibling();
// })


// UPDATING SEEKBAR ACCORDING TO TIME SONG PLAYED
audioElement.addEventListener("timeupdate", ()=>{
    let progress = ((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})
progressBar.addEventListener("change", ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})

// CHANGING SONGS NAME WHILE CHAINGING THE SONG
songItem.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

// INDIVIDUAL PLAY / PAUSE OF SONGS
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `song/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    })
})