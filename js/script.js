let radio = document.getElementById("audio");
const radioProperty = [
        
    {station:"Playback FM",
    broadcaster: "Forth Right MC",
    style: "Cassic East-coast Hip Hop"},

    {station:"K-Rose",
    broadcaster: "Mary-Beth Maybell",
    style: "classic country"},

    {station:"K-DST",
    broadcaster: 'Tommy "The Nightmare" Smith',
    style: "classic rock"},

    {station:"Bounce FM",
    broadcaster: "The Funktipus",
    style: "funk, disco, soul and R&B"},

    {station:"San Fierro Underground Radio (SF-UR)",
    broadcaster: "Hans Oberlander",
    style: "house music"},

    {station:"Radio Los Santos",
    broadcaster: "Julio G.",
    style: "contemporary west-coast hip hop and gangsta rap"},

    {station:"Radio X",
    broadcaster: "Sage",
    style: "alternative rock, heavy metal and grunge"},

    {station:"Contemporary Soul Radio 103.9 (CSR)",
    broadcaster: 'Phillip "PM"',
    style: "new jack swing, contemporary soul, pop and boy band music"},

    {station:"K-JAH",
    broadcaster: "Marshall Peters & Johnny Lawton",
    style: "reggae, dub and dancehall music"},

    {station:"Master Sounds 98.3",
    broadcaster: 'Johnny "The Love Giant" Parkinson',
    style: "rare groove, classic funk and classic soul"}
];

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

function pause() { radio.pause(); }

function volume_up() { radio.volume += 0.1;}

function volume_down() { radio.volume -= 0.1;}

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

