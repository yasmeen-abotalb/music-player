
var firstSong = document.getElementById("first");
var secondSong = document.getElementById("second");
var thirdSong = document.getElementById("third");
var fourthSong = document.getElementById("fourth");
var picture = document.getElementById("pic");
var v = document.getElementById("rangeVolum");
 var track = document.getElementById("rangeAudio");

var images = []
images[0] = "imgs/A Thousand Years00.jpg";
images[1] = "imgs/astronaut in the ocean00.jpg";
images[2] = "imgs/Beggin 00.jpg";
images[3] = "imgs/Beliver00jpg.jpg";
var songes = []
songes[0] = "musics/Christina Perri - A Thousand Years [Official Music Video] (320 kbps).mp3";
songes[1] = "musics/Masked Wolf - Astronaut in the Ocean (192 kbps).mp3";
songes[2] = "musics/Måneskin - Beggin' (Lyrics_Testo) (320 kbps).mp3";
songes[3] = "musics/Imagine Dragons - Believer (Lyrics) (320 kbps).mp3";

var audio = document.getElementsByTagName("audio")[0];
        console.dir(audio);

        
        window.addEventListener("load",function(){
            document.getElementById("rangeAudio").max = audio.duration;
           console.log("Start: " + audio.buffered.start(0)+ " End: " + audio.buffered.end(0));
        })
        function changeAudio(rangeAudio){
            audio.currentTime = rangeAudio.valueAsNumber;

        }
        function update(){
            var nt= audio.currentTime ;
            console.log(nt);
            track.value = nt;  
        }
        audio.addEventListener("timeupdate",function(event){
            update();
        },false);

        function muteAudio(){
            audio.muted = !audio.muted;

        }
        function changeVolume(volumeRange){
            audio.volume = volumeRange.valueAsNumber;

        }
        function playAudio(){
            audio.play();

        }
        function pauseAudio(){
            audio.pause();

        }
        function stopAudio(){
            audio.load();
            audio.pause();

        }
firstSong.addEventListener('click', () => {
    pic.src = images[0];
    audio.src = songes[0]
})
secondSong.addEventListener('click', () => {
    pic.src = images[1];
    audio.src = songes[1]
})
thirdSong.addEventListener('click', () => {
    pic.src = images[2];
    audio.src = songes[2]
})
fourthSong.addEventListener('click', () => {
    pic.src = images[3];
    audio.src = songes[3]
})


