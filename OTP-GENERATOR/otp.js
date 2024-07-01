let num = "0123456789";


const btn = document.querySelector("#btn");
let resutls = document.querySelector("#result");

btn.addEventListener("click",()=>{
    
    let otp = "";

    for(i = 0; i < 4 ; i++){
        otp = otp + num[Math.floor(Math.random()*10)];
    }

    resutls.innerHTML = otp;
})