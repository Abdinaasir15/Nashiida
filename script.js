let images = document.querySelector("#images");
let title = document.querySelector("#title");
let artist = document.querySelector("#artist");
let present = document.querySelector("#present");
let total = document.querySelector("#total");
let singer = document.querySelector("#singer");
let play = document.querySelector("#change");
let slider = document.querySelector("#duration_slider");
let auto_play = document.querySelector("#auto");

let play_on = false;
let audio = document.createElement("audio");
let tirada = 0;

let timer;
let autoplay = 0;

// create lists

let all_hees = [{
    title: "Nashed Linandhaliq",
    artist: "jadiida aa nashaa'inaa",
    img: "imgs/nasser1.png",
    path: "coll/1.mp3",
    singer: "by nash "
}, {
    title: "Bil-Cimli",
    artist: "aadam",
    img: "imgs/nasser2.jpeg",
    path: "coll/2.mp3",
    singer: "By ........ "
}, {
    title: "caa idiinaa",
    artist: "jaaabakalaaah fadiilaaa",
    img: "imgs/nasser3.jpeg",
    path: "coll/3.mp3",
    singer: "By arabic "
}, {
    title: "awali. darbi'yaara.",
    artist: "Anna muxtaajun ileyk",
    img: "imgs/nasser.jpg",
    path: "coll/4.mp3",
    singer: "By ....... "

}, {
    title: "Insha Allah",
    artist: "You'll find Your way",
    img: "imgs/nasser3.jpeg",
    path: "coll/5.mp3",
    singer: "By Meher Zain "
}, {
    title: "Qariibun fil xayaati",
    artist: "wamajhuu lil hawiyati wasifaaati",
    img: "imgs/nasser.jpg",
    path: "coll/6.mp3",
    singer: "By Al Asser "

}, {
    title: "تمني",
    artist: "Huwal xayu inshaa a rabul bariyah",
    img: "imgs/nasser2.jpeg",
    path: "coll/7.mp3",
    singer: "By islamic "
}, {
    title: "حياتي",
    artist: "bixullaahi ahdiiihaaa litafraxu cindamaa talqaa",
    img: "imgs/nasser2.jpeg",
    path: "coll/8.mp3",
    singer: "By ......."
}, {
    title: "ضيفنا اهلا بك",
    artist: "marxaban biman ataaanaaa",
    img: "imgs/nasser2.jpeg",
    path: "coll/9.mp3",
    singer: "By ......."
}, {
    title: "الحجاب",
    artist: "All-Hijaabi // fal yaquulu",
    img: "imgs/nasser2.jpeg",
    path: "coll/10.mp3",
    singer: "By ......."

}, {
    title: "رحمن رحمن ",
    artist: "Saaa idnii yaa Rahmaan",
    img: "imgs/nasser2.jpeg",
    path: "coll/11.mp3",
    singer: " مشاري راشد الع"

}, {
    title: "ذكروهم",
    artist: "quuumuu lil jihaaad",
    img: "imgs/nasser2.jpeg",
    path: "coll/12.mp3",
    singer: "by ..jihaad"
}, {
    title: "Shufu Sa'udia",
    artist: "wal ka'ba qiblatnaaa",
    img: "imgs/nasser2.jpeg",
    path: "coll/13.mp3",
    singer: "For ..saudi"
}, {
    title: "Atal maxu",
    artist: "jadiiidan yaa bacdu sixraaa",
    img: "imgs/nasser2.jpeg",
    path: "coll/14.mp3",
    singer: "For ......"
}, {
    title: "أنت لقلبي جنتان ",
    artist: "ummaa hu yaa umaaa",
    img: "imgs/nasser2.jpeg",
    path: "coll/16.mp3",
    singer: "For Meher Zain"
}, {
    title: "shaha-Ramadan",
    artist: "daf raaxiii / ridruubii",
    img: "imgs/nasser2.jpeg",
    path: "coll/17.mp3",
    singer: "For Ramadaaan"
}, {
    title: "صباحُ الحـبِّ يا لغتي ",
    artist: "subax wanaaagsan",
    img: "imgs/nasser2.jpeg",
    path: "coll/18.m4a",
    singer: "by ........."
}, {
    title: "أ ب ت ث ج ح ",
    artist: "subax wanaaagsan",
    img: "imgs/nasser2.jpeg",
    path: "coll/19.mp3",
    singer: "by ......"
}, {
    title: "ifnaata ",
    artist: "Never forget to say La' ilaaha illa Allah",
    img: "imgs/nasser2.jpeg",
    path: "coll/20.mp3",
    singer: "by ......"
}];


// reset the song
// reset song slider

function reset_slider() {
    slider.value = 0;
}

// hadller all

function dhamaan(tirada) {
    clearInterval(timer);
    reset_slider();

    // reset_slider();
    artist.innerHTML = all_hees[tirada].artist;
    title.innerHTML = all_hees[tirada].title;
    images.src = all_hees[tirada].img;
    audio.src = all_hees[tirada].path;
    singer.innerHTML = all_hees[tirada].singer;


    present.innerHTML = tirada + 1;
    total.innerHTML = all_hees.length;

    timer = setInterval(range_slider, 1000);

}
dhamaan(tirada);

// lets prepare for play and pause

function playSong() {
    if (play_on == false) {
        playOn();
    } else {
        pauseOff();
    }
}

// lets play the song now
function playOn() {
    audio.play();
    play_on = true;
    play.innerHTML = '&#9208';
    play.style.backgroundColor = "orange";
}



// lets pause now
function pauseOff() {
    audio.pause();
    play_on = false;
    play.innerHTML = '&#9658;';
}


//  lets work on the prev btn

function prev() {
    if (tirada >= 1) {
        tirada--;
        dhamaan(tirada);
        playOn();
    } else {
        tirada = all_hees.length;
        dhamaan(tirada);
        playOn();

    }
}
// lets work on next btn
function next() {
    if (tirada <= all_hees.length - 1) {
        tirada++;
        dhamaan(tirada);
        playOn();
    } else {
        tirada = 0;
        dhamaan(tirada);
        playOn();

    }
}


// play slider duration

function play_duration() {
    slider_position = audio.duration * (slider.value / 100);
    audio.currentTime = slider_position;
}


// autoplay function
function auto_switch() {
    if (autoplay == 1) {
        autoplay = 0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
        playOn();
    } else {
        autoplay = 1;
        auto_play.style.background = "red";
        playOn();
    }
}



function range_slider() {
    let postion = 0;

    // update slider position
    if (!isNaN(audio.duration)) {
        postion = audio.currentTime * (100 / audio.duration);
        slider.value = postion;
    }

    // function will run when the song is over
    if (audio.ended) {
        play.innerHTML = '<i class="fa fa-play"></i>';
        if (autoplay == 1) {
            tirada += 1;
            dhamaan(tirada);
            playOn();
        }
    }
}