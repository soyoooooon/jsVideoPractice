(()=>{
console.log('video rpg');

const player = document.querySelector('.video');
const videoView = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay(){

    const method = videoView.paused ? 'play': 'pause';
    videoView[method]();

    // if(videoView.paused){
    //     videoView.play();
    // }else{
    //     (videoView.play)
    //         videoView.paused();    
    // }
};


function updateBtn(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
};

function skipBtn(){
    videoView.currentTime += parseFloat(this.dataset.skip)
};

function handleRangeUpdate() {
    videoView[this.name] = this.value;
  };
 //name was volume and playbackrate


 function handleProgress() {
    const percent = (videoView.currentTime / videoView.duration) * 100;
   
    progressBar.style.flexBasis = `${percent}%`;

    // debugger;
  };

  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * videoView.duration;
    videoView.currentTime = scrubTime;
  };

  function toggleFull(){
     if(videoView.requestFullScreen){
         videoView.requestFullScreen();
     }else if
    (videoView.webkitRequestFullscreen) { 
            videoView.webkitRequestFullscreen();
     }
  else{
      if(videoView.exitFullScreen){
          videoView.exitFullScreen();
      }else if
      (videoView.webkitExitFullscreen){
          videoView.webkitExitFullscreen();
      }
  }
     };


     document.addEventListener('keydown', function(event) {
         event.key === ' '
      
        if(event.key === ' '){
           
        togglePlay();
           
        }
        
    });
    





videoView.addEventListener('click', togglePlay);
videoView.addEventListener('play',updateBtn);
videoView.addEventListener('pause',updateBtn);
toggle.addEventListener('click',togglePlay);
videoView.addEventListener('timeupdate', handleProgress);
skipButtons.forEach(button =>button.addEventListener('click',skipBtn));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
progress.addEventListener('click', scrub);
videoView.addEventListener('dblclick',toggleFull);


let mousedown = false;
progress.addEventListener('mousemove',(e) => {
    if(mousedown){
        scrub(e)
    }})
// progress.addEventListener('mousemove(e)' && scrub(e))
    progress.addEventListener('mousedown', () => mousedown = true);
    progress.addEventListener('mouseup', () => mousedown = false);
   

})()