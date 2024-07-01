//here, we're adding the divs dynamically to the timer class

const timer = document.querySelector(".timer");
const title = document.querySelector(".timer-container h1");

function countdownTimer(){
     
  //here , in tc variable the total number of miliseconds passed since
  //01 jan,1970 to current date

  //current time, tc
  const tc = new Date() - 0;
  //console.log(`tc = ${tc}`);

  //here , in tf variable the total number of miliseconds will pass since
  //01 jan,1970 to the future date (the day when the countdown will end)

  //future time, tf
  //const tf = new Date(2024,1,20,0,0,0) - 0;
  const tf = (new Date() - 0) + 1;
  //console.log(`tf = ${tf}`);

  //time interval, deltaT(the interval time between the current time and the future time)
  const deltaT = tf - tc;
  //console.log(`deltaT = ${deltaT}`);


  //calculations

  //days

  const dayCalc =(deltaT / (1000*3600*24));
  const days = Math.floor(dayCalc);


  //hours

  const hoursCalc = (dayCalc - days)*24;
  const hours = Math.floor(hoursCalc);

  //minutes

  const minCalc = (hoursCalc - hours)*60;
  const mins = Math.floor(minCalc);

  //seconds

   const secondsCalc = (minCalc - mins)*60;
   const seconds = Math.floor(secondsCalc);

  //console.log(seconds);


   //The `data-label` attribute is a custom data attribute in HTML. 
   //Custom data attributes are attributes that begin with the prefix "data-" followed by any name you choose. 
   //These attributes provide a way to store extra information on HTML elements, often for scripting or styling purposes.

     timer.innerHTML = `


     <div data-label = "DAY" >${days}</div>
     <div class="colon">:</div>
     <div data-label = "HR">${hours}</div>
     <div class="colon">:</div>
     <div data-label = "MIN">${mins}</div>
     <div class="colon">:</div>
     <div data-label = "SEC">${seconds}</div>  
   
   `;

   //stopping the timer (logic)
   if(deltaT < 0){
     clearInterval(timerLoop);
     timer.innerHTML = "<h1 class='flash'> Time Ends!!! </h1>";
     title.innerHTML = "<i class ='fas fa-holly-berry fa-4x flash'></i>"
   }
}

const timerLoop = setInterval(countdownTimer,1000);