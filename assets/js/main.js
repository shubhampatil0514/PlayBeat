let playlist=[
    {
      "coverImage":"assets/img/cover1.jpg",
      "title":"Set Me Free",
      "path":"assets/song/Set-Me-Free.mp3"
    }, 
    {
      "coverImage":"assets/img/cover2.jpg",
      "title":"Run",
      "path":"assets/song/Run.mp3"
    },
    {
      "coverImage":"assets/img/cover3.jpg",
      "title":"Tere Vaaste",
      "path":"assets/song/Tere-Vaaste.mp3"
    }, 
    {
      "coverImage":"assets/img/cover4.jpg",
      "title":"Tu Hai To mujhe",
      "path":"assets/song/Tu-Hai-To-Mujhe-Phir-Aur-Kya-Chahiye.mp3"
    }, 
    {
      "coverImage":"assets/img/cover5.jpg",
      "title":"Old Town Road Remix",
      "path":"assets/song/Old Town Road Remix.mp3"
    }, 
    {
      "coverImage":"assets/img/cover6.jpg",
      "title":"Dope",
      "path":"assets/song/Dope.mp3"
    }, 
    {
      "coverImage":"assets/img/cover7.jpg",
      "title":"Faded",
      "path":"assets/song/Faded.mp3"
    }, 
    {
      "coverImage":"assets/img/cover8.jpg",
      "title":" Jai Shri Ram ",
      "path":"assets/song/Jai-Shri-Ram-(Sonu-Nigam-Version)_320(PaglaSongs).mp3"
    }, 
    {
      "coverImage":"assets/img/cover9.jpg",
      "title":"Dilon Ki Doriyan ",
      "path":"assets/song/Dilon-Ki-Doriyan_320(PaglaSongs).mp3"
    }, 
    {
      "coverImage":"assets/img/cover10.jpg",
      "title":"Ram Siya Ram",
      "path":"assets/song/Ram-Siya-Ram-(Hindi)_320(PaglaSongs).mp3"
    }, 

   
  ]
  
  ;

window.addEventListener('load', main);

function main(){
    
    let playerContainerRef=document.getElementById("playlistContainer");
    playerContainerRef.innerHTML="";

     let gif = document.getElementById('gif');
     let audioplayer=document.getElementById("audio-player");
     let playButton=document.getElementById("playButton");

     
     let prev=document.getElementById("prev")
     let next=document.getElementById("next")



     let volumebar=document.getElementById("volumebar");

    for (let index = 0; index < playlist.length; index++) {
        const element = playlist[index];
    
        const songIteamRef = document.createElement(`div`);
        songIteamRef.className="songItem";
    
        const imgRef= document.createElement('img');
        imgRef.src=element.coverImage;
    
        const titleRef = document.createElement(`span`);
        titleRef.innerHTML=element.title;
    
        const buttonref = document.createElement(`button`);
        buttonref.className="fas fa-2x fa-play-circle";
        buttonref.addEventListener('click', function() { playSong(index) } ,false);
    
        songIteamRef.appendChild(imgRef);
        songIteamRef.appendChild(titleRef);
        songIteamRef.appendChild(buttonref);
    
        playerContainerRef.appendChild(songIteamRef);
    }
    
    
    function playSong(index){
        setPlayerDetails(index);
        audioplayer.src = playlist[index].path;
        audioplayer.play();
        gif.style.opacity = 1;
    }

    function setPlayerDetails(index){
        var coverImage=document.getElementById("coverImage");
        coverImage.src = playlist[index].coverImage
        var playerTitle=document.getElementById("player-title");
        playerTitle.innerHTML = playlist[index].title
        playButton.innerHTML='<i class="fas fa-2x fa-pause"></i>';
    }

    playButton.addEventListener('click', function(){
        if(isPlaying(audioplayer)){
            audioplayer.pause();
            playButton.innerHTML='<i class="fas fa-2x fa-play-circle"></i>';
            gif.style.opacity = 0;
        }else{
            audioplayer.play();
            playButton.innerHTML='<i class="fas fa-2x fa-pause"></i>';
            gif.style.opacity = 1;
        }
    })

    prev.addEventListener('click',function(){
      let currentplaylistIndex = 0; 
      const currentAudio = playlist[currentplaylistIndex].title;
      currentplaylistIndex--;
      if (currentplaylistIndex< 0) {
        currentplaylistIndex = playlist.length - 1;
  }

    })
    








    volumebar.addEventListener('input', function(e){
    console.log(this.value)
    audioplayer.volume = this.value
    },false)
    function isPlaying(audelem) { return !audelem.paused; }

}




