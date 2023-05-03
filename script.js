let char1 = document.getElementById("character");
let char1img = document.getElementById("character-img");
let gWin = document.getElementById("gameWindow");
let obj1 = document.getElementById("obj1");
let resetBtn = document.getElementById("resetBTN");
let welcome = document.getElementById("welcome");
let gHead = document.getElementById("gHead");
let score = document.getElementById("score");
let highscore = document.getElementById("highscore");
let score2 = document.getElementById("score2");
let highscore2 = document.getElementById("highscore2");
let scoreGroup2 = document.getElementsByClassName("scoregroup2")[0];

gWin.addEventListener("click", jump);
function jump(){
    char1.classList.add("jumb");
    setTimeout(()=>{
        char1.classList.remove("jumb");
    },500);
}
var checkDead = setInterval(()=>{
    let charTop = parseInt(window.getComputedStyle(char1).getPropertyValue("top"));
    let obj1left = parseInt(window.getComputedStyle(obj1).getPropertyValue("left"));
    if(charTop >= 250 && obj1left >=10 && obj1left <=40){
        obj1.style.animation="none";
        userMssg("You are lose!");
        resetBtn.style.display="block";
        char1img.src="assets/man-running.png";
        let currentScore = parseInt(score.innerHTML);
        let s2 = parseInt(localStorage.getItem("score"));
        if(localStorage.getItem("score")===null){
            localStorage.setItem("score",currentScore);
        }else if(s2<=currentScore){
            localStorage.setItem("score",currentScore);
        }
        gHead.style.display="none";
        score2.innerHTML=currentScore;
        highscore2.innerHTML=localStorage.getItem("score");
        scoreGroup2.style.display="block";
    }
},10)

resetBtn.addEventListener("click", ()=>{
    obj1.style.animation="objAnim 2s infinite";
    userMssg("");
    resetBtn.style.display="none";
    char1img.src="assets/animated-man-running.gif";
    welcome.style.display="none";
    resetBtn.innerHTML="Play Again";
    gHead.style.display="flex";
    localStorage.getItem("score")===null ? highscore.innerHTML= 0 : highscore.innerHTML= localStorage.getItem("score") ;
    score.innerHTML = 0;
    scoreGroup2.style.display="none";

})
function userMssg(data){
    let mssgpara = document.getElementById("mssg");
    if (data===null || data==="") {
        mssgpara.style.display="none";
        document.getElementById("mssg").innerHTML=data;
    }else{
        mssgpara.style.display="block";
        document.getElementById("mssg").innerHTML=data;
    }
}
setInterval(()=>{
    let s = parseInt(score.innerHTML);
    score.innerHTML = s+1;
},1000)

