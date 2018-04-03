var mysteryNumber = Math.floor(Math.random() * 100);
var playersGuess = 0;
var guessesRemaining = 10;
var guessesMade = 0;
var gameState = "";
var gameWon = false;
var message = "Пожалуйста, введите число от 0 до 99."

	
	
var input = document.querySelector("input");
var output = document.querySelector(".output");
var button = document.querySelector(".start");
var button2 = document.querySelector(".fairy");
var button3 = document.querySelector(".answer");
button.addEventListener("click", clickHandler, false);
button2.addEventListener("click", clickHandler2, false);
button3.addEventListener("click", clickHandler3, false);
var arrow = document.querySelector(".arrow");

function clickHandler()
{
startGame();
}

function startGame()
{
	var firstp = document.querySelector(".firstp");
	firstp.style.display = "none";
	var secondp =  document.querySelector(".secondp");
	secondp.style.display = "block";
}

function clickHandler2()
{
choice();
}

function choice()
{
	var secondp = document.querySelector(".secondp");
	secondp.style.display = "none";
	var thirdp =  document.querySelector(".thirdp");
	thirdp.style.display = "block";
	window.addEventListener("keydown", keydownHandler, false);
}

function keydownHandler(event)
{
if(event.keyCode === 13)
{
validateInput();
}
}

function clickHandler3()
{
validateInput();
}

function validateInput()
{
	playersGuess = parseInt(input.value);
	input.value = ""
	if(isNaN(playersGuess))
	{
		output.innerHTML = message;
	}
	else if(playersGuess < 0 || playersGuess > 99)
	{
         output.innerHTML = message;
     }
     else
     {
         playGame();
     }
}
function playGame()
{
	guessesRemaining -= 1;
	guessesMade += 1;
	gameState = " Сделано попыток: " + guessesMade +
    ". Осталось: " + guessesRemaining + ".";
	if(playersGuess > mysteryNumber)
	{
		output.innerHTML = "...больше..." + gameState;
		if (guessesRemaining < 1)
		{
			endGame();
		}
	}
	else if(playersGuess < mysteryNumber)
	{
		output.innerHTML = "...меньше..." + gameState;
		if (guessesRemaining < 1)
		{
			endGame();
		}
	}
	else
	{
		gameWon = true;
		endGame();
	}
	render();
	document.getElementsByName('search')[0].focus();
}
function endGame()
{
	if (gameWon)
	{
		output.innerHTML = "Да, это " + mysteryNumber + "!" + "<br>"+ "Количество ваших попыток: " + guessesMade + ".";
	}
	else
	{
		output.innerHTML = "Больше не осталось попыток!" + "<br>"+ "Было загадано число " + mysteryNumber + ".";
	}
	button.removeEventListener("click", clickHandler, false);
button.disabled = true;
button2.removeEventListener("click", clickHandler2, false);
button2.disabled = true;
button3.removeEventListener("click", clickHandler3, false);
button3.disabled = true;
input.placeholder = "Конец игры!";
input.disabled = true;
}
function render ()
{
	arrow.style.left = playersGuess * 6 + 190 + "px";
}
