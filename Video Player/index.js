const video = document.querySelector('#video')
const play = document.querySelector('#play')
const stop = document.querySelector('#stop')
const progress = document.querySelector('#progress')
const timestamp = document.querySelector('#timestamp')

// play & pause
function toggleVideoStatus(){
  
  if(video.paused){
    video.play();
  }else{
    video.pause();
  }
}

//update play or pause icon
function updatePlayIcon(){
  if(video.paused){
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`
  }else{
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
  }
}
// while playing, triggered callback regulary
function updateProgress(){ 
  progress.value = (video.currentTime / video.duration) * 100;

  //Get minutes 
  let min = Math.floor(video.currentTime / 60);
  min < 10 ? min = '0'+String(min) : min = String(min)

  //get Seconds
  let sec = Math.floor(video.currentTime % 60); 
  sec < 10 ? sec = '0'+String(sec) : sec = String(sec);
  timestamp.innerHTML = `${min}:${sec}`
}

//when click progressBar
function setVideoProgress(){ 
  video.currentTime = (+progress.value * video.duration) / 100
}

function stopVideo(){
  video.currentTime = 0;
  video.pause();
}




video.addEventListener('click',toggleVideoStatus);  
video.addEventListener('pause',updatePlayIcon); 
video.addEventListener('play',updatePlayIcon); 
video.addEventListener('timeupdate',updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click',stopVideo)
progress.addEventListener('change', setVideoProgress)



