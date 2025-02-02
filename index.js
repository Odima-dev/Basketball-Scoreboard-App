
let scoreHome = 0;
let scoreGuest = 0;

//creating functions for adding points
function homeOne() {
    scoreHome += 1;
    document.getElementById("home").textContent = scoreHome;
    document.getElementById("home").style.color ="#ADFF2F"
}

function homeTwo() {
    scoreHome += 2;
    document.getElementById("home").textContent = scoreHome;
    document.getElementById("home").style.color ="#ADFF2F"
}

function homeThree() {
    scoreHome += 3;
    document.getElementById("home").textContent = scoreHome;
    document.getElementById("home").style.color ="#ADFF2F"
}


function guestOne() {
    scoreGuest += 1;
    document.getElementById("guest").textContent = scoreGuest;
    document.getElementById("guest").style.color ="#ADFF2F"
}

function guestTwo() {
    scoreGuest += 2;
    document.getElementById("guest").textContent = scoreGuest;
    document.getElementById("guest").style.color ="#ADFF2F"
}

function guestThree() {
    scoreGuest += 3;
    document.getElementById("guest").textContent = scoreGuest;
    document.getElementById("guest").style.color ="#ADFF2F"
}

//functiin for starting a new game
function newGame() {
    scoreHome = 0;
    scoreGuest = 0;
    document.getElementById("home").textContent=0;
    document.getElementById("guest").textContent=0;
    document.getElementById("home").style.color ="#F94F6D"
    document.getElementById("guest").style.color ="#F94F6D"
}