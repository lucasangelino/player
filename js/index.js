const BACKWARD_SECONDS = 10;
const FORWARD_SECONDS = 10;
const $video = document.querySelector("#player");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $forward = document.querySelector("#forward");
const $backward = document.querySelector("#backward");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}
function handlePause() {
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
}

function handleBackward() {
  $video.currentTime -= BACKWARD_SECONDS;
}

function handleForward() {
  $video.currentTime += FORWARD_SECONDS;
}
