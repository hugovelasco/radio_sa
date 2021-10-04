let radio = document.getElementById("audio");

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