let radio = document.getElementById("audio");

const radioProperty = [

    {
        station: "Playback FM",
        broadcaster: "Forth Right MC",
        style: "Cassic East-coast Hip Hop",
        src: "assets/audio/PlaybackFM_GTA_SA.ogg",
        songs: "<li  > Kool G Rap & DJ Polo -  Road to the Riches  (1989) </li><li  >Big Daddy Kane -  Warm It Up, Kane  (1989) </li><li  >Spoonie Gee -  The Godfather  (1987) </li><li  >Masta Ace -  Me and the Biz  (1990) </li><li  >Slick Rick -  Children's Story  (1988) </li><li  >Public Enemy -  Rebel Without a Pause  (1987) </li><li  >Eric B. & Rakim -  I Know You Got Soul  (1987) </li><li  >Rob Base and DJ E-Z Rock -  It Takes Two  (1988) </li><li  >Gang Starr -  B.Y.S.  (1992)Biz Markie -  The Vapors  (1988) </li><li  >Brand Nubian -  Brand Nubian  (1989) </li><li  >Ultramagnetic MCs -  Critical Beatdown  (1988) </li>"
    },

    {
        station: "K-Rose",
        broadcaster: "Mary-Beth Maybell",
        style: "classic country",
        src: "assets/audio/K-Rose_GTA_SA.ogg",
        songs: "<li>Jerry Reed -  Amos Moses  (1970)</li><li>Conway Twitty and Loretta Lynn -  Louisiana Woman, Mississippi Man  (1973)</li><li>Hank Williams -  Hey Good Lookin'  (1951)</li><li>Juice Newton -  Queen of Hearts  (1981)</li><li>Statler Brothers -  New York City  (1970)</li><li>Asleep At The Wheel -  The Letter That Johnny Walker Read  (1975)</li><li>The Desert Rose Band -  One Step Forward  (1987)</li><li>Willie Nelson -  Crazy  (1962)</li><li>Patsy Cline -  Three Cigarettes in an Ashtray  (1957)</li><li>Statler Brothers -  Bed of Rose's  (1970)Mickey Gilley -  Make the World Go Away  (1999)</li><li>Ed Bruce -  Mammas Don't Let Your Babies Grow Up to Be Cowboys  (1975)</li><li>Merle Haggard -  Always Wanting You  (1975)Whitey Shafer -  All My Ex's Live in Texas  (1987)</li><li>Eddie Rabbitt -  I Love a Rainy Night  (1980)</li>"
    },

    {
        station: "K-DST (The Dust)",
        broadcaster: 'Tommy "The Nightmare" Smith',
        style: "classic rock",
        src: "assets/audio/K-DST_GTA_SA.ogg",
        songs: "<li>Foghat -  Slow Ride  (1975)Creedence Clearwater Revival -  Green River  (1969)</li><li>Heart -  Barracuda  (1977)</li><li>Kiss -  Strutter  (1974)Toto -  Hold the Line  (1978)</li><li>Rod Stewart -  Young Turks  (1981)Tom Petty -  Runnin' Down a Dream  (1989)</li><li>Joe Cocker -  Woman to Woman  (1972) </li><li>Humble Pie -  Get Down to It  (1973)</li><li>Grand Funk Railroad -  Some Kind of Wonderful  (1974)</li><li>Lynyrd Skynyrd -  Free Bird  (1973)</li><li>America -  A Horse with No Name  (1971)</li><li>The Who -  Eminence Front  (1982)Boston -  Smokin'  (1976)</li><li>David Bowie -  Somebody Up There Likes Me  (1975)</li><li>Eddie Money -  Two Tickets to Paradise  (1977)</li><li>Billy Idol -  White Wedding  (1982)</li>"
    },

    {
        station: "Bounce FM",
        broadcaster: "The Funktipus",
        style: "funk, disco, soul and R&B",
        src: "assets/audio/BounceFM_GTA_SA.ogg",
        songs: "<li>Dazz Band -  Let It Whip  (1982)</li><li>Fatback Band -  Yum Yum (Gimme Some)  (1975)</li><li>Gap Band -  You Dropped a Bomb on Me  (1982)</li><li>Kool & the Gang -  Hollywood Swinging  (1973)</li><li>Cameo -  Candy  (1986)</li><li>MFSB -  Love Is The Message  (1973)</li><li>Johnny Harris -  Odyssey  (1980)</li><li>Roy Ayers -  Running Away  (1977)</li><li>Ohio Players -  Love Rollercoaster  (1975)</li><li>The Isley Brothers -  Between The Sheets  (1983)</li><li>Zapp -  I Can Make You Dance  (1983)</li><li>Rick James -  Cold Blooded  (1983)</li><li>Ronnie Hudson and The Street People -  West Coast Poplock  (1982)</li><li>George Clinton -  Loopzilla  (1982)</li><li>Ohio Players -  Funky Worm  (1972)</li><li>Maze -  Twilight  (1985)</li><li>Lakeside -  Fantastic Voyage  (1980)</li>"
    },

    {
        station: "San Fierro Underground Radio (SF-UR)",
        broadcaster: "Hans Oberlander",
        style: "house music",
        src: "assets/audio/SFUR_GTA_SA.ogg",
        songs: "<li>Joe Smooth feat. Anthony Thomas -  Promised Land  (1988)</li><li>808 State -  Pacific 202  (1989)</li><li>A Guy Called Gerald -  Voodoo Ray  (1988)</li><li>Frankie Knuckles feat. Jamie Principle -  Your Love  (1986)</li><li>Raze -  Break 4 Love  (1988)</li><li>Cultural Vibe -  Ma Foom Bey  (1986)</li><li>Jomanda -  Make My Body Rock  (1988)</li><li>CeCe Rogers -  Someday  (1987)</li><li>Nightwriters -  Let The Music Use You  (1987)</li><li>Mr. Fingers - Can You Feel It? (1988)</li><li>Marshall Jefferson -  Move Your Body  (1986)</li><li>Maurice -  This Is Acid (A New Dance Craze - K & T Mix)  (1988)</li><li>The Todd Terry Project -  Weekend  (1988)</li><li>Fallout -  The Morning After (Sunrise Mix)  (1987)</li><li>Robert Owens -  I'll Be Your Friend  (1991)</li><li>The 28th Street Crew -  I Need A Rhythm  (1989)</li>"
    },

    {
        station: "Radio Los Santos",
        broadcaster: "Julio G.",
        style: "contemporary west-coast hip hop and gangsta rap",
        src: "assets/audio/RadioLosSantos_GTA_SA.ogg",
        songs: "<li>2Pac (feat. Pogo) -  I Don't Give a Fuck  (1991) </li>"
        +"<li>Compton's Most Wanted -  Hood Took Me Under  (1992)</li>"
        +"<li>Dr.Dre (feat. Snoop Dogg) -  Nuthin' But A 'G' Thang  (1992)</li>"
        +"<li>Too $hort -  The Ghetto  (1990)</li>"
        +"<li>N.W.A. -  Alwayz into Somethin'  (1991)</li>"
        +"<li>Ice Cube (feat. Das EFX) -  Check Yo Self (The Message Remix)  (1992)</li>"
        +"<li>Kid Frost -  La Raza  (1990)</li>"
        +"<li>Cypress Hill -  How I Could Just Kill a Man  (1991)</li>"
        +"<li>Dr. Dre (feat. Snoop Dogg & RBX) -  Fuck wit Dre Day  (1992)</li>"
        +"<li>The D.O.C. -  It's Funky Enough  (1989)</li>"
        +"<li>N.W.A. -  Express Yourself  (1988)</li>"
        +"<li>Ice Cube -  It Was a Good Day  (1992)</li>"
        +"<li>Eazy-E -  Eazy-Er Said Than Dunn  (1988)</li>"
        +"<li>Above the Law -  Murder Rap  (1990)</li>"
        +"<li>Dr. Dre (feat. Snoop Dogg) -  Deep Cover  (1992)</li>"
        +"<li>Da Lench Mob (feat. Ice Cube) -  Guerillas in tha Mist  (1992)</li>"
    },

    {
        station: "Radio X",
        broadcaster: "Sage",
        style: "alternative rock, heavy metal and grunge",
        src: "assets/audio/RadioX_GTA_SA.ogg",
        songs: "<li>Helmet -  Unsung  (1991)</li>"
        +"<li>Depeche Mode -  Personal Jesus  (1989)</li>"
        +"<li>Faith No More -  Midlife Crisis  (1992)</li>"
        +"<li>Danzig -  Mother  (1988)</li>"
        +"<li>Living Colour -  Cult of Personality  (1988)</li>"
        +"<li>Primal Scream -  Movin' on Up  (1991)</li>"
        +"<li>Guns N' Roses -  Welcome to the Jungle  (1987)</li>"
        +"<li>L7 -  Pretend We're Dead  (1992)</li>"
        +"<li>Ozzy Osbourne -  Hellraiser  (1991)</li>"
        +"<li>Soundgarden -  Rusty Cage  (1991)</li>"
        +"<li>Rage Against the Machine -  Killing in the Name  (1992)</li>"
        +"<li>Jane's Addiction -  Been Caught Stealing  (1990)</li>"
        +"<li>The Stone Roses -  Fools Gold  (1989)</li>"
        +"<li>Alice in Chains -  Them Bones  (1992)</li>"
        +"<li>Stone Temple Pilots -  Plush  (1992)</li>"
    },

    {
        station: "Contemporary Soul Radio 103.9 (CSR)",
        broadcaster: 'Phillip "PM"',
        style: "new jack swing, contemporary soul, pop and boy band music",
        src: "assets/audio/CSR-103.9_GTA_SA.ogg",
        songs: "<li>SWV -  I'm So Into You  (1992)</li>"
        +"<li>Soul II Soul -  Keep On Movin'  (1989)</li>"
        +"<li>Samuelle -  So You Like What You See  (1990)</li>"
        +"<li>Johnny Gill -  Rub You the Right Way  (1990)</li>"
        +"<li>Ralph Tresvant -  Sensitivity  (1990)</li>"
        +"<li>Guy -  Groove Me  (1988)</li>"
        +"<li>Aaron Hall -  Don't Be Afraid  (1992)</li>"
        +"<li>Boyz II Men -  Motownphilly  (1991)</li>"
        +"<li>Bell Biv DeVoe - Poison  (1990)</li>"
        +"<li>Today -  I Got the Feeling  (1990)</li>"
        +"<li>Wreckx-n-Effect -  New Jack Swing  (1988)</li>"
        +"<li>Bobby Brown -  Don't Be Cruel  (1988)</li>"
        +"<li>En Vogue -  My Lovin' (You're Never Gonna Get It)  (1992)</li>"
    },

    {
        station: "K-JAH",
        broadcaster: "Marshall Peters & Johnny Lawton",
        style: "reggae, dub and dancehall music",
        src: "assets/audio/K-JAHWEST_GTA_SA.ogg",
        songs: "<li>Black Harmony -  Don't Let It Go to Your Head  (1979) </li>"
        +"<li>Blood Sisters -  Ring My Bell  (1979) </li>"
        +"<li>Shabba Ranks -  Wicked Inna Bed  (1990)</li>"
        +"<li>Buju Banton -  Batty Rider  (1992)</li>"
        +"<li>Augustus Pablo -  King Tubby Meets Rockers Uptown  (1975)</li>"
        +"<li>Dennis Brown -  Revolution  (1983)</li>"
        +"<li>Willi Williams -  Armagideon Time  (1979)</li>"
        +"<li>I-Roy -  Sidewalk Killer  (1972)</li>"
        +"<li>Toots & The Maytals -  Funky Kingston  (1973)</li>"
        +"<li>Dillinger -  Cokane In My Brain  (1976)</li>"
        +"<li>Toots & The Maytals -  Pressure Drop  (1969)</li>"
        +"<li>Pliers -  Bam Bam  (1992)</li>"
        +"<li>Barrington Levy -  Here I Come  (1984)</li>"
        +"<li>Reggie Stepper -  Drum Pan Sound  (1990)</li>"
        +"<li>Black Uhuru -  Great Train Robbery  (1986)</li>"
        +"<li>Max Romeo & The Upsetters -  Chase The Devil  (1976)</li>"
    },

    {
        station: "Master Sounds 98.3",
        broadcaster: 'Johnny "The Love Giant" Parkinson',
        style: "rare groove, classic funk and classic soul",
        src: "assets/audio/MasterSounds98.3_GTA_SA.ogg",
        songs: "<li>Maceo & The Macks - Cross the Tracks (We Better Go Back)</li>"
        +"<li>Charles Wright - Express Yourself</li>"
        +"<li>Bob James - Nautilus</li>"
        +"<li>War - Low Rider</li>"
        +"<li>Bobby Byrd - I Know You Got Soul</li>"
        +"<li>The Blackbyrds - Rock Creek Park</li>"
        +"<li>James Brown - Funky President</li>"
        +"<li>The Chakachas - Jungle Fever</li>"
        +"<li>The J.B.'s - The Grunt</li>"
        +"<li>Booker T. & The M.G.’s - Green Onions</li>"
        +"<li>James Brown - The Payback</li>"
        +"<li>Sir Joe Quarterman & Free Soul - So Much Trouble in My Mind</li>"
        +"<li>Lyn Collins - Rock Me Again & Again</li>"
        +"<li>Gloria Jones - Tainted Love</li>"
        +"<li> Lyn Collins - Think (About It)</li>"
        +"<li>Bobby Byrd - Hot Pants</li>"
        +"<li>Harlem Underground Band - Smokin' Cheeba Cheeba</li>"
        +"<li>Maceo & The Macks - Soul Power '74</li>"
    }
];

