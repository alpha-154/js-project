const numOpe = document.querySelectorAll("#num-ope-data");
let outEpr = document.getElementById("expression");
let results = document.getElementById("results");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equals-button");
let expressions = "";
const erase = document.getElementById("erase");

Array.from(numOpe).forEach((element) => {

//    console.log(element.innerText);
//    console.log(typeof(element.innerText))
 if(element.innerText != "=" && element.innerText != "C"){

    element.addEventListener("click", (e) => {
        // console.log(e.target);
        // console.log(e.target.innerText);

        expressions += e.target.innerText;
        outEpr.value = expressions;


    });
 }
  

});

function calculateExpression() {
    const calculation = eval(expressions);
    results.value = calculation;
}

equal.addEventListener("click", calculateExpression);

clear.addEventListener("click", () => {
    outEpr.value = "";
    results.value = "";
    expressions = "";
})

erase.addEventListener("click", () => {

    expressions = expressions.substring(0, expressions.length - 1);
    outEpr.value = expressions;
    
})