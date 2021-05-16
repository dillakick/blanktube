// BlankTube Code
// by Chicago Skyline!

var vid = document.getElementById("myVideo");

function getTime() {
  var currentTimeRounded = Math.round(10 * vid.currentTime) / 10;
  document.getElementsByTagName("small")[0].innerHTML =
    currentTimeRounded + " / " + Math.round(10 * vid.duration) / 10;
  if (vid.currentTime === vid.duration) {
    document.getElementsByTagName("P")[0].innerHTML = "Video has ended.";
    document.getElementsByTagName("button")[0].innerHTML = "Replay Video";
  }
}

function playVid() {
  vid.play();
  document.getElementsByTagName("button")[0].innerHTML = "Play Video";
  document.getElementsByTagName("P")[0].innerHTML = "Playing video...";
  setInterval(getTime, 1);
}

function pauseVid() {
  vid.pause();
  document.getElementsByTagName("P")[0].innerHTML = "Video paused.";
}

function changeSource(url) {
  vid.src = url;
  document.getElementsByTagName("P")[0].innerHTML = "Video changed.";
  if (url.includes("cdn.discordapp.com") === true) {
    document.getElementsByTagName("P")[0].innerHTML = "This video is from Discord. Please be certain you want to watch.";
  }
}

function validateForm() {
  var x = document.forms["myForm"]["video"].value;
    changeSource(x);
}