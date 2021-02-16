console.log("time to start the timer!");

// Declare variables
var min = 0;
var secs = 0;

var start = document.getElementById("startbtn");
var stop = document.getElementById("stopbtn");
var reset = document.getElementById("resetbtn");

// start method
start.onclick = function start() {
  if (secs == 0) {
    secs = 1;
    increment();
    document.getElementById("startbtn").innerHTML = "Pause";
  } else {
    secs = 0;
    document.getElementById("startbtn").innerHTML = "Resume";
  }
};

// stop method
stop.onclick = function stop() {
  secs = 0;
  document.getElementById("startbtn").innerHTML = "Resume";
};

// reset method
reset.onclick = function reset() {
  secs = 0;
  document.getElementById("startbtn").innerHTML = "Start";
  document.getElementById("output").innerHTML = "0:00";
};

function increment() {
  if (secs == 1) {
    setTimeout(function () {
      min++;
      var mins = Math.floor(min / 10 / 60);
      var secs = Math.floor((min / 10) % 60);
      if (mins < 10) {
        mins = "0" + mins;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }
      document.getElementById("output").innerHTML = mins + ":" + secs;
      increment();
    }, 100);
  }
};
