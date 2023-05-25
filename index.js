// buttonElements 
let goButton = document.getElementById("go");
let readyButton = document.getElementById("ready");
let stopButton = document.getElementById("stop");

// lightEklements 
let goLightEl = document.getElementById("goLight")
let readyLightEl = document.getElementById("readyLight")
let stopLightEl = document.getElementById("stopLight")

//turnedGreenLightcorrespondingwhile clicking Go button
function turnnedGreenLight() {
    goButton.style.backgroundColor = "green";
    readyButton.style.backgroundColor = "#979799"
    stopButton.style.backgroundColor = "#979799"
    goLightEl.style.backgroundColor = "green"
    readyLightEl.style.backgroundColor = "#282c30"
    stopLightEl.style.backgroundColor = "#282c309"

}

function turnnedYellowLight() {
    goButton.style.backgroundColor = "#979799";
    readyButton.style.backgroundColor = "yellow"
    stopButton.style.backgroundColor = "#979799"
    goLightEl.style.backgroundColor = "#282c30"
    readyLightEl.style.backgroundColor = "yellow"
    stopLightEl.style.backgroundColor = "#282c30"

}

function turnnedRedLight() {
    goButton.style.backgroundColor = "#979799";
    readyButton.style.backgroundColor = "#979799"
    stopButton.style.backgroundColor = "red"
    goLightEl.style.backgroundColor = "#282c30"
    readyLightEl.style.backgroundColor = "#282c30"
    stopLightEl.style.backgroundColor = "red"

}