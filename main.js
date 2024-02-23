const playBtn = document.querySelector(".play")
const pauseBtn = document.querySelector(".pause")
const stopBtn = document.querySelector(".stop")
const audio = document.querySelector("audio");

const audioContext = new AudioContext();
const source = audioContext.createMediaElementSource(audio)

source.connect(audioContext.destination)

playBtn.addEventListener("click", () => {
    if(audioContext.state === "suspended") {
        audioContext.resume()
    }
audio.play()
})

pauseBtn.addEventListener("click", () => {
    audio.pause();
});

stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
});

