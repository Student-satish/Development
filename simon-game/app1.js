let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;


let h2 = document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }
});


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

function checkAns(idx) {
    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    }else {
        h2.innerHTML = `Game over ! your score was <b>${level}</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";

        },150);
        resetGame();
    }
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
    
}

let allBtns = document.querySelectorAll(".btn");


for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}