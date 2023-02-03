const keys = document.getElementsByClassName('key');

let pressedKey;
document.addEventListener('keypress', (e) => {
    pressedKey = e.keyCode;
    const sound = document.querySelector(`audio[data-key="${pressedKey}"]`);
    const button = document.querySelector(`div[data-key="${pressedKey}"]`);
    if(!button){
        return;
    }
    button.classList.add('playing');
    sound.play();
    setTimeout(() => {
        sound.pause();
        sound.src = sound.src;
        button.classList.remove('playing');
    }, 150);
}); 