const textBlock = document.querySelectorAll('span');
const videoPlay = document.querySelector('video');

videoPlay.addEventListener('timeupdate', () => {

    const currentVideo = videoPlay.currentTime;
    for (let i = 0, s = textBlock.length; i < s; i++) {
      if (currentVideo >= +textBlock[i].getAttribute('data-start') &&
          currentVideo <= +textBlock[i].getAttribute('data-end')) {
          textBlock[i].className = 'current';
      } else {
        textBlock[i].className = '';
      }
    }
});

for (let i = 0; i < textBlock.length; i++) {

  textBlock[i].addEventListener("click", () => {
    let start = parseFloat(textBlock[i].getAttribute('data-start'));
    videoPlay.currentTime = start;
    videoPlay.play();
  });
};
