const pages = document.querySelectorAll('.page');
let index = 0;

document.getElementById('next').onclick = () => {
  pages[index].classList.remove('active');
  index++;
  if(index < pages.length){
    pages[index].classList.add('active');
    const video = pages[index].querySelector('video');
    if(video){
      video.play();
      video.onended = () => {
        video.pause();
        video.currentTime = video.duration;
      };
    }
  }
};
