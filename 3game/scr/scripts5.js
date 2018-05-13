var map = [];
map[0] = "Купе проводника.";
map[1] = "Проход с титаном.";
map[2] = "Купе №1.";
map[3] = "Купе №2.";
map[4] = "Купе №3.";
map[5] = "Купе №4.";
map[6] = "Купе №5.";
map[7] = "Проход к туалетам.";

var mapLocation = 4;

var imagesafter = [];
imagesafter[0] = "кби.png";
imagesafter[1] = "титан.png";
imagesafter[2] = "1бн.png";
imagesafter[3] = "2бр.png";
imagesafter[4] = "купе3.png";
imagesafter[5] = "4бк.png";
imagesafter[6] = "5бл.png";
imagesafter[7] = "туалеты.png";

var images = [];
images[0] = "комната.png";
images[1] = "титан.png";
images[2] = "купе1.png";
images[3] = "купе2.png";
images[4] = "купе3.png";
images[5] = "купе4.png";
images[6] = "купе5.png";
images[7] = "туалеты.png";

var imagesuse = [];
	imagesuse[3] = "2ручка.png";
    imagesuse[4] = "3ср.png";

var blockedPathMessages = [];
blockedPathMessages[0] = "Дальше прохода нет.";
blockedPathMessages[1] = "Кажется, тут нужны ключи.";
blockedPathMessages[7] = "Дальше прохода нет.";

var items = ["инструкцию к титану", "номер", "ключи", "лом"];
var itemLocations = [0, 2, 5, 6];

var backpack = [];

var playersInput = "";
var gameMessage = "";

var actionsIKnow = ["взять", "использовать"];
var action = "";

var youcando = 1;
var gamestatus = 0;

var itemsIKnow = ["инструкцию к титану", "номер", "ручку от радио", "ключи", "лом"];
var item = "";

var image = document.querySelector("img");
var output = document.querySelector(".output");
var input = document.querySelector("input");
var point = document.querySelector(".point");
var pointValue = 378;
var picture = document.querySelector(".screen");
var playgame = document.querySelector(".pbegin");
var text = document.querySelector(".helpyou");

var button1 = document.querySelector(".left");
var button2 = document.querySelector(".right");
var button3 = document.querySelector(".help");
var button4 = document.querySelector(".choise");
var button5 = document.querySelector(".play");
var button6 = document.querySelector(".minus");

button1.addEventListener("click", clickHandler1, false);
button2.addEventListener("click", clickHandler2, false);
button3.addEventListener("click", clickHandler3, false);
button4.addEventListener("click", clickHandler4, false);
button5.addEventListener("click", clickHandler5, false);
button6.addEventListener("click", clickHandler6, false);

render();

function clickHandler1()
{
if(mapLocation > youcando)
{
	mapLocation -= 1;
	point.style.left = pointValue - 95 + "px";
    pointValue = pointValue - 95;
	gameMessage = "";
	render();
	
}
if(mapLocation == youcando && mapLocation != 0)
{
	gameMessage = "Нужно открыть дверь.";
	render();

}
}

function clickHandler2()
{
if(mapLocation < 7)
{
	mapLocation += 1;
	point.style.left = pointValue + 95 + "px";
   pointValue = pointValue + 95;
	gameMessage = "";
	render();
}
}

function clickHandler3()
{
text.style.display = "block";
}

function clickHandler4()
{
playGame();
}

function clickHandler5()
{
playgame.style.display = "none";
}

function clickHandler6()
{
text.style.display = "none";
}

function playGame()
{
	playersInput = input.value;
    playersInput = playersInput.toLowerCase();
	gameMessage = "";
    action = "";
	
	for(i = 0; i < actionsIKnow.length; i++)
   {
     if(playersInput.indexOf(actionsIKnow[i]) !== -1)
      {
      action = actionsIKnow[i];
      console.log("Действие игрока: " + action);
      break;
      }
   }
   
   for(i = 0; i < itemsIKnow.length; i++)
   {
   if(playersInput.indexOf(itemsIKnow[i]) !== -1)
   {
   item = itemsIKnow[i];
   console.log("Выбранный игроком предмет: " + item);
   }
   }
   switch(action)
   {
   case "взять":
   takeItem()
   break;
   case "использовать":
   useItem();
   break;
   default:
   gameMessage = "Я этого не понимаю.";
   }
   render();
}

