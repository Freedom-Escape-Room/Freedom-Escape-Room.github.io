(function() {
    // Avoid multiple instances
    if (window.__bgMusicInitialized) return;
    window.__bgMusicInitialized = true;

    // Create the audio element
    const audio = document.createElement('audio');
    audio.src = './../../music/the_mountain-epic.mp3';
    audio.loop = true;
    audio.autoplay = true;
    audio.hidden = true;
    audio.id = 'bgmusic';
    document.body.appendChild(audio);

    // Attempt to play automatically (may need user interaction on some browsers)
    audio.play().catch(() => {
        console.log('Autoplay blocked. Music will play on first user interaction.');
        const playOnInteraction = () => {
            audio.play();
            window.removeEventListener('click', playOnInteraction);
            window.removeEventListener('keydown', playOnInteraction);
        };
        window.addEventListener('click', playOnInteraction);
        window.addEventListener('keydown', playOnInteraction);
    });
})();