// The event below load the radio stations list on the left side

document.addEventListener("DOMContentLoaded", function () {


    for (let i = 0; i < radioProperty.length; i++) {
        // This part below build the station list on the left side
        let radioStation = '<li id="station' + i + '">' + radioProperty[i].station + '</li>';
        document.getElementById("radioStationsList").innerHTML += radioStation;
    }
});

// The event below turns the chosen radio on

document.getElementById("radioStationsList").addEventListener("click", function (e) {

    let idRadios = e.target.id;
    let infoSongs = "";
    let infoRS, infoBC, infoMS = "";

    for (let i = 0; i < radioProperty.length; i++) {

        if (document.getElementById("station" + i).id === idRadios) {
            radio.innerHTML = '<source src="' + radioProperty[i].src + '" type="audio/ogg"></source>';
            play();
            // This part build build the info list on the right side
            
            infoSongs = radioProperty[i].songs;
            infoRS = radioProperty[i].station;
            infoBC = radioProperty[i].broadcaster;
            infoMS = radioProperty[i].style;

            // for (let index = 0; index < infoSongs.length; index++) {
            //     if(infoSongs.includes("@") === true){
            //             let count =+ 1;
            //             let x = infoSongs.replaceAll("@","song"+count);
            //             console.log(x);
            //     }
            // }

            
            document.getElementById("songList").innerHTML = infoSongs;
            document.getElementById("infoRS").innerHTML = infoRS;
            document.getElementById("infoBC").innerHTML = infoBC;
            document.getElementById("infoMS").innerHTML = infoMS;

            break;
        } else {
            radio.load();
        }
    }

    // This part build build the info list on the right side
    // let infoRadioStation = '<li id="infoProperty' + i + '">Radio Station: </li>';
    // let infoBroadcaster = '<li id="infoProperty' + i + '">Brocaster: </li>';
    // let infoMusicStyle = '<li id="infoProperty' + i + '">Music Style: </li>';
    // let infoSongs = '<li id="infoProperty' + i + '">Songs: <ul id="songList"><li id="song'+i+'"></ul></li>';

    // document.getElementById("infoList").innerHTML += infoRadioStation + infoBroadcaster + infoMusicStyle + infoSongs;

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

