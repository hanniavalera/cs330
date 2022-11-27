var count = 2;

var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];

window.onload = function init() {
    const volLevels = Array(6);

    for (let i = 0; i < 5; i++) {
        volLevels.push(document.getElementById("vl"+i));
    }
    
}

function volUp() {
    document.getElementById("vl" + count).style.backgroundColor = "#9f5cc4";
    count++;
    if (count > 5) {
        document.getElementById("vl" + 5).style.backgroundColor = "#9f5cc4";
        count = 5;
    }
}

function volDown() {
    document.getElementById("vl" + count).style.backgroundColor = "white";
    count--;
    if (count < 0) {
        document.getElementById("vl" + 0).style.backgroundColor = "white";
        count = 0;
    }
}



var playButtonCurr = true;



function playtoPause() {
    //play to pause
    document.getElementById("continue-button").innerHTML = '<i class="material-icons">pause</i>';
    playButtonCurr = false;
}

function pausetoPlay() {
    //pause to play
    document.getElementById("continue-button").innerHTML = '<i class="material-icons">play_arrow</i>';
    playButtonCurr = true;
}


function switchPlay() {
if (playButtonCurr) {
    playtoPause();  
} else {
    pausetoPlay();
}
}

function increaseTimeInterval() {
    if (playButtonCurr == false) {
        document.getElementById("time-total").value++;
        var timePassedInterval = document.getElementById("time-total").value;
        document.getElementById("time-elapsed").innerHTML = secondsToMs(timePassedInterval);
    }
    if (document.getElementById("time-total").value == 1800) {
        nextSong();
    }
}

setInterval(increaseTimeInterval, 1800);

var currSong = 6;
function nextSong() {
    document.getElementById("time-total").value = 0;
    document.getElementById("time-elapsed").innerHTML = secondsToMs(0);
    currSong++;
	document.getElementById("player-song-name").innerHTML = tracklist[currSong];
    if (currSong > 9) {
        currSong = 0;
        document.getElementById("player-song-name").innerHTML = tracklist[currSong];
    }
}

function prevSong() {
	// Your code goes here
    document.getElementById("time-total").value = 0;
    document.getElementById("time-elapsed").innerHTML = secondsToMs(0);
    currSong--;
    document.getElementById("player-song-name").innerHTML = tracklist[currSong];
    if (currSong < 0) {
        currSong = 9;
        document.getElementById("player-song-name").innerHTML = tracklist[currSong];
    }
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}