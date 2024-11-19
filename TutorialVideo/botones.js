var video = document.getElementById("myVideo");

var bin = document.getElementById("rvideo");

var videotitle = document.getElementById("titulo");
var soundBin = document.getElementById("rsonido");
var soundImg = document.getElementById("soundImg");

function pauseado(){
    if (video.paused) {
        video.play();
        bin.innerHTML = "Pause";
    }else {
        video.pause();
        bin.innerHTML="Play";
    }
}

function muteado(){
    if (video.muted) {
        video.muted = false;
        soundImg.src="multimedia/muted.png";
        soundImg.alt = "sound on";
    }else{
        video.muted = true;
        soundImg.src="multimedia/sound.png";
        soundImg.alt="sound of";
    }
}
const video2 = document.getElementById('vidio');
const playPauseBtn = document.getElementById('playPauseBtn');
const subtitleBtn = document.getElementById('subtitleBtn');
const subtitleTrack = document.getElementById('subtitleTrack');

function togglePlayPause() {
    if (video2.paused) {
        video2.play();
        playPauseBtn.textContent = "Pausar";
    } else {
        video2.pause();
        playPauseBtn.textContent = "Reproducir";
    }
}


playPauseBtn.addEventListener('click', togglePlayPause);
subtitleBtn.addEventListener('click', toggleSubtitles);