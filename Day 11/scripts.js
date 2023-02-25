const playBtn = document.querySelector('.player__button.toggle'),
video = document.querySelector('.player__video.viewer'),
playbackRate = document.querySelector('[name=playbackRate]'),
volume = document.querySelector('[name=volume]'),
skipVideo = document.querySelectorAll('[data-skip]'),
progress = document.querySelector('.progress__filled');
let isPlaying = false, seekProgress=0;

progress.style = `flex-basis: ${seekProgress}%;`;

const playPause = () => {
    if(isPlaying){
        video.pause();
        isPlaying = false;
        playBtn.textContent = '►';
    }
    else{
        video.play();
        isPlaying = true;
        playBtn.textContent = '||';
    }
}

playBtn.addEventListener('click', (e) => {
    playPause();
});

video.addEventListener('click', (e) => {
    playPause();
});

volume.addEventListener('change', (e) => {
    video.volume = e.target.value;
});

playbackRate.addEventListener('change', (e) => {
    video.playbackRate = e.target.value;
});

for(let el of skipVideo){
    el.addEventListener('click', (e) => {
        video.currentTime  += parseInt(e.target.getAttribute('data-skip'));
        seekProgress = (video.currentTime / video.duration ) * 100;
    });
}

setInterval(() => {
    if(isPlaying){
        seekProgress = (video.currentTime / video.duration ) * 100;
        progress.style = `flex-basis: ${seekProgress}%;`;
    }
}, 1000);
