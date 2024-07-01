/* APPROACH :  here, we'll be using three semicircles color shades:
1st we'll have two semicircles red and blue respectively
then we'll rotate red color to 180 deg & blue color to 360 deg
clockwise then we'll another white color to overlap the blue and 
red color. z-index is set up in this kind'a way where the main
main-container bgcolor have lowest z-index and 3rd child 
semi-circle container has the highest z-index value to hide the red
circle under the blue circle and the blue circle under the
white (outermost semi-circle) color. Then we'll rotate the
semi-circles anti-clock wise. */

const semiCircles = document.querySelectorAll(".semi-circle");
const timer = document.querySelector(".timer");

//input
const hr = 0;
const min = 0;
const sec = 10;

//converting the inputs value into miliseconds
const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hours + minutes + seconds ;
const startTime = Date.now();
const futureTime = startTime + setTime;

const timerLoop = setInterval(countDownTimer);
countDownTimer();

function countDownTimer(){
    const currentTime = Date.now();
    const remainingTime = futureTime - currentTime;
    const angle = (remainingTime/setTime) * 360;

    //progress indicator
     if(angle > 180){
        semiCircles[2].style.display = 'none';
        semiCircles[0].style.transform = "rotate(180deg)";
        semiCircles[1].style.transform = `rotate(${angle}deg)`;
     }
     else{
        semiCircles[2].style.display = 'block';
        semiCircles[0].style.transform = `rotate(${angle}deg)`;
        semiCircles[1].style.transform = `rotate(${angle}deg)`;
     }

    //timer
    const hrs = Math.floor((remainingTime / (1000*60*60)) % 24);
    const mins = Math.floor((remainingTime / (1000*60)) % 60);
    const secs = Math.floor((remainingTime / (1000)) % 60);

    timer.innerHTML = `
     <div> ${hrs} </div>
     <div class = "colon"> : </div>
     <div> ${mins} </div>
     <div> : </div>
     <div> ${secs} </div>
    `;

    //5sec-cond
    if(remainingTime <= 6000){
        semiCircles[0].style.backgroundColor = "red";
        semiCircles[1].style.backgroundColor = "red";

    }


    //end
    if(remainingTime < 0){
        clearInterval(timerLoop);
        semiCircles[0].style.display = "none";
        semiCircles[1].style.display = "none";
        semiCircles[2].style.display = "none";

        timer.innerHTML = `
         <div> 00 </div>
         <div class = "colon"> : </div>
         <div> 00 </div>
         <div> : </div>
         <div> 00 </div>
        `;

    }
}