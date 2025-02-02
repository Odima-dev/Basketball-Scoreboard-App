
let score = 0
//creating functions for adding points
function homeOne() {
    score += 1;
    document.getElementById("home").textContent = score;
}

function homeTwo() {
    score += 2;
    document.getElementById("home").textContent = score;
}

function homeThree() {
    score += 3;
    document.getElementById("home").textContent = score;
}

function guestOne() {
    score += 1;
    document.getElementById("guest").textContent = score;
}

function guestTwo() {
    score += 2;
    document.getElementById("guest").textContent = score;
}

function guestThree() {
    score += 3;
    document.getElementById("guest").textContent = score;
}

//functiin for starting a new game
function newGame() {
    document.getElementById("home").textContent=0;
    document.getElementById("guest").textContent=0;
}