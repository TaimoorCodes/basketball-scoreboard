const homeScore = document.getElementById("home-score");
const awayScore = document.getElementById("away-score");

const homePoint1 = document.getElementById("home-score1");
const homePoint2 = document.getElementById("home-score2");
const homePoint3 = document.getElementById("home-score3");
const awayPoint1 = document.getElementById("away-score1");
const awayPoint2 = document.getElementById("away-score2");
const awayPoint3 = document.getElementById("away-score3");

const homeFoul = document.getElementById("home-foul");
const awayFoul = document.getElementById("away-foul");

const homeFoulPoint1 = document.getElementById("home-foul1");
const homeFoulPoint2 = document.getElementById("home-foul2");
const awayFoulPoint1 = document.getElementById("away-foul1");
const awayFoulPoint2 = document.getElementById("away-foul2");

// Timer
const timmer = document.getElementById("countdown-time");
const timer = document.getElementById("countdown-time");
const startTime = 10;
const timerButton = document.getElementById("timer-btn");

const newGame = document.getElementById("newGame");

let time = startTime * 60;
let timerRunning = false
let myTimer = null

// Starting Points
let homePoints = 0;
let awayPoints = 0;
let homeFoulPoints = 0;
let awayFoulPoints = 0;

// Points function
homePoint1.addEventListener("click", () => {
    homePoints += 1
    homeScore.textContent = homePoints
})

homePoint2.addEventListener("click", () => {
    homePoints += 2
    homeScore.textContent = homePoints
})

homePoint3.addEventListener("click", () => {
    homePoints += 3
    homeScore.textContent = homePoints
})

awayPoint1.addEventListener("click", () => {
    awayPoints += 1
    awayScore.textContent = awayPoints
})

awayPoint2.addEventListener("click", () => {
    awayPoints += 2
    awayScore.textContent = awayPoints
})

awayPoint3.addEventListener("click", () => {
    awayPoints += 3
    awayScore.textContent = awayPoints
})

//Foul functions
homeFoulPoint1.addEventListener("click", () => {
    homeFoulPoints += 1
    homeFoul.textContent = homeFoulPoints;
})

homeFoulPoint2.addEventListener("click", () => {
    homeFoulPoints -= 1
    homeFoul.textContent = homeFoulPoints;
})

awayFoulPoint1.addEventListener("click", () => {
    awayFoulPoints += 1
    awayFoul.textContent = awayFoulPoints;
})

awayFoulPoint2.addEventListener("click", () => {
    awayFoulPoints -= 1
    awayFoul.textContent = awayFoulPoints;
})

/*  Allows the points to be added or subtracted 
to #home-score and #away-score.*/
  

homeFoul.addEventListener("click", () => {
    homePoints = homePoints + homeFoulPoints
    homeScore.textContent = homePoints
    homeFoulPoints = 0
    homeFoul.textContent = 0;
})

awayFoul.addEventListener("click", () => {
    awayPoints = awayPoints + awayFoulPoints
    awayScore.textContent = awayPoints
    awayFoulPoints = 0
    awayFoul.textContent = 0;
})

// Clear content function
newGame.addEventListener("click", () => {
    homePoints = 0;
    awayPoints = 0;
    homeFoulPoints = 0;
    awayFoulPoints = 0;
    homeScore.textContent = 0;
    timmer.textContent = "10:00";
    awayScore.textContent = 0;
    homeFoul.textContent = "Foul";
    awayFoul.textContent = "Foul";
    time = startTime * 60
    timerRunning = false;
    clearInterval(myTimer)
})

// Timer function
timerButton.addEventListener('click', () => {
    timerRunning = timerRunning == false ? true : false
    if (timerRunning) {
        time--
        myTimer = setInterval(() => {
            countdown()
        }, 1000)
    } else {
        clearInterval(myTimer)
    }

})

function countdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer.textContent = minutes + ":" + seconds;
    if (time > 0) {
        time--;
    } else {
        clearInterval(myTimer)
    }
}