function takeItem()
{
	var itemIndexNumber = items.indexOf(item);
	if(itemIndexNumber !==  -1 && itemLocations[itemIndexNumber] === mapLocation)
   {
   gameMessage = "Вы взяли " + item + ".";
   backpack.push(item);
   items.splice(itemIndexNumber, 1);
   itemLocations.splice(itemIndexNumber, 1);
   console.log("Предметы МИРА: " + items);
   console.log("Предметы РЮКЗАКА: " + backpack);
	image.src = "images/" + imagesafter[mapLocation];
	images[mapLocation] = imagesafter[mapLocation];
   }
else
{
gameMessage = "Вы не можете это сделать.";
}

}


function useItem()
{
	var backpackIndexNumber = backpack.indexOf(item);
	if(backpackIndexNumber === -1)
    {
    gameMessage = "У вас этого нет.";
    }
	if(backpack.length === 0)
   {
   gameMessage += " У вас ничего нет.";
   }
   if(backpackIndexNumber !== -1)
   {
   switch(item)
   {
	   case "инструкцию к титану":
		   if(mapLocation === 1)
		   {
		   	gameMessage="Вы починили титан!";
			backpack.splice(backpackIndexNumber, 1);
			   gamestatus += 1;
		   }
		   else
		   {
		   	gameMessage="Используйте предмет в другом месте."
		   }
		   break;
		    case "номер":
		   if(mapLocation === 7)
		   {
		   	gameMessage="Вы позвонили начальнику поезда, отопление включено.";
			   backpack.splice(backpackIndexNumber, 1);
			   gamestatus += 1;
		   }
		   else
		   {
		   	gameMessage="Вам стоит поискать телефон."
		   }
		   break;
		    case "ручку от радио":
		   if(mapLocation === 4)
		   {
		   	gameMessage="Вы выключили радио!";
			   backpack.splice(backpackIndexNumber, 1);
			   	image.src = "images/3ср.png";
	            images[mapLocation] = imagesuse[mapLocation];
			   gamestatus += 1;
		   }
		   else
		   {
		   	gameMessage="Похоже, что тут нет радио."
		   }
		   break;
		    case "ключи":
		   if(mapLocation === 1)
		   {
		   	gameMessage="Дверь в ваше купе открыта!";
			   backpack.splice(backpackIndexNumber, 1);
			   youcando = 0;
			   gamestatus += 1;
			render();
		   }
		   else
		   {
		   	gameMessage="Попробуйте найти замок."
		   }
		   break;
		    case "лом":
		   if(mapLocation === 3)
		   {
		   	gameMessage="Вы опустили полку! Кажется, на ней что-то лежит.";
			   backpack.splice(backpackIndexNumber, 1);
			   items = ["инструкцию", "номер", "ручку от радио" , "ключи", "лом"];
               itemLocations = [0, 2, 3, 5, 6];
			   image.src = "images/2ручка.png";
	            images[mapLocation] = imagesuse[mapLocation];
			   gamestatus += 1;
		   }
		   else
		   {
		   	gameMessage="Лом пригодится вам в другом месте."
		   }
		   break;
   }
}
}

function render()
{
	output.innerHTML = map[mapLocation];
	image.src = "images/" + images[mapLocation];
	for(var i = 0; i < items.length; i++)
   {
   if(mapLocation === itemLocations[i] )
   {
   output.innerHTML += " Вы видите здесь <strong>" + items[i] + "</strong>.";
   }
   }

output.innerHTML += "<br><em>" + gameMessage + "</em>";
if(backpack.length !== 0)
{
output.innerHTML += " Вы несете: "
+ backpack.join(", ") ;
}
 console.log("Статус: " + gamestatus);
if(gamestatus == 5)
{
	gameMessage="Вы справились! Из вас получится отличный проводник!";
}

}




