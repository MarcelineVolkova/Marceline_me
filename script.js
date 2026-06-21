const btn=document.getElementById('playBtn');
const audio=new Audio('assets/audio/music.mp3');
audio.volume = 0.05;
audio.loop=true;
btn?.addEventListener('click',()=>{
 if(audio.paused){audio.play();btn.classList.add('playing');}
 else{audio.pause();btn.classList.remove('playing');}
});
