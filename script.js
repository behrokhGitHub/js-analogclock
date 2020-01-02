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

let hrPosition = 0;
let minPosition = (currMin * 6);
let secPosition = (currSec * 6);

if ( 0 <= currHr <= 12 ) {
  hrPosition =  (currHr*30) + (currMin * 0.5);
} else {
  hrPosition = ((currHr - 12)* 30) + (currMin * 0.5);
}

// Moving elements using javascript
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
