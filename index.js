var numOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numOfDrumButtons; i++)
{
   document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
   });
}


