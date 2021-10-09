let radio = document.getElementById("audio");

const radioProperty = [
        
    {station:"Playback FM",
    broadcaster: "Forth Right MC",
    style: "Cassic East-coast Hip Hop",
    src:"assets/audio/K-Rose_GTA_SA.ogg"},

    {station:"K-Rose",
    broadcaster: "Mary-Beth Maybell",
    style: "classic country",
    src:"assets/audio/K-Rose_GTA_SA.ogg"},

    {station:"K-DST (The Dust)",
    broadcaster: 'Tommy "The Nightmare" Smith',
    style: "classic rock",
    src:"assets/audio/K-DST_GTA_SA.ogg"},

    {station:"Bounce FM",
    broadcaster: "The Funktipus",
    style: "funk, disco, soul and R&B",
    src:"assets/audio/K-Rose_GTA_SA.ogg"},

    {station:"San Fierro Underground Radio (SF-UR)",
    broadcaster: "Hans Oberlander",
    style: "house music",
    src:"assets/audio/K-Rose_GTA_SA.ogg"},

    {station:"Radio Los Santos",
    broadcaster: "Julio G.",
    style: "contemporary west-coast hip hop and gangsta rap",
    src:"assets/audio/K-Rose_GTA_SA.ogg"},

    {station:"Radio X",
    broadcaster: "Sage",
    style: "alternative rock, heavy metal and grunge",
    src:"assets/audio/K-Rose_GTA_SA.ogg"},

    {station:"Contemporary Soul Radio 103.9 (CSR)",
    broadcaster: 'Phillip "PM"',
    style: "new jack swing, contemporary soul, pop and boy band music",
    src:"assets/audio/K-Rose_GTA_SA.ogg"},

    {station:"K-JAH",
    broadcaster: "Marshall Peters & Johnny Lawton",
    style: "reggae, dub and dancehall music",
    src:"assets/audio/K-Rose_GTA_SA.ogg"},

    {station:"Master Sounds 98.3",
    broadcaster: 'Johnny "The Love Giant" Parkinson',
    style: "rare groove, classic funk and classic soul",
    src:"assets/audio/K-Rose_GTA_SA.ogg"}
];

// The event below load the radio stations list on the left side

document.addEventListener("DOMContentLoaded", function(){


    for (let i = 0; i < radioProperty.length; i++) {
        let radioStation = '<li id="station'+i+'">'+radioProperty[i].station+'</li>';
        document.getElementById("radioStationsList").innerHTML += radioStation;
    }

});

// The event below turns the chosen radio on

document.getElementById("radioStationsList").addEventListener("click",function(e){

    let idRadios = e.target.id;

    for (let i = 0; i < radioProperty.length; i++) {

        if(document.getElementById("station"+i).id === idRadios){
            radio.innerHTML = '<source src="'+radioProperty[i].src+'" type="audio/ogg"></source>';
            play();
            break;
        } else {
            radio.load();
        }
    }

})

// Control functions start here

function skip_previous() { 
    // radio.playbackRate -= 0.1; 
}

function skip_next() { 
    // radio.playbackRate += 0.1; 
}

function play() { 
    radio.play(); 
    radio.volume = 1.0;
}

function pause() { 
    radio.pause(); 
}

function volume_up() { 
    radio.volume += 0.1;
}

function volume_down() { 
    radio.volume -= 0.1;
}

function mute() { 
    
    if(radio.muted === false){
        radio.muted = true;
    } else {
        radio.muted = false;
        radio.volume = 1.0;
    }

 }

function stop() {
    radio.pause();
    radio.currentTime = 0;
    radio.playbackRate = 1.0;
}

