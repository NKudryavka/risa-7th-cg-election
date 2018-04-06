
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('bg-video');
  video.addEventListener('loadedmetadata',  event => {
    const contentHeight = document.body.clientHeight;
    let scrollFire = 0;
    video.pause()

    let updateVideo = () => {
      let scallY = contentHeight - window.screen.height;
      let newTime = (window.scrollY / scallY) * video.duration;
      video.currentTime = Math.max(0, Math.min(newTime, video.duration-0.01));
    };

    video.addEventListener('loadeddata', updateVideo);

    window.addEventListener('scroll', () => {
      if (Date.now() >= scrollFire + 100) {
        scrollFire = Date.now();
        updateVideo();
      }
    });
  });
});


