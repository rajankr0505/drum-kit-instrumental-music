
// click press
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    /*    switch (buttonInnerHTML) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

      case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

      case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

      case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      default:
        
    } */
  }
}

//  keyboard press
document.addEventListener("keypress", keypressbtn);

function keypressbtn(event) {
  makesound(event.key);
  buttonAnimation(event.key);
}

function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
  }
}

function buttonAnimation(currentkey){
  var activeButton=document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");

  setTimeout(remove,200);

  function remove(){
    activeButton.classList.remove("pressed");
  }
}