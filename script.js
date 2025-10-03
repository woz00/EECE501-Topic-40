const video = document.getElementById('myVideo');

// Example: Play video automatically after 1 second
setTimeout(() => {
    video.play();
}, 1000);

// Example: Alert when video ends
video.addEventListener('ended', () => {
    alert('Video has ended!');
});

