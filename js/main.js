const text = document.querySelectorAll('span');
const videoPlay = document.querySelector('video');

videoPlay.addEventListener('timeupdate', () => {

    const currentVideo = videoPlay.currentTime;
    for (let i = 0, s = text.length; i < s; i++) {
      if (currentVideo >= +text[i].getAttribute('data-start') &&
          currentVideo <= +text[i].getAttribute('data-end')) {
          text[i].className = 'current';
      } else {
        text[i].className = '';
      }
    }
});

// textWrapper.addEventListener('click', () => {
//
//   for (let i = 0, s = text.length; i < s; i++) {
//     if (currentVideo == text[i].getAttribute('data-start')) {
//       const currentVideo = videoPlay.currentTime;
//       currentVideo.play();
//     }
//   }
//
// });
