var alienX = 80;
var alienY = 40;
var guessX = 0;
var guessY = 0;
var shotsRemaining = 8;
var shotsMade = 0;
var gameState = "";
var gameWon = false;

var gun = document.querySelector(".gun");
var monster = document.querySelector(".monster");
var missile = document.querySelector(".missile");
var inputX = document.querySelector(".inputX");
var inputY = document.querySelector(".inputY");
var output = document.querySelector(".output");
var button = document.querySelector("button");
var explosion = document.querySelector(".explosion");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);


function render()
{
monster.style.left = alienX + "px";
monster.style.top = alienY + "px";
gun.style.left = guessX + "px";
missile.style.left = guessX + "px";
missile.style.top = 520 - guessY + "px";

}
function clickHandler()
{
 validateInput();
}

function validateInput()
{
guessX = parseInt(inputX.value);
guessY = parseInt(inputY.value);
if(isNaN(guessX) || isNaN(guessY))
{
output.innerHTML = "Пожалуйста, введите число. ";
}
else if(guessX > 560 || guessX < 0)
{
output.innerHTML = "Значение X должно быть от 0 до 560! ";
}
else if(guessY > 500 || guessY < 0)
{
output.innerHTML = "Значение Y должно быть от 0 до 500! ";
}
else
{
playGame();
}
}

function playGame()
{
	
shotsRemaining -= 1;
shotsMade += 1;
gameState = "Выстрелы: " + shotsMade + ". Осталось: "
+ shotsRemaining + ".";
guessX = parseInt(inputX.value);
guessY = parseInt(inputY.value);

if(guessX >= alienX && guessX <= alienX + 40)
{
if(guessY >= alienY && guessY <= alienY + 40)
{
gameWon = true;
endGame();
}
}
else
{
output.innerHTML = "Мимо! " + gameState;
if (shotsRemaining < 1)
{
endGame();
}
}
if(!gameWon)
{
alienX = Math.floor(Math.random() * 560);
alienY += 60;
}
render(); console.log("X: " + alienX);
console.log("Y: " + alienY);
}
function endGame()
{
if(gameWon)
{
output.innerHTML = "Победа! Вы спасли планету! " + "Израсходовано ракет: " + shotsMade + ".";
explosion.style.display = "block";
monster.style.display = "none";
missile.style.display = "none";
explosion.style.left = alienX + "px";
explosion.style.top = alienY + "px";
}
else
{
output.innerHTML
= "Вы проиграли! " +  "Вторжение началось!";
}
button.removeEventListener("click", clickHandler, false);
button.disabled = true;
inputХ.placeholder = "Конец ";
inputY.placeholder = "игры! ";
inputХ.disabled = true;
inputY.disabled = true;
}