import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic'
  });
  const video = document.getElementById('bg-video');
  video.addEventListener('loadedmetadata',  event => {
    const contentHeight = document.body.clientHeight;
    let scrollFire = 0;
    video.pause()

    const updateVideo = () => {
      let scallY = contentHeight - window.screen.height;
      let newTime = (window.scrollY / scallY) * video.duration;
      video.currentTime = Math.max(0, Math.min(newTime, video.duration-0.01));
    };

    video.addEventListener('loadeddata', () => {
      video.panse();
      updateVideo();
      AOS.refresh();
    });

    window.addEventListener('scroll', () => {
      if (Date.now() >= scrollFire + 100) {
        scrollFire = Date.now();
        updateVideo();
      }
    });
  });
});


