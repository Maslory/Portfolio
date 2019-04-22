
var field = document.getElementById('field');
var ball = document.getElementById('ball');
var imgCow = document.createElement("img");
var scores = document.getElementById("scores");
imgCow.setAttribute("src","game-pack/cow.png")
imgCow.setAttribute("height", "50px");
imgCow.setAttribute("width", "70px");
imgCow.style.position = "absolute";
field.appendChild(imgCow);
var coordCowTop = getRandomInt(0,550);
var coordCowLeft = getRandomInt(0,750);
var coordKillT = coordCowTop;
var coordKillL = coordCowLeft;
imgCow.style.left = coordCowLeft + 'px';
imgCow.style.top = coordCowTop + 'px';
var scoreKillCow = 0;
var eventFire = 0;
var fire  = document.createElement('img');
fire.setAttribute("src","game-pack/fire.gif")
fire.setAttribute("height", "100px");
fire.setAttribute("width", "100px");
fire.style.position = "absolute";

// window.onload = function() {
//
// };


   function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min)) + min;
   }

field.onmouseover = field.onmouseout = field.onmousemove = handler;
   function handler (event){
     fieldCoords = field.getBoundingClientRect();
     fieldInnerCoords = {
       top: fieldCoords.top + field.clientTop,
       left: fieldCoords.left + field.clientLeft
     };
     ballCoords = {
       top: event.clientY - fieldInnerCoords.top - ball.clientHeight / 2,
       left: event.clientX - fieldInnerCoords.left - ball.clientWidth / 2
     };
     fieldBall = ball.getBoundingClientRect();
     window.killCowT = coordCowTop;
     window.killCowL = coordCowLeft;
     window.targetBallT = Math.round(ballCoords.top);
     window.targetBallL = Math.round(ballCoords.left);
     var startT = 0;
     var startL = 0;
     for (var i = 0; i < 22; i++) {
       if ((coordCowTop >= startT-60 && coordCowTop <= startT+60)  && (fieldBall.top >= startT-60 && fieldBall.top <= startT+60 )){
         for (var i = 0; i < 22; i++){
         if ((coordCowLeft >= startL-60 && coordCowLeft <= startL+60)  && (fieldBall.left >= startL-60 && fieldBall.left  <= startL+60)) {
             setTimeout(removerCows, 90);
             generatorCows();
             break;
         }
         startL+=40;
       }
       }
       startT+=30;
     }
     imgCow.style.display = 'block';
     startT = 0;
   };

function inviseFire (){
  fire.style.display = 'none';
}

 function removerCows() {
   fire.style.left = coordKillL   + 'px';
   fire.style.top = coordKillT + 'px';
   eventFire+=1;
   if (scoreKillCow==eventFire) {
     fire.style.display = 'block';
     coordKillL = coordCowLeft;
     coordKillT = coordCowTop;
   }
   imgCow.style.display = 'none';
   setTimeout(inviseFire, 1700);

 }

 function generatorCows(){
   field.appendChild(fire);
   coordCowTop = getRandomInt(0,550);
   coordCowLeft = getRandomInt(0,750);
   imgCow.style.left = coordCowLeft + 'px';
   imgCow.style.top = coordCowTop + 'px';
   scoreKillCow+=1;
   scores.textContent = scoreKillCow ;
 }

   field.onclick = function ballEvent (event) {
     ball.style.left = ballCoords.left + 'px';
     ball.style.top = ballCoords.top + 'px';
   }
