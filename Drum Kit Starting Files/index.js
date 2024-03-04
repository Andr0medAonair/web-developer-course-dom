const drumButtonsQuantity = document.querySelectorAll(".drum").length;

for (let i = 0; i < drumButtonsQuantity; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleEvent);
}

document.addEventListener("keydown", event => {
  handleEvent(event);
});

function handleEvent (event) {
  const button = this.innerHTML ?? event.key;
  switch (button) {
    case "w":
      playAudio("./sounds/crash.mp3");
      buttonAnimation("w");
      break;
    case "a":
      playAudio("./sounds/kick-bass.mp3");
      buttonAnimation("a");
      break;
    case "s":
      playAudio("./sounds/snare.mp3");
      buttonAnimation("s");
      break;
    case "d":
      playAudio("./sounds/tom-1.mp3");
      buttonAnimation("d");
      break;
    case "j":
      playAudio("./sounds/tom-2.mp3");
      buttonAnimation("j");
      break;
    case "k":
      playAudio("./sounds/tom-3.mp3");
      buttonAnimation("k");
      break;
    case "l":
      playAudio("./sounds/tom-4.mp3");
      buttonAnimation("l");
      break;
    default:
      break;
  }
}

function playAudio (soundPath) {
  const audio = new Audio(soundPath);
  audio.play();
}

function buttonAnimation (currentKey) {
  const pressedKey = document.querySelector(`.${currentKey}`);
  pressedKey.classList.add("pressed");
  setTimeout(function () {
    pressedKey.classList.remove("pressed");
  }, 100);
}