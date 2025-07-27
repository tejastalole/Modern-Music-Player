const audio = document.getElementById('audio');
const progressBar = document.getElementById('progressBar');
const progressThumb = document.getElementById('progressThumb');
const progressContainer = document.getElementById('progressContainer');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶';
    }
});

audio.addEventListener('timeupdate', () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});
