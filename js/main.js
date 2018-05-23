/*

Initiate player using jquery (addresses Safari bug)

*/

$('video').mediaelementplayer({
  features: ['playpause', 'progress', 'volume', 'fullscreen'],
  startLanguage: 'en',
});

/*

Define constants in code

*/

const textBlock = document.querySelectorAll('.textWrapper span');
const videoPlay = document.querySelector('video');

/*

Loop through captions to highlight text as video player

*/

videoPlay.addEventListener('timeupdate', () => {

    const currentVideo = videoPlay.currentTime;

    for (let i = 0; i < textBlock.length; i++) {
      if (currentVideo >= +textBlock[i].getAttribute('data-start') &&
          currentVideo <= +textBlock[i].getAttribute('data-end')) {
          textBlock[i].className = 'current';
      } else {
        textBlock[i].className = '';
      }
    }
});

/*

Allow text to be clickable, jump to specific section in videoPlay

*/

for (let i = 0; i < textBlock.length; i++) {
  textBlock[i].addEventListener("click", () => {
    let start = parseFloat(textBlock[i].getAttribute('data-start'));
    videoPlay.currentTime = start;
    videoPlay.play();
  });
};
