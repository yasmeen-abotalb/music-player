// var parent = document.getElementById("parent");
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

        // عشان يلحق يقرا القيمة بتاعت الاغنية بعد ما الاسكريبت يكون حمل 
        window.addEventListener("load",function(){
            document.getElementById("rangeAudio").max = audio.duration;
           console.log("Start: " + audio.buffered.start(0)+ " End: " + audio.buffered.end(0));
        })
        function changeAudio(rangeAudio){
            audio.currentTime = rangeAudio.valueAsNumber;
            //  rangeAudio.max = audio.duration;
            //  rangeAudio.min = audio.buffered.start(0);
            //  rangeAudio.max = audio.buffered.end(0);
            //  rangeAudio.value = 0;
            //  rangeAudio.min = audio.duration;
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
            // v.value = audio.value;

        }
        function changeVolume(volumeRange){
            audio.volume = volumeRange.valueAsNumber;
            // volumeRange.max = audio.volume;

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

// var pause = document.getElementById("pause");
// pause.addEventListener("click", () => {
//     var parent = document.getElementById("parent");
//     parent.pause();
// });

// var play = document.getElementById("play");
// play.addEventListener("click", () => {
//     var parent = document.getElementById("parent");
//     parent.play();
// });

// var stop = document.getElementById("stop");
// stop.addEventListener("click", () => {
//     var parent = document.getElementById("parent");
//     parent.load();
// });

// var volume = document.getElementById("sound");
// volume.addEventListener("change", () => {
//     var parent = document.getElementById("parent");
//     console.log(volume.value);
//     parent.volume = volume.value /100;
    
// });

// var mute = document.getElementById("mute");
// mute.addEventListener("click", () => {
//     var parent = document.getElementById("parent");
//     parent.muted = !parent.muted;
// });