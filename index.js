let homeScoreEl = document.getElementById ("home-score")

let guestScoreEl = document.getElementById ("guest-score")

let homeScore = 0
let guestScore = 0

function  add1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function  add2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function  add3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
function  add4(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function  add5(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function  add6(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
function newGame(){
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}