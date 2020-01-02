// Target ids
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// getting current time using Date class
var date = new Date();
console.log(date);

let currHr = date.getHours();
let currMin = date.getMinutes();
let currSec = date.getSeconds();
console.log("Hour: " + currHr + ", Minute: " + currMin + ", Seconds: " + currSec);

let hrPosition = (currHr * 30) + (currMin * 0.5);
// for each second, minHandle moves (6/60) degree
let minPosition = (currMin * 6) + (currSec * 6/60);
let secPosition = (currSec * 6);

function runTheClock () {

  // moving clocks using math, and not relying on Date object
  // we move the handles, by degree,
  hrPosition = hrPosition + 30/360;
  minPosition = minPosition + 6/60;
  secPosition = secPosition + 6;

  // Moving elements using javascript
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval (runTheClock, 1000);
