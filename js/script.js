let radio = document.getElementById("audio");

const radioProperty = [

    {
        station: "Playback FM",
        broadcaster: "Forth Right MC",
        style: "Cassic East-coast Hip Hop",
        src: "assets/audio/PlaybackFM_GTA_SA.ogg",
        // songs: "Kool G Rap & DJ Polo - Road to the Riches (1989)Big Daddy Kane - Warm It Up, Kane (1989)Spoonie Gee - "The Godfather" (1987)Masta Ace - "Me and the Biz" (1990)Slick Rick - "Children's Story" (1988)Public Enemy - "Rebel Without a Pause" (1987)Eric B. & Rakim - "I Know You Got Soul" (1987)Rob Base and DJ E-Z Rock - "It Takes Two" (1988)Gang Starr - "B.Y.S." (1992)Biz Markie - "The Vapors" (1988)Brand Nubian - "Brand Nubian" (1989)Ultramagnetic MCs - "Critical Beatdown" (1988)"
    },

    {
        station: "K-Rose",
        broadcaster: "Mary-Beth Maybell",
        style: "classic country",
        src: "assets/audio/K-Rose_GTA_SA.ogg",
        songs: ""
    },

    {
        station: "K-DST (The Dust)",
        broadcaster: 'Tommy "The Nightmare" Smith',
        style: "classic rock",
        src: "assets/audio/K-DST_GTA_SA.ogg",
        songs: ""
    },

    {
        station: "Bounce FM",
        broadcaster: "The Funktipus",
        style: "funk, disco, soul and R&B",
        src: "assets/audio/BounceFM_GTA_SA.ogg",
        songs: ""
    },

    {
        station: "San Fierro Underground Radio (SF-UR)",
        broadcaster: "Hans Oberlander",
        style: "house music",
        src: "assets/audio/SFUR_GTA_SA.ogg",
        songs: ""
    },

    {
        station: "Radio Los Santos",
        broadcaster: "Julio G.",
        style: "contemporary west-coast hip hop and gangsta rap",
        src: "assets/audio/RadioLosSantos_GTA_SA.ogg",
        songs: ""
    },

    {
        station: "Radio X",
        broadcaster: "Sage",
        style: "alternative rock, heavy metal and grunge",
        src: "assets/audio/K-Rose_GTA_SA.ogg",
        songs: ""
    },

    {
        station: "Contemporary Soul Radio 103.9 (CSR)",
        broadcaster: 'Phillip "PM"',
        style: "new jack swing, contemporary soul, pop and boy band music",
        src: "assets/audio/K-Rose_GTA_SA.ogg",
        songs: ""
    },

    {
        station: "K-JAH",
        broadcaster: "Marshall Peters & Johnny Lawton",
        style: "reggae, dub and dancehall music",
        src: "assets/audio/K-Rose_GTA_SA.ogg",
        songs: ""
    },

    {
        station: "Master Sounds 98.3",
        broadcaster: 'Johnny "The Love Giant" Parkinson',
        style: "rare groove, classic funk and classic soul",
        src: "assets/audio/K-Rose_GTA_SA.ogg",
        songs: ""
    }
];

// The event below load the radio stations list on the left side

document.addEventListener("DOMContentLoaded", function () {


    for (let i = 0; i < radioProperty.length; i++) {
        // This part below build the station list on the left side
        let radioStation = '<li id="station' + i + '">' + radioProperty[i].station + '</li>';
        document.getElementById("radioStationsList").innerHTML += radioStation;
        // This part build build the info list on the left side
        let infoRadioStation = '<li id="infoProperty' + i + '">Radio Station: </li>';
        let infoBroadcaster = '<li id="infoProperty' + i + '">Brocaster: </li>';
        let infoMusicStyle = '<li id="infoProperty' + i + '">Music Style: </li>';
        let infoSongs = '<li id="infoProperty' + i + '">Songs: <ul id="songList"><li id="song'+i+'"></li></ul></li>';
    }
    // <li>Radio Station:</li>
    //             <li>Broadcaster:</li>
    //             <li>Music Style:</li>
    //             <li>Songs:
    //                 <ul id="songList">
    //                     <li>bmwx6</li>
    //                 </ul>
    //             </li>
});

// The event below turns the chosen radio on

document.getElementById("radioStationsList").addEventListener("click", function (e) {

    let idRadios = e.target.id;

    for (let i = 0; i < radioProperty.length; i++) {

        if (document.getElementById("station" + i).id === idRadios) {
            radio.innerHTML = '<source src="' + radioProperty[i].src + '" type="audio/ogg"></source>';
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

    if (radio.muted === false) {
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

