const BACKWARD_SECONDS = 10;
const FORWARD_SECONDS = 10;
const $video = document.querySelector("#player");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $forward = document.querySelector("#forward");
const $backward = document.querySelector("#backward");
const $progress = document.querySelector("#progress");
const $timeElapsed = document.querySelector("#time-elapsed");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);
$video.addEventListener("loadedmetadata", handleVideoLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);
$progress.addEventListener("input", handleProgressInput);

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

function handleVideoLoaded() {
  $progress.max = $video.duration;
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
}

function handleProgressInput() {
  $video.currentTime = $progress.value;
}